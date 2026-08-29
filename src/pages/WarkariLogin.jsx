import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import {
  doc,
  getDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase";

import {
  registerUser,
  loginUser,
} from "../services/authService";

import WarkariDashboard from "./WarkariDashboard";

import wariImage from "../assets/wari1.jpeg";

import "./WarkariLogin.css";


export default function WarkariLogin() {

  // ==========================================
  // MODE
  // ==========================================

  const [isRegistering, setIsRegistering] = useState(false);


  // ==========================================
  // LOGIN FIELDS
  // ==========================================

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  // ==========================================
  // REGISTRATION FIELDS
  // ==========================================

  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");


  // ==========================================
  // UI STATE
  // ==========================================

  const [loggedIn, setLoggedIn] = useState(false);

const [checkingAuth, setCheckingAuth] = useState(true);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (!user) {
      setLoggedIn(false);
      setCheckingAuth(false);
      return;
    }

    try {
      const userRef = doc(db, "users", user.uid);
      const userSnapshot = await getDoc(userRef);

      if (!userSnapshot.exists()) {
        console.warn(
          "Firebase user exists but Firestore profile was not found."
        );

        setLoggedIn(false);
        setCheckingAuth(false);
        return;
      }

      const userData = userSnapshot.data();

      if (userData.role !== "warkari") {
        console.warn(
          "Logged-in account is not a Warkari."
        );

        setLoggedIn(false);
        setCheckingAuth(false);
        return;
      }

      console.log(
        "✅ Existing Firebase session restored"
      );

      console.log(
        "UID:",
        user.uid
      );

      setLoggedIn(true);

    } catch (error) {

      console.error(
        "❌ Failed to restore Firebase session:",
        error
      );

      setLoggedIn(false);

    } finally {

      setCheckingAuth(false);

    }
  });

  return () => unsubscribe();
}, []);

  const [errorMessage, setErrorMessage] =
    useState("");

  const [successMessage, setSuccessMessage] =
    useState("");


  // ==========================================
  // LOGIN
  // ==========================================

  const handleLogin = async (e) => {

    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);


    try {

      const cleanEmail = email.trim().toLowerCase();


      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          cleanEmail,
          password
        );


      const user = userCredential.user;


      console.log(
        "✅ Firebase login successful"
      );

      console.log(
        "UID:",
        user.uid
      );


      // ------------------------------------------
      // Get Firestore profile
      // ------------------------------------------

      const userRef = doc(
        db,
        "users",
        user.uid
      );


      const userSnapshot =
        await getDoc(userRef);


      if (!userSnapshot.exists()) {

        throw new Error(
          "Your Firebase account exists, but your SevaSetu profile was not found."
        );

      }


      const userData =
        userSnapshot.data();


      console.log(
        "User data:",
        userData
      );


      // ------------------------------------------
      // Check role
      // ------------------------------------------

      if (userData.role !== "warkari") {

        throw new Error(
          "This account is not registered as a Warkari."
        );

      }


      // ------------------------------------------
      // Successful login
      // ------------------------------------------

      setLoggedIn(true);

    } catch (error) {

      console.error(
        "❌ Login failed:",
        error
      );


      if (
        error.code ===
          "auth/invalid-credential" ||
        error.code ===
          "auth/wrong-password" ||
        error.code ===
          "auth/user-not-found"
      ) {

        setErrorMessage(
          "Invalid email or password."
        );

      } else if (
        error.code ===
        "auth/invalid-email"
      ) {

        setErrorMessage(
          "Please enter a valid email address."
        );

      } else {

        setErrorMessage(
          error.message ||
          "Login failed. Please try again."
        );

      }

    } finally {

      setLoading(false);

    }

  };


  // ==========================================
  // REGISTER
  // ==========================================

  const handleRegister = async (e) => {

    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");


    // ------------------------------------------
    // Validate password
    // ------------------------------------------

    if (password.length < 6) {

      setErrorMessage(
        "Password must be at least 6 characters."
      );

      return;

    }


    if (password !== confirmPassword) {

      setErrorMessage(
        "Passwords do not match."
      );

      return;

    }


    setLoading(true);


    try {

      const newUser =
        await registerUser({

          name,

          email,

          password,

          phone,

          role: "warkari",

          language: "en",

        });


      console.log(
        "✅ Warkari registration successful"
      );

      console.log(
        "UID:",
        newUser.uid
      );


      setSuccessMessage(
        "Account created successfully!"
      );


      // Firebase automatically signs the user in
      // after createUserWithEmailAndPassword().
      setLoggedIn(true);


    } catch (error) {

      console.error(
        "❌ Registration failed:",
        error
      );


      if (
        error.code ===
        "auth/email-already-in-use"
      ) {

        setErrorMessage(
          "An account with this email already exists. Please log in."
        );

      } else if (
        error.code ===
        "auth/invalid-email"
      ) {

        setErrorMessage(
          "Please enter a valid email address."
        );

      } else if (
        error.code ===
        "auth/weak-password"
      ) {

        setErrorMessage(
          "Password is too weak. Use at least 6 characters."
        );

      } else {

        setErrorMessage(
          error.message ||
          "Registration failed. Please try again."
        );

      }

    } finally {

      setLoading(false);

    }

  };


  // ==========================================
  // FORGOT PASSWORD
  // ==========================================

  const handleForgotPassword = async () => {

    setErrorMessage("");
    setSuccessMessage("");


    if (!email.trim()) {

      setErrorMessage(
        "Enter your email address first."
      );

      return;

    }


    try {

      await sendPasswordResetEmail(
        auth,
        email.trim().toLowerCase()
      );


      setSuccessMessage(
        "Password reset email sent. Check your inbox."
      );

    } catch (error) {

      console.error(error);


      setErrorMessage(
        error.message ||
        "Could not send password reset email."
      );

    }

  };


  // ==========================================
  // GUEST
  // ==========================================

  const handleGuestLogin = () => {

    setErrorMessage(
      "Guest mode is not connected to Firebase yet."
    );

  };


  // ==========================================
  // IF LOGGED IN
  // ==========================================
if (checkingAuth) {
  return (
    <main className="warkari-login-page">
      <section className="login-form-section">
        <div className="login-box">
          <div className="login-header">
            <div className="login-logo">
              🙏
            </div>

            <h1>Loading Seva Setu...</h1>

            <p>
              Checking your login session.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
  if (loggedIn) {

    return <WarkariDashboard />;

  }


  // ==========================================
  // PAGE
  // ==========================================

  return (

    <main className="warkari-login-page">


      {/* ======================================
          LEFT IMAGE
      ====================================== */}

      <section className="login-image-section">

        <img
          src={wariImage}
          alt="Wari pilgrimage"
          className="login-image"
        />


        <div className="image-overlay">

          <h2>
            Jai Hari Vitthal 🙏
          </h2>


          <p>
            Your journey of seva, devotion and
            community begins here.
          </p>

        </div>

      </section>


      {/* ======================================
          FORM SECTION
      ====================================== */}

      <section className="login-form-section">

        <div className="login-box">


          {/* ==================================
              HEADER
          ================================== */}

          <div className="login-header">

            <div className="login-logo">
              🙏
            </div>


            <h1>
              {isRegistering
                ? "Join Seva Setu"
                : "Welcome, Warkari"}
            </h1>


            <p>

              {isRegistering
                ? "Create your Warkari account."
                : "Sign in to continue your Seva Setu journey."}

            </p>

          </div>


          {/* ==================================
              ERROR
          ================================== */}

          {errorMessage && (

            <div
              style={{
                color: "#b91c1c",
                background: "#fee2e2",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            >

              {errorMessage}

            </div>

          )}


          {/* ==================================
              SUCCESS
          ================================== */}

          {successMessage && (

            <div
              style={{
                color: "#166534",
                background: "#dcfce7",
                padding: "10px",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            >

              {successMessage}

            </div>

          )}


          {/* ==================================
              FORM
          ================================== */}

          <form
            onSubmit={
              isRegistering
                ? handleRegister
                : handleLogin
            }
          >


            {/* ================================
                NAME - REGISTER ONLY
            ================================= */}

            {isRegistering && (

              <div className="form-group">

                <label htmlFor="name">
                  Full Name
                </label>


                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                />

              </div>

            )}


            {/* ================================
                EMAIL
            ================================= */}

            <div className="form-group">

              <label htmlFor="email">

                Email Address

              </label>


              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>


            {/* ================================
                PHONE - REGISTER ONLY
            ================================= */}

            {isRegistering && (

              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>


                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  required
                />

              </div>

            )}


            {/* ================================
                PASSWORD
            ================================= */}

            <div className="form-group">

              <label htmlFor="password">

                Password

              </label>


              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                minLength={6}
                required
              />

            </div>


            {/* ================================
                CONFIRM PASSWORD
                REGISTER ONLY
            ================================= */}

            {isRegistering && (

              <div className="form-group">

                <label htmlFor="confirmPassword">

                  Confirm Password

                </label>


                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  minLength={6}
                  required
                />

              </div>

            )}


            {/* ================================
                LOGIN OPTIONS
            ================================= */}

            {!isRegistering && (

              <div className="login-options">

                <label className="remember-me">

                  <input
                    type="checkbox"
                    defaultChecked
                  />

                  <span>
                    Remember me
                  </span>

                </label>


                <button
                  type="button"
                  className="forgot-password"
                  onClick={
                    handleForgotPassword
                  }
                >

                  Forgot Password?

                </button>

              </div>

            )}


            {/* ================================
                SUBMIT
            ================================= */}

            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >

              {loading
                ? "Please wait..."
                : isRegistering
                  ? "Create Account"
                  : "Login"}

            </button>

          </form>


          {/* ==================================
              LOGIN-ONLY OPTIONS
          ================================== */}

          {!isRegistering && (

            <>

              <div className="divider">

                <span>
                  OR
                </span>

              </div>


              <button
                type="button"
                className="google-login-button"
                onClick={() =>
                  alert(
                    "Google login will be connected next."
                  )
                }
              >

                <span className="google-icon">
                  G
                </span>

                Continue with Google

              </button>


              <button
                type="button"
                className="guest-login-button"
                onClick={
                  handleGuestLogin
                }
              >

                Continue as Guest

              </button>

            </>

          )}


          {/* ==================================
              SWITCH LOGIN / REGISTER
          ================================== */}

          <p className="register-text">

            {isRegistering
              ? "Already have an account? "
              : "Don't have an account? "}


            <button
              type="button"
              className="register-button"
              onClick={() => {

                setIsRegistering(
                  !isRegistering
                );

                setErrorMessage("");
                setSuccessMessage("");

              }}
            >

              {isRegistering
                ? "Login"
                : "Create Account"}

            </button>

          </p>


          {/* ==================================
              BACK
          ================================== */}

          <button
            type="button"
            className="back-button"
            onClick={() =>
              window.history.back()
            }
          >

            ← Back to Role Selection

          </button>


        </div>

      </section>

    </main>

  );

}