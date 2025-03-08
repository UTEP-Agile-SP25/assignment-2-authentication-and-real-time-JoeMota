// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT0eyZpKnihJgo0B_pabOniyBUtu42gD8",
  authDomain: "motasandbox.firebaseapp.com",
  projectId: "motasandbox",
  storageBucket: "motasandbox.firebasestorage.app",
  messagingSenderId: "16624035458",
  appId: "1:16624035458:web:fcae2a7ea707225ef5b69b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
