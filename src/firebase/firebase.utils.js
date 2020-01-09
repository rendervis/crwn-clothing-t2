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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
