import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../firebase";

// ==========================================
// LOGIN
// ==========================================

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // Get user profile from Firestore
    const userRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(userRef);

    if (!userSnapshot.exists()) {
      throw new Error("User profile not found in Firestore.");
    }

    const userData = userSnapshot.data();

    return {
      uid: user.uid,
      email: user.email,
      ...userData,
    };
  } catch (error) {
    console.error("❌ Login error:", error);
    throw error;
  }
};

// ==========================================
// SIGN UP
// ==========================================

export const registerUser = async ({
  name,
  email,
  password,
  phone,
  role,
  language = "en",
}) => {
  try {
    // Create Firebase Authentication account
    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    const user = userCredential.user;

    // Create Firestore user profile
    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      phone: phone || "",
      role,
      language,
      createdAt: serverTimestamp(),
      isActive: true,
    });

    return {
      uid: user.uid,
      email: user.email,
      name,
      role,
      language,
    };
  } catch (error) {
    console.error("❌ Registration error:", error);
    throw error;
  }
};

// ==========================================
// LOGOUT
// ==========================================

export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("✅ Logged out");
  } catch (error) {
    console.error("❌ Logout error:", error);
    throw error;
  }
};