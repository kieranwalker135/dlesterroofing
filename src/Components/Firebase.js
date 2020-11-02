import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyAQEV0xU3SRHY3b7ZZrbSdKze--TNL1Is0",
    authDomain: "d-lester-contact-form.firebaseapp.com",
    databaseURL: "https://d-lester-contact-form.firebaseio.com",
    projectId: "d-lester-contact-form",
    storageBucket: "d-lester-contact-form.appspot.com",
    messagingSenderId: "769814116067",
    appId: "1:769814116067:web:597669c7916053387037d6"
  
})

const db = firebaseApp.firestore();

export { db };

export default firebaseApp

