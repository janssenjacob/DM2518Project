var firebaseConfig = {
  apiKey: "AIzaSyDaRcu7ldHzrYsYv0721sEB103EJDsx6Z8",
  authDomain: "dm2518project.firebaseapp.com",
  databaseURL: "https://dm2518project.firebaseio.com",
  projectId: "dm2518project",
  storageBucket: "dm2518project.appspot.com",
  messagingSenderId: "465561954957",
  appId: "1:465561954957:web:db8aaeb8d1bc99dec050c4",
  measurementId: "G-H0VPGN111D"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var uid;

function handleSignUp() {
  var name = document.getElementById('user-name').value;
  var email = document.getElementById('user-email').value;
  var password = document.getElementById('user-pass').value;
  var repeatpass = document.getElementById('user-repeatpass').value;

  if (repeatpass !== password) {
    alert('Please repeat your password correctly.');
    return;
  }
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }

  firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
      var user = result.user;
      user.updateProfile({
        displayName: name,
        photoURL: "./pic/fork-clipart-cartoon-3.png",
      }).then(() => {
        uid = user.uid;
        console.log(uid);
        writeUserData(user);
      }).then(() => {
        window.location.href = 'index.html';
      })
    })
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  })
}

function handleSignIn() {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  } else {
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
      uid = result.user.uid;
      console.log(uid);
      window.location.href = 'index.html';
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    })
  }
}

function handleGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    uid = user.uid;
    console.log(uid);
    if (result.additionalUserInfo.isNewUser)
      writeUserData(user);
  }).then(() => {
    window.location.href = 'index.html';
  }).catch(function (error) {
    // Handle Errors here.
    console.log(error);
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

function handleReset() {
  var email = document.getElementById('inputEmail').value;
  firebase.auth().sendPasswordResetEmail(email).then(function() {
    alert('An email has sent to your email address.');
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error);
  })
}

function handleLogOut() {
  firebase.auth().signOut().then(function() {
    window.location = 'login.html';
  }).catch(function(error) {
    alert('An error occurred.')
    console.log(error);
    // An error happened.
  });
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('in');
    console.log(user);
    uid = user.uid;
  } else {console.log('out')}
})
}

function writeUserData(user) {
  var newUser = {
    id: uid,
    username: user.displayName,
    email: user.email,
    picture: user.photoURL,
    List: '',
  };
  firebase.database().ref('Users/'+uid).set(newUser);
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // console.log('in');
    // console.log(user);
    uid = user.uid;
    firebase.database().ref('Users/'+uid+'/Friends').once('value').then(function (snapshot) {
      snapshot.forEach(child => {
        displayFriends(child.val());
      });
    });
  } else {console.log('out')}
});
