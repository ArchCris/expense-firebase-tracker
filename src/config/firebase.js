// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import{ getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpYBmadu9IOc21CRSQ970clpyCelMoUCw",
  authDomain: "expense-tracker-45040.firebaseapp.com",
  projectId: "expense-tracker-45040",
  storageBucket: "expense-tracker-45040.appspot.com",
  messagingSenderId: "22622751809",
  appId: "1:22622751809:web:2ee2e9c3c65439c19c4ac0",
  measurementId: "G-YPP0F7PBGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);
