// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFs4jR20gErtq7dgcq1EICSLmEjrQfwJM",
  authDomain: "netflixgpt-c75dc.firebaseapp.com",
  projectId: "netflixgpt-c75dc",
  storageBucket: "netflixgpt-c75dc.appspot.com",
  messagingSenderId: "400969339682",
  appId: "1:400969339682:web:5ec760ac3a42f4117c0b7b",
  measurementId: "G-5RJWRXDHLX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
