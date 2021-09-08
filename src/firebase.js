import firebase from "firebase/app";
import"firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBPO0PaS9qYsMbO1burOyvN3x6wRsJNOPk",
    authDomain: "mychat-eff4e.firebaseapp.com",
    projectId: "mychat-eff4e",
    storageBucket: "mychat-eff4e.appspot.com",
    messagingSenderId: "167613988539",
    appId: "1:167613988539:web:52f80bfa240a762f76b39e"
  }).auth();