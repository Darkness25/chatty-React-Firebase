import firebase from 'firebase';

const config =    {
    apiKey: "AIzaSyCEiOCkc0pl4IxBFzDU0Eo7arW7AK6TYHo",
    authDomain: "react-firebase-a9a26.firebaseapp.com",
    projectId: "react-firebase-a9a26",
    storageBucket: "react-firebase-a9a26.appspot.com",
    messagingSenderId: "512067262119",
    appId: "1:512067262119:web:0496791afb9afacc896d82"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();