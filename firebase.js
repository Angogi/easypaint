import firebase from "firebase";
import 'firebase/storage';

  const firebaseConfig = {
    apiKey: "AIzaSyDFIthwy7aD427NTp-XM5FY9XtTlCQkgtQ",
    authDomain: "easypaintnext.firebaseapp.com",
    dataBaseURL: 'gs://easypaintnext.appspot.com/',
    projectId: "easypaintnext",
    storageBucket: "easypaintnext.appspot.com",
    messagingSenderId: "207802602570",
    appId: "1:207802602570:web:f628de61752e109a79c2b3",
    measurementId: "G-B4RSSNMJ25"
  };

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

export { db, storage, auth };