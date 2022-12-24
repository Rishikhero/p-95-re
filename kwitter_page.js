//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBYDDWGpOFfnJmKQNhihSCvarq40sCLgCQ",
      authDomain: "whatsitter.firebaseapp.com",
      databaseURL: "https://whatsitter-default-rtdb.firebaseio.com",
      projectId: "whatsitter",
      storageBucket: "whatsitter.appspot.com",
      messagingSenderId: "927974527920",
      appId: "1:927974527920:web:0c7bb0366ff68233b7bc75",
      measurementId: "G-YGJB6XE5TN"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            like:0,
            message:msg,
            name:user_name,
      })
       }


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
namei = message_data['name'];
like = message_data['like'] ;
message = message_data['message'];
name_with_tage = "<h4> "+ namei +"<img class='user_tick' src='tick.png'>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
like_span = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tage + message_with_tag + like_button + like_span;

document.getElementById("output").innerHTML += row;


//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
       likes = document.getElementById(button_id).value;
       updated_likes = Number(likes) + 1;
       console.log(updated_likes);


      firebase.database().ref(room_name).child(message_id).update
      ({
             like : updated_likes
             });
}






function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }
    
