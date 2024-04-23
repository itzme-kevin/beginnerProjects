import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, push, update } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const appsettings = {
    databaseURL: "https://login-with-firebase-edddf-default-rtdb.firebaseio.com/"
};

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXM3SGOYvIw60OjwYophFjkr7lHUNuCQk",
  authDomain: "login-with-firebase-edddf.firebaseapp.com",
  projectId: "login-with-firebase-edddf",
  storageBucket: "login-with-firebase-edddf.appspot.com",
  messagingSenderId: "77372136135",
  appId: "1:77372136135:web:c61759778eced68010fce2"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();




document.addEventListener("DOMContentLoaded", (e) => {
    const loginButton = document.getElementById("login_button");

    loginButton.addEventListener("click", (e) => {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
       

           signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               // Signed in 
             const user = userCredential.user;
             alert('Logined');
             window.location.href = "staff_info.html";
                    // ...
             })
               .catch((error) => {
               const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorMessage);
             });

});
});

 