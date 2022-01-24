var firebaseConfig = {
      apiKey: "AIzaSyAGFW_LfzfZdAUsgqeGoA8i9n0wOrGsJag",
      authDomain: "kwitter-5560d.firebaseapp.com",
      databaseURL: "https://kwitter-5560d-default-rtdb.firebaseio.com",
      projectId: "kwitter-5560d",
      storageBucket: "kwitter-5560d.appspot.com",
      messagingSenderId: "250407316905",
      appId: "1:250407316905:web:987938f2ff6fe9dac428b8",
      measurementId: "G-06266CCQYS"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
     
    var user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML= ' Welcome ' + user_name + ' ! ';
      
    function logout()
    {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
    }
    function addRoom()
    {
          room_name = document.getElementById("room_name").value ;
         firebase.database().ref("/").child(room_name).update({
               purpose:"Adding room"
         });
         
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     row = "<div class='room_name' id = "+Room_names+" onclick = 'RedirectToRoomName(this.id)' >#" +Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row;
      });});}
getData();

function RedirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
