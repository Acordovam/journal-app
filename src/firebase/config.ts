// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYUxpTH-dDozjEsEnSd51HXXFFQDIYn4I",
    authDomain: "react-cursos-723c2.firebaseapp.com",
    projectId: "react-cursos-723c2",
    storageBucket: "react-cursos-723c2.appspot.com",
    messagingSenderId: "558770200418",
    appId: "1:558770200418:web:4559a08cac6ed1f5e9163b"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
