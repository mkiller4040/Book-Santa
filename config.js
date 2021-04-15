import firebase from 'firebase'

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDHxdQpYtobScUuEdRZj56861sjaDAlgk8",
    authDomain: "booksanta-ab528.firebaseapp.com",
    projectId: "booksanta-ab528",
    storageBucket: "booksanta-ab528.appspot.com",
    messagingSenderId: "1013144337777",
    appId: "1:1013144337777:web:9fcae9c62b34e436c10ad0",
    measurementId: "G-BPZCHT2JB4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase.firestore()