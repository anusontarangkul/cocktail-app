// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDycdBORxQ1bJ3QL6BBpLyrBy0iGVRkCRQ",
    authDomain: "cocktail-afeae.firebaseapp.com",
    projectId: "cocktail-afeae",
    storageBucket: "cocktail-afeae.appspot.com",
    messagingSenderId: "765671758106",
    appId: "1:765671758106:web:e22dd69d7ce011001f34a3",
    measurementId: "G-SZNCDWKGVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);