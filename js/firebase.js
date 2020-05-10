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

function handleSignUp() {
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
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      window.location.href = 'index.html';
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

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
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
  }).then(user => {
    window.location.href = 'index.html';
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}