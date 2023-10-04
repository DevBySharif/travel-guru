// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK7dXxjkrYDGXtneon1NAR688egsscM3s",
  authDomain: "travel-guru-aec48.firebaseapp.com",
  projectId: "travel-guru-aec48",
  storageBucket: "travel-guru-aec48.appspot.com",
  messagingSenderId: "656821606664",
  appId: "1:656821606664:web:d208468609d2b1aacaf4bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export default auth