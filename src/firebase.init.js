// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBYLhbhWd1kEE56se3a0THnpWYO7TgTA0",
    authDomain: "pixel-camera-c8298.firebaseapp.com",
    projectId: "pixel-camera-c8298",
    storageBucket: "pixel-camera-c8298.appspot.com",
    messagingSenderId: "864998059403",
    appId: "1:864998059403:web:fa8c5ae30ea7121568138e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;