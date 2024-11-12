// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuzTKVy3oRPWD475pSxHal7zXv96qTZKs",
  authDomain: "fir-auth-private-route-c72aa.firebaseapp.com",
  projectId: "fir-auth-private-route-c72aa",
  storageBucket: "fir-auth-private-route-c72aa.firebasestorage.app",
  messagingSenderId: "941690336894",
  appId: "1:941690336894:web:fee9e0b48775e097a74a2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);