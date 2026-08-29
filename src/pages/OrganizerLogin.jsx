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

import "../styles/OrganizerLogin.css";


export default function OrganizerLogin({ onBack }) {

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

  const [rememberMe, setRememberMe] =
    useState(true);

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [checkingAuth, setCheckingAuth] =
    useState(true);

  const [errorMessage, setErrorMessage] =
    useState("");

  const [successMessage, setSuccessMessage] =
    useState("");


  // ==========================================
  // RESTORE EXISTING ORGANIZER SESSION
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
              "Firebase account exists but Organizer profile was not found."
            );

            setCheckingAuth(false);

            return;

          }


          const userData =
            userSnapshot.data();


          if (
            userData.role !== "organizer"
          ) {

            console.warn(
              "Logged-in account is not an Organizer."
            );

            setCheckingAuth(false);

            return;

          }


          console.log(
            "✅ Existing Organizer session restored"
          );


          navigate(
            "/organizer-dashboard",
            { replace: true }
          );


        } catch (error) {

          console.error(
            "❌ Failed to restore Organizer session:",
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

  const handleLogin = async (event) => {

    event.preventDefault();

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
        "✅ Organizer Firebase login successful"
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
          "Your account exists, but your Organizer profile was not found."
        );

      }


      const userData =
        userSnapshot.data();


      if (
        userData.role !== "organizer"
      ) {

        throw new Error(
          "This account is not registered as an Organizer."
        );

      }


      navigate(
        "/organizer-dashboard",
        { replace: true }
      );


    } catch (error) {

      console.error(
        "❌ Organizer login failed:",
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

  const handleRegister = async (event) => {

    event.preventDefault();

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

          email:
            email.trim().toLowerCase(),

          password,

          phone: mobile.trim(),

          role: "organizer",

          language: "en",

        });


      console.log(
        "✅ Organizer registration successful"
      );

      console.log(
        "UID:",
        newUser.uid
      );


      setSuccessMessage(
        "Organizer account created successfully!"
      );


      navigate(
        "/organizer-dashboard",
        { replace: true }
      );


    } catch (error) {

      console.error(
        "❌ Organizer registration failed:",
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

    if (onBack) {

      onBack();

    } else {

      navigate("/");

    }

  };


  // ==========================================
  // AUTH CHECK SCREEN
  // ==========================================

  if (checkingAuth) {

    return (

      <main className="organizer-login-page">

        <section className="organizer-login-section">

          <div className="organizer-login-card">

            <div className="organizer-login-icon">
              🙏
            </div>

            <div className="organizer-login-heading">

              <h1>
                Loading Seva Setu...
              </h1>

              <p>
                Checking your login session.
              </p>

            </div>

          </div>

        </section>

      </main>

    );

  }


  // ==========================================
  // PAGE
  // ==========================================

  return (

    <main className="organizer-login-page">


      {/* ======================================
          LEFT SIDE
      ====================================== */}

      <section className="organizer-visual">

        <div className="organizer-visual-overlay"></div>

        <div className="organizer-visual-content">

          <div className="organizer-visual-icon">
            🙏
          </div>

          <h2>
            SevaSetu
          </h2>

          <p>
            ORGANIZER PORTAL
          </p>

        </div>

      </section>


      {/* ======================================
          RIGHT SIDE
      ====================================== */}

      <section className="organizer-login-section">


        <button
          type="button"
          className="organizer-back-button"
          onClick={handleBack}
        >

          ← Back

        </button>


        <div className="organizer-login-card">


          {/* ICON */}

          <div className="organizer-login-icon">
            🙏
          </div>


          {/* HEADING */}

          <div className="organizer-login-heading">

            <h1>

              {isRegistering
                ? "Join SevaSetu"
                : "Welcome, Organizer"}

            </h1>


            <p>

              {isRegistering
                ? "Create your Organizer account."
                : "Sign in to continue your SevaSetu journey"}

            </p>

          </div>


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

            className="organizer-login-form"
          >


            {/* NAME */}

            {isRegistering && (

              <div className="organizer-form-group">

                <label htmlFor="organizer-name">

                  Full Name

                </label>


                <input
                  id="organizer-name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  required
                />

              </div>

            )}


            {/* EMAIL */}

            <div className="organizer-form-group">

              <label htmlFor="organizer-email">

                Email Address

              </label>


              <input
                id="organizer-email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />

            </div>


            {/* MOBILE */}

            {isRegistering && (

              <div className="organizer-form-group">

                <label htmlFor="organizer-mobile">

                  Mobile Number

                </label>


                <input
                  id="organizer-mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(event) =>
                    setMobile(event.target.value)
                  }
                  required
                />

              </div>

            )}


            {/* PASSWORD */}

            <div className="organizer-form-group">

              <label htmlFor="organizer-password">

                Password

              </label>


              <div className="organizer-password-wrapper">

                <input
                  id="organizer-password"
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  minLength={6}
                  required
                />


                <button
                  type="button"
                  className="organizer-password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >

                  {showPassword
                    ? "Hide"
                    : "Show"}

                </button>

              </div>

            </div>


            {/* CONFIRM PASSWORD */}

            {isRegistering && (

              <div className="organizer-form-group">

                <label htmlFor="organizer-confirm-password">

                  Confirm Password

                </label>


                <input
                  id="organizer-confirm-password"
                  type="password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(
                      event.target.value
                    )
                  }
                  minLength={6}
                  required
                />

              </div>

            )}


            {/* LOGIN OPTIONS */}

            {!isRegistering && (

              <div className="organizer-login-options">

                <label className="organizer-remember">

                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) =>
                      setRememberMe(
                        event.target.checked
                      )
                    }
                  />

                  <span>
                    Remember me
                  </span>

                </label>


                <button
                  type="button"
                  className="organizer-forgot-password"
                  onClick={
                    handleForgotPassword
                  }
                >

                  Forgot password?

                </button>

              </div>

            )}


            {/* LOGIN / REGISTER BUTTON */}

            <button
              type="submit"
              className="organizer-login-button"
              disabled={loading}
            >

              {loading
                ? "Please wait..."
                : isRegistering
                  ? "Create Account"
                  : "Login"}

            </button>

          </form>


          {/* LOGIN DIVIDER */}

          {!isRegistering && (

            <div className="organizer-login-divider">

              <span>
                or
              </span>

            </div>

          )}


          {/* CREATE ACCOUNT */}

          <div className="organizer-register-section">

            <p>

              {isRegistering
                ? "Already have an account?"
                : "New to SevaSetu?"}

            </p>


            <button
              type="button"
              className="organizer-create-account"
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
                : "Create an account"}

            </button>

          </div>


          {/* FOOTER */}

          <p className="organizer-login-footer">

            SevaSetu • Serving with compassion

          </p>


        </div>

      </section>

    </main>

  );

}