
const firebaseConfig = {
      apiKey: "AIzaSyASy7gpa6Qe1Vtnlv-hfzACONS-D4RWLlI",
      authDomain: "kwitter-fc0d0.firebaseapp.com",
      databaseURL: "https://kwitter-fc0d0-default-rtdb.firebaseio.com",
      projectId: "kwitter-fc0d0",
      storageBucket: "kwitter-fc0d0.appspot.com",
      messagingSenderId: "1059949013558",
      appId: "1:1059949013558:web:d6e01a748c55be12b5c697"
    };
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + username + " !";

function addroom()
{
      roomname = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", roomname);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomname(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomname(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}