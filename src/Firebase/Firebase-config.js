// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBR5SwDZQPN9yksS-eknmij1psWui9uDJ8",
  authDomain: "movie-buzz-85fcf.firebaseapp.com",
  projectId: "movie-buzz-85fcf",
  storageBucket: "movie-buzz-85fcf.appspot.com",
  messagingSenderId: "471817826497",
  appId: "1:471817826497:web:6aecfb6fbebfc08a37e440",
  measurementId: "G-6PQ9BKHRQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);