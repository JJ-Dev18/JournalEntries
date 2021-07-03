import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBjfxnd73TlrN_6yP4SCNgkvMbyXTCFFyY",
    authDomain: "react-curso-udemy-9b1d3.firebaseapp.com",
    databaseURL: "https://react-curso-udemy-9b1d3.firebaseio.com",
    projectId: "react-curso-udemy-9b1d3",
    storageBucket: "react-curso-udemy-9b1d3.appspot.com",
    messagingSenderId: "672484412531",
    appId: "1:672484412531:web:bb586f0b1276360a96ee06"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{
      db,
      googleAuthProvider,
      firebase,
  }

