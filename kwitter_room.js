
const firebaseConfig = {
  apiKey: "AIzaSyCpORpHvPwu2yVXhvlhP8_QC25Qv-rBh3o",
  authDomain: "kwitter-6bbbc.firebaseapp.com",
  databaseURL: "https://kwitter-6bbbc-default-rtdb.firebaseio.com",
  projectId: "kwitter-6bbbc",
  storageBucket: "kwitter-6bbbc.appspot.com",
  messagingSenderId: "487223093528",
  appId: "1:487223093528:web:2bcd9538bc267f1bd3166d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
