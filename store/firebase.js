// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKXr6rUH9axD9aWqTUG6PpS-kltBlqpsw",
  authDomain: "testapp-ceba5.firebaseapp.com",
  databaseURL: "https://testapp-ceba5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testapp-ceba5",
  storageBucket: "testapp-ceba5.appspot.com",
  messagingSenderId: "1020017364884",
  appId: "1:1020017364884:web:3b6cc7dcf10c006799c981"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);

 
