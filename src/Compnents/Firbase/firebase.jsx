// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqQomRzlLxgExQQiR9smqx8dCNA3Sqh_M",
  authDomain: "clone-project-1729a.firebaseapp.com",
  projectId: "clone-project-1729a",
  storageBucket: "clone-project-1729a.appspot.com",
  messagingSenderId: "56893127002",
  appId: "1:56893127002:web:6c48ef5f6580aeb6f31b63",
  measurementId: "G-RJH3BK4RJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth(app)

export {db,auth}