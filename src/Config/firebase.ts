// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, OAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu-hpVwlm8HdiFVksSDoQFCMlNk-WPYxc",
  authDomain: "loginpage-2ceeb.firebaseapp.com",
  projectId: "loginpage-2ceeb",
  storageBucket: "loginpage-2ceeb.firebasestorage.app",
  messagingSenderId: "541577796422",
  appId: "1:541577796422:web:b22eced8a4777f4ebea347",
  measurementId: "G-GREL8HLMKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth stuff for Google, Facebook and Apple login
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const appleProvider = new OAuthProvider('apple.com');
