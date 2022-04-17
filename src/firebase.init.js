import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuHEwJQr44PRwA7wqv9muSZkkAUSZiY9U",
    authDomain: "travel-with-backpacker.firebaseapp.com",
    projectId: "travel-with-backpacker",
    storageBucket: "travel-with-backpacker.appspot.com",
    messagingSenderId: "328400166987",
    appId: "1:328400166987:web:a0c3d75959f374ada3edce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;