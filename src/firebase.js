import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  initializeAuth,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJHjCeeUPzgn8R39i6yyeuLa_N35rXrTA",
  authDomain: "sevasetu-cce88.firebaseapp.com",
  projectId: "sevasetu-cce88",
  storageBucket: "sevasetu-cce88.firebasestorage.app",
  messagingSenderId: "248115410260",
  appId: "1:248115410260:web:0c8a8adcae56fa8b0c44c1",
  measurementId: "G-4Z0P5LG5ND",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: browserLocalPersistence,
});

export const db = getFirestore(app);