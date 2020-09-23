import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2LhsHKs7jdA8PBv169If7WZA9WIuWmjE",
    authDomain: "clone-88f48.firebaseapp.com",
    databaseURL: "https://clone-88f48.firebaseio.com",
    projectId: "clone-88f48",
    storageBucket: "clone-88f48.appspot.com",
    messagingSenderId: "801453917993",
    appId: "1:801453917993:web:d9eb25f0320bb2c6f29938"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };