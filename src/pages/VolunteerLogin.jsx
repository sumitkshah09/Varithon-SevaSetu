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
} from "../services/authService";

import { useNavigate } from "react-router-dom";

import "../styles/VolunteerLogin.css";

import heroImage from "../assets/volunteer1.jpeg";


export default function VolunteerLogin() {

  const navigate = useNavigate();


  // ==========================================
  // LOGIN / REGISTER MODE
  // ==========================================

  const [isRegistering, setIsRegistering] =
    useState(false);


  // ==========================================
  // FORM FIELDS
  // ==========================================

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [mobile, setMobile] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");


  // ==========================================
  // UI STATE
  // ==========================================

  const [loading, setLoading] = useState(false);

  const [checkingAuth, setCheckingAuth] =
    useState(true);

  const [errorMessage, setErrorMessage] =
    useState("");

  const [successMessage, setSuccessMessage] =
    useState("");


  // ==========================================
  // RESTORE EXISTING SESSION
  // ==========================================

  useEffect(() => {

    const unsubscribe =
      auth.onAuthStateChanged(async (user) => {

        if (!user) {

          setCheckingAuth(false);

          return;

        }


        try {

          const userRef = doc(
            db,
            "users",
            user.uid
          );


          const userSnapshot =
            await getDoc(userRef);


          if (!userSnapshot.exists()) {

            console.warn(
              "Firebase account exists but Volunteer profile was not found."
            );

            setCheckingAuth(false);

            return;

          }


          const userData =
            userSnapshot.data();


          if (
            userData.role !== "volunteer"
          ) {

            console.warn(
              "Logged-in account is not a Volunteer."
            );

            setCheckingAuth(false);

            return;

          }


          console.log(
            "✅ Existing Volunteer session restored"
          );


          navigate(
            "/volunteer-dashboard",
            { replace: true }
          );

        } catch (error) {

          console.error(
            "❌ Failed to restore Volunteer session:",
            error
          );

        } finally {

          setCheckingAuth(false);

        }

      });


    return () => unsubscribe();

  }, [navigate]);


  // ==========================================
  // LOGIN
  // ==========================================

  const handleLogin = async (e) => {

    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");
    setLoading(true);


    try {

      const cleanEmail =
        email.trim().toLowerCase();


      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          cleanEmail,
          password
        );


      const user =
        userCredential.user;


      console.log(
        "✅ Volunteer Firebase login successful"
      );

      console.log(
        "UID:",
        user.uid
      );


      const userRef = doc(
        db,
        "users",
        user.uid
      );


      const userSnapshot =
        await getDoc(userRef);


      if (!userSnapshot.exists()) {

        throw new Error(
          "Your account exists, but your Volunteer profile was not found."
        );

      }


      const userData =
        userSnapshot.data();


      if (
        userData.role !== "volunteer"
      ) {

        throw new Error(
          "This account is not registered as a Volunteer."
        );

      }


      navigate(
        "/volunteer-dashboard",
        { replace: true }
      );


    } catch (error) {

      console.error(
        "❌ Volunteer login failed:",
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


    if (!name.trim()) {

      setErrorMessage(
        "Please enter your full name."
      );

      return;

    }


    if (!mobile.trim()) {

      setErrorMessage(
        "Please enter your mobile number."
      );

      return;

    }


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

          name: name.trim(),

          email: email.trim().toLowerCase(),

          password,

          phone: mobile.trim(),

          role: "volunteer",

          language: "en",

        });


      console.log(
        "✅ Volunteer registration successful"
      );

      console.log(
        "UID:",
        newUser.uid
      );


      setSuccessMessage(
        "Volunteer account created successfully!"
      );


      // Firebase automatically logs the
      // newly-created user in.

      navigate(
        "/volunteer-dashboard",
        { replace: true }
      );


    } catch (error) {

      console.error(
        "❌ Volunteer registration failed:",
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
  // BACK
  // ==========================================

  const handleBack = () => {

    navigate("/");

  };


  // ==========================================
  // AUTH CHECK SCREEN
  // ==========================================

  if (checkingAuth) {

    return (

      <main className="volunteer-login-page">

        <section className="volunteer-login-section">

          <div className="volunteer-login-card">

            <div className="volunteer-icon">
              🙏
            </div>

            <h1>
              Loading Seva Setu...
            </h1>

            <p className="volunteer-login-subtitle">
              Checking your login session.
            </p>

          </div>

        </section>

      </main>

    );

  }


  // ==========================================
  // PAGE
  // ==========================================

  return (

    <main className="volunteer-login-page">


      {/* LEFT IMAGE */}

      <div className="volunteer-photo">

        <img
          src={heroImage}
          alt="SevaSetu community service"
        />

        <div className="photo-overlay"></div>

        <div className="photo-content">

          <div className="photo-logo">
            🙏
          </div>

          <h2>
            Seva Setu
          </h2>

          <p>
            सेवा • सहयोग • सुरक्षा
          </p>

        </div>

      </div>


      {/* RIGHT LOGIN AREA */}

      <section className="volunteer-login-section">


        <button
          type="button"
          className="volunteer-back-button"
          onClick={handleBack}
        >
          ← Back to roles
        </button>


        <div className="volunteer-login-card">


          {/* ICON */}

          <div className="volunteer-icon">
            🤝
          </div>


          {/* HEADER */}

          <h1>

            {isRegistering
              ? "Join Seva Setu"
              : "Welcome, Volunteer"}

          </h1>


          <p className="volunteer-login-subtitle">

            {isRegistering
              ? "Create your Volunteer account and start serving."
              : "Sign in to respond to people who need your help."}

          </p>


          {/* ERROR */}

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


          {/* SUCCESS */}

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


          {/* FORM */}

          <form
            onSubmit={
              isRegistering
                ? handleRegister
                : handleLogin
            }
          >


            {/* NAME */}

            {isRegistering && (

              <div className="volunteer-form-group">

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


            {/* EMAIL */}

            <div className="volunteer-form-group">

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


            {/* MOBILE */}

            {isRegistering && (

              <div className="volunteer-form-group">

                <label htmlFor="mobile">
                  Mobile Number
                </label>

                <input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) =>
                    setMobile(e.target.value)
                  }
                  required
                />

              </div>

            )}


            {/* PASSWORD */}

            <div className="volunteer-form-group">

              <div className="volunteer-password-row">

                <label htmlFor="password">
                  Password
                </label>


                {!isRegistering && (

                  <button
                    type="button"
                    className="volunteer-forgot-password"
                    onClick={
                      handleForgotPassword
                    }
                  >
                    Forgot password?
                  </button>

                )}

              </div>


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


            {/* CONFIRM PASSWORD */}

            {isRegistering && (

              <div className="volunteer-form-group">

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


            {/* SUBMIT */}

            <button
              type="submit"
              className="volunteer-login-button"
              disabled={loading}
            >

              {loading
                ? "Please wait..."
                : isRegistering
                  ? "Create Account"
                  : "Login"}

            </button>

          </form>


          {/* LOGIN ONLY OPTIONS */}

          {!isRegistering && (

            <>

              <div className="volunteer-divider">

                <span>
                  OR
                </span>

              </div>


              <button
                type="button"
                className="volunteer-google-button"
                onClick={() =>
                  alert(
                    "Google Login will be connected next."
                  )
                }
              >

                <span className="volunteer-google-logo">
                  G
                </span>

                Continue with Google

              </button>


              <button
                type="button"
                className="volunteer-guest-button"
                onClick={() =>
                  alert(
                    "Guest access will be connected later."
                  )
                }
              >

                Continue as Guest

              </button>

            </>

          )}


          {/* CREATE ACCOUNT / LOGIN */}

          <div className="volunteer-signup-section">

            <span>

              {isRegistering
                ? "Already have an account?"
                : "Don't have an account?"}

            </span>


            <button
              type="button"
              className="volunteer-signup-button"
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

          </div>


          {/* FOOTER */}

          <p className="volunteer-login-footer">

            Seva through every step of the Wari.

          </p>


        </div>

      </section>

    </main>

  );

}