import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDxgKr7CLt7gKLP182C9ONVDEp3LX5vjK4",
  authDomain: "crwn-clothing-t2-db.firebaseapp.com",
  databaseURL: "https://crwn-clothing-t2-db.firebaseio.com",
  projectId: "crwn-clothing-t2-db",
  storageBucket: "crwn-clothing-t2-db.appspot.com",
  messagingSenderId: "473199715063",
  appId: "1:473199715063:web:e0a608546f67016789a9f2",
  measurementId: "G-ESQQEQ30B4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
