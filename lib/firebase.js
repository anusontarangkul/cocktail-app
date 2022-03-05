
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDycdBORxQ1bJ3QL6BBpLyrBy0iGVRkCRQ",
    authDomain: "cocktail-afeae.firebaseapp.com",
    projectId: "cocktail-afeae",
    storageBucket: "cocktail-afeae.appspot.com",
    messagingSenderId: "765671758106",
    appId: "1:765671758106:web:e22dd69d7ce011001f34a3",
    measurementId: "G-SZNCDWKGVV"
};


const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app)

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const auth