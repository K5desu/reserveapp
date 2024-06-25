// Import the functions you need from the SDKs you need
import "firebase/compat/database";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACTSRf4rSTsdy9CXO0uNFHVaTwwrFfTDM",
  authDomain: "reserveapp-c0dbd.firebaseapp.com",
  databaseURL: "https://reserveapp-c0dbd-default-rtdb.firebaseio.com",
  projectId: "reserveapp-c0dbd",
  storageBucket: "reserveapp-c0dbd.appspot.com",
  messagingSenderId: "314286825120",
  appId: "1:314286825120:web:4b5014ee0cc47fac23b3c5",
  measurementId: "G-BRJXP0DDRJ",
};

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

// Initialize Realtime Database and get a reference to the service

// Initialize Firebase
