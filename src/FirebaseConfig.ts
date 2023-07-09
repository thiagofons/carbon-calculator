import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import * as firestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdrR-1qacY_7QytQDONX0m3Zp4gG4qVRo",
  authDomain: "calculadora-admin.firebaseapp.com",
  projectId: "calculadora-admin",
  storageBucket: "calculadora-admin.appspot.com",
  messagingSenderId: "974922531526",
  appId: "1:974922531526:web:6f867a8d4f504b2f748dc7"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = firestore.getFirestore(app);
export const auth = firebaseAuth.initializeAuth(app);

