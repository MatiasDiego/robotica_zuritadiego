// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxkJvvVYcr5FXVYYdBb9-yrvlT0Not3UI",
  authDomain: "robotica-ecommerce.firebaseapp.com",
  projectId: "robotica-ecommerce",
  storageBucket: "robotica-ecommerce.appspot.com",
  messagingSenderId: "7088955762",
  appId: "1:7088955762:web:12cddf36062c1b689c7deb"
};

// Initialize Firebase with our project
const app = initializeApp(firebaseConfig);
// Use app variable to connect with firestore
export const db = getFirestore(app);