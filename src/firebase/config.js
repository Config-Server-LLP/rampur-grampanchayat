// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1NSigGs22bNLgZF8Zg1hsDXtV_ryDBww",
  authDomain: "grampanchyatrampur-4dc83.firebaseapp.com",
  projectId: "grampanchyatrampur-4dc83",
  storageBucket: "grampanchyatrampur-4dc83.firebasestorage.app",
  messagingSenderId: "192451876072",
  appId: "1:192451876072:web:13642073f4c5e2b8d8655d",
  measurementId: "G-YG0QGFJHZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);