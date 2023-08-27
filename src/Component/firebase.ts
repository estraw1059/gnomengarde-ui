// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALF3GXJkEhWvwtwLtIcIVtLYL3LtjPOSw",
  authDomain: "gnomengarde.firebaseapp.com",
  projectId: "gnomengarde",
  storageBucket: "gnomengarde.appspot.com",
  messagingSenderId: "175528584139",
  appId: "1:175528584139:web:786e1d7128c34ad20d0c4e",
  measurementId: "G-TX0XVMZ5S1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);