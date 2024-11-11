// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6CMNYWtrAz0AHBaf4QCBbfqNcLpC5tMA",
  authDomain: "email-password-auth-bb2da.firebaseapp.com",
  projectId: "email-password-auth-bb2da",
  storageBucket: "email-password-auth-bb2da.firebasestorage.app",
  messagingSenderId: "635460483760",
  appId: "1:635460483760:web:0addcc60e2ca9290a01975"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);