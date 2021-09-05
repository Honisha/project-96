//YOUR FIREBASE LINKS
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
  room_name = localStorage.getItem("room_name");
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name : user_name,
          message : msg,
          like : 0
    });
    document.getElementById("msg").value = "";
}