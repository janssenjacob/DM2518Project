 /*
    // Ronghua Code 
    var tempList = "";
    var Chinese = "";
    var Spring = "";
    var Vegan = "";
    var Mother = "";
    var Easter = "";
    var SlowCook = "";
    var RecipeList = firebase.database().ref('RecipeList');
    RecipeList.on('value', function(snapshot) {
        Chinese = snapshot.val().chinese;
        Easter = snapshot.val().easter;
        Spring = snapshot.val().spring;
        Soup = snapshot.val().soup;
        Vegan = snapshot.val().vegan;
        SlowCook = snapshot.val().slowcook;
        Mother = snapshot.val().mothers;
    },
    
    console.log(Chinese[1].Img)
    );
    */

    /*
    firebase.database().ref('RecipeList').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        var childTitle = childSnapshot.title;
        var childImg = childSnapshot.Img;
        console.log("Total Record : "+childTitle);
        });
    });
  

     // Assume we have the following data in the Database:
    {
    "name": {
        "first": "Ada",
        "last": "Lovelace"
    }
    }

    // Test for the existence of certain keys within a DataSnapshot
    var ref = firebase.database().ref("users/ada");
    ref.once("value")
    .then(function(snapshot) {
        var name = snapshot.child("name").val(); // {first:"Ada",last:"Lovelace"}
        var firstName = snapshot.child("name/first").val(); // "Ada"
        var lastName = snapshot.child("name").child("last").val(); // "Lovelace"
        var age = snapshot.child("age").val(); // null
    });
        
*/


// Loop from chinese
/* Let values can change, const can't */
const ref = firebase.database().ref("RecipeList");
console.log(ref.key);
dataImg = {};
dataTitle = {};

ref.child("chinese").on('value',(snap)=>{
const totalRecord =  snap.numChildren();
console.log("Total Record : "+totalRecord);
});

ref.child("vegan").on('value',(snap)=>{
const totalRecord =  snap.numChildren();
console.log("Total Record : "+totalRecord);
});

ref.child("mothers").on('value',(snap)=>{
const totalRecord =  snap.numChildren();
console.log("Total Record : "+totalRecord);
});


// Loop from 0 < i < totalRecord
// Logg Img, Title in a list 
// Display images
// Listen for event in which you write the state of like/cooked to Firebase
// Boolean
// Display random images in home page (is there a function for this?)
ref.once("value").then(function(snapshot) {
        
        let recipeImg = snapshot.child("chinese/0/Img").val(); // www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2017/10/asian-greens.jpg?itok=YxKhuiFG
        let recipeTitle = snapshot.child("chinese/0/Title").val(); //"Asian greens" 
        console.log(recipeImg, recipeTitle)
        console.log(recipeTitle);
});


/*
list.delegate = {
    createItemContent: function (index) {
      // Return a DOM element here.
      // return ons.createElement( '<ons-list-item id="listitem'+index+'">Item'+index+'</ons-list-item>');
      // console.log(Chinese[index].Img);
      var listitem = '<ons-list-item id="'+index+'" onclick="showDetail(\'detail.html\',this)">'+
        '<div class="left"> '+
        '<img class="list-item__thumbnail"src="https://'+tempList[index].Img+'">'+
        '</div>'+
        '<div class="center">'+
        ' <span class="list-item__title">'+tempList[index].Title+'</span><span class="list-item__subtitle">'+tempList[index].Skill+'</span>'+
        '</div>'+
        '</ons-list-item>';
        
      return ons.createElement(listitem);
    },
}
*/


/*
    for (let j = 0; j < totalRecord; j++){
        for (let i = 0; i < 8; i++){     
            dataImg = snapshot.child("chinese/" + j + "/Img").val(); //"Null"
            dataTitle = snapshot.child("chinese/" + j + "/Title").val(); //"Null"
            }
        }
console.log(dataImg);
console.log(dataTitle);
});

/*
ref.once("value").then(function(snapshot) {
//var recipeImg = snapshot.child("chinese/0/Img").val(); // www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2017/10/asian-greens.jpg?itok=YxKhuiFG
//var recipeTitle = snapshot.child("chinese/0/Title").val(); //"Asian greens" 
var dataList = [];

var totalRecord =  snapshot.numChildren();
console.log("Total Record : "+totalRecord);

var data = snapshot.child(foodType.chinese + 0 + "/Img").val(); 
    console.log(data);


    //console.log({k});
    //k = k++;
}
)

/* Anna
    var recipeData = firebase.database().ref("RecipeList");
    recipeData.once("value").then(function(snapshot) {
        var recipeImg = snapshot.child("chinese/0/Img").val(); // www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2017/10/asian-greens.jpg?itok=YxKhuiFG
        var recipeTitle = snapshot.child("chinese/0/Title").val(); //"Asian greens" 
        var foodType = ["chinese", "easter", "mothers", "slowcook", "soup", "spring", "vegan"]
        var data = { img: Img, title: Title};
        var state = { like: true, cooked: false}
        console.log(recipeImg);
        console.log(recipeTitle);
        
        var dataImg = [];
        var dataTitle = [];
        var k = 0;
        var totalRecord =  snapshot.numChildren();
        console.log("Total Record : "+totalRecord);
        for (let j = 0; j < totalRecord; j++){
            for (let i = 0; i < foodType.length; i++){     
                dataImg[k] = snapshot.child(foodType[i] + j + "/Img").val(); //"Null"
                dataTitle[k] = snapshot.child(foodType[i] + j + "/Title").val(); //"Null"
                console.log({data});
                console.log({k});
                k = k++;
                }
            }
        }
    )
    
*/
        
    

    /*

    var recipes = firebase.database().ref('RecipeList/');
    recipes.on('value', function(snapshot) {
    updateStarCount(postElement, snapshot.val());});

    // Get a key for a new Post.

    /*
    var imagesData = firebase.database().ref('RecipeList');
    var firstchild = imagesData.child('chinese/1/Img')
    var path = imagesData.toString();
    console.log({path});
    */

    /*
    var imagesData = firebase.database().ref('RecipeList');
    
    ref.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    var childKey = childSnapshot.key;
    var childData = childSnapshot.val();
    // ...
        });
    });
 
/*
    // Like functionality, adding post to "Liked"-posts //

    // Create a new post reference with an auto-generated id
    var newLike = likeList.push();
    newLike.set({
        // ...
    });

    // Child removed //

    var commentsRef = firebase.database().ref('post-comments/' + postId);
    commentsRef.on('child_added', function(data) {
    addCommentElement(postElement, data.key, data.val().text, data.val().author);
    });

    commentsRef.on('child_changed', function(data) {
    setCommentValues(postElement, data.key, data.val().text, data.val().author);
    });

    commentsRef.on('child_removed', function(data) {
    deleteComment(postElement, data.key);
    });
*/
