import firebase from "firebase/compat/app";
import 'firebase/firestore';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAQB3qWGddWi9SOr268l7CxgW2-oefCcVU",
  authDomain: "chatplace-aff95.firebaseapp.com",
  projectId: "chatplace-aff95",
  storageBucket: "chatplace-aff95.appspot.com",
  messagingSenderId: "298349725207",
  appId: "1:298349725207:web:df6289e351f3a3ab2b7e52"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const app = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  // const db = app.firestore();

  export default db;