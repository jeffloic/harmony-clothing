import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDNeJbscN9NjntRxULh1SL2_QI9dWG2jV4",
    authDomain: "harmony-db.firebaseapp.com",
    databaseURL: "https://harmony-db.firebaseio.com",
    projectId: "harmony-db",
    storageBucket: "harmony-db.appspot.com",
    messagingSenderId: "110999663064",
    appId: "1:110999663064:web:e921fcc779f6f9111b42ad",
    measurementId: "G-V2F5QBK2EZ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;