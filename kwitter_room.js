
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDx7x6b8sFz9D2WynLYLVSYLx4trgOvlzM",
      authDomain: "kwitter-c862b.firebaseapp.com",
      databaseURL: "https://kwitter-c862b-default-rtdb.firebaseio.com",
      projectId: "kwitter-c862b",
      storageBucket: "kwitter-c862b.appspot.com",
      messagingSenderId: "420013019039",
      appId: "1:420013019039:web:58c893e79a5cd6fa17b7aa",
      measurementId: "G-15XMG0P5BV"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome  " + user_name + " !";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update(
            {
                purpose : "adding room name"
            }
        );
        localStorage.setItem("room_name", room_name);
        window.location = "Kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}

getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name); 
  window.location = "Kwitter_page.html";    
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
