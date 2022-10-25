// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD37jbNXJ4kp3T6BMamC5C8zqg0UEjXi-Q",
  authDomain: "geolocation-core-service.firebaseapp.com",
  databaseURL:
    "https://geolocation-core-service-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "geolocation-core-service",
  storageBucket: "geolocation-core-service.appspot.com",
  messagingSenderId: "175859049558",
  appId: "1:175859049558:web:223ae41e7ce849b7af47f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
