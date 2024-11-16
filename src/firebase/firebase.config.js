// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9RcjFyq1O_Pu5WZL189vPtDvTdS0HBQs",
  authDomain: "dragon-news-pro.firebaseapp.com",
  projectId: "dragon-news-pro",
  storageBucket: "dragon-news-pro.firebasestorage.app",
  messagingSenderId: "509942745323",
  appId: "1:509942745323:web:9f98e36ae1c5cc5c79d6ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
