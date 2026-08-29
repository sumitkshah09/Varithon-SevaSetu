import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // your Firebase config
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
// for login 
import {
  signInWithEmailAndPassword
} from "firebase/auth";

import { auth } from "../firebase";
const handleLogin = async () => {
  try {
    const userCredential =
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

    const user = userCredential.user;

    console.log("Logged in:", user.uid);

  } catch (error) {
    console.error(error);
  }
};where 