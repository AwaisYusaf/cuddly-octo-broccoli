// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmob3tm2uyLiSOchN8SYMriyYVQ1iVYaU",
    authDomain: "lisa-store.firebaseapp.com",
    projectId: "lisa-store",
    storageBucket: "lisa-store.appspot.com",
    messagingSenderId: "554550133164",
    appId: "1:554550133164:web:265bcdb040621cb0293a09",
    measurementId: "G-3RMC0HLYFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };