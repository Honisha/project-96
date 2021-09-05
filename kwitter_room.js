//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBzcRhXFC-JcWksVgTORvXjiKVO52LJB9E",
      authDomain: "kwitter-test-4a3c9.firebaseapp.com",
      databaseURL: "https://kwitter-test-4a3c9-default-rtdb.firebaseio.com",
      projectId: "kwitter-test-4a3c9",
      storageBucket: "kwitter-test-4a3c9.appspot.com",
      messagingSenderId: "608228461412",
      appId: "1:608228461412:web:f0e4f0471dbb4f43c60871"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name"+Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirectToRoom(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location("kwitter_page.html");
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}