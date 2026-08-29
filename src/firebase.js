import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC53Ipe8wHEBb_wevpU3HdZbetCGAH81LY",
  authDomain: "sevasetu-4b505.firebaseapp.com",
  projectId: "sevasetu-4b505",
  storageBucket: "sevasetu-4b505.firebasestorage.app",
  messagingSenderId: "296506378377",
  appId: "1:296506378377:web:7070312c0da7a85c705e58",
  measurementId: "G-J6JM1E99XS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);