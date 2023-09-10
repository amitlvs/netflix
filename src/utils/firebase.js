// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWK-FVh8cWt0AdES4qRIXQ5euUZpJhSL8",
  authDomain: "netflixgpt-479f9.firebaseapp.com",
  projectId: "netflixgpt-479f9",
  storageBucket: "netflixgpt-479f9.appspot.com",
  messagingSenderId: "275242103179",
  appId: "1:275242103179:web:c7d8678b17d61f57853f8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
