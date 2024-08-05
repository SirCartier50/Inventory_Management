// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAKHpBlBbOQXNQtRtSN972tm5zLDJOy0w",
  authDomain: "inventory-management-e9823.firebaseapp.com",
  projectId: "inventory-management-e9823",
  storageBucket: "inventory-management-e9823.appspot.com",
  messagingSenderId: "315257745142",
  appId: "1:315257745142:web:fc154774b2b4064f3a86d7",
  measurementId: "G-SW46YJD3B9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
export {firestore}