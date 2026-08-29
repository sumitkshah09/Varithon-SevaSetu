import { useState } from 'react'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'

import { auth, db } from '../firebase'
import WarkariDashboard from './WarkariDashboard'
import wariImage from '../assets/wari1.jpeg'
import './WarkariLogin.css'

export default function WarkariLogin() {
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = async (e) => {
  e.preventDefault()

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      emailOrPhone,
      password
    )

    const user = userCredential.user

    console.log("✅ Firebase login successful")
    console.log("UID:", user.uid)

    // Get user's Firestore profile
    const userRef = doc(db, "users", user.uid)
    const userSnapshot = await getDoc(userRef)

    if (!userSnapshot.exists()) {
      alert("User profile not found.")
      return
    }

    const userData = userSnapshot.data()

    console.log("User data:", userData)

    // Check role
    if (userData.role !== "warkari") {
      alert("This account is not registered as a Warkari.")
      return
    }

    // Login successful
    setLoggedIn(true)

  } catch (error) {
    console.error("❌ Login failed:", error)

    if (
      error.code === "auth/invalid-credential" ||
      error.code === "auth/wrong-password" ||
      error.code === "auth/user-not-found"
    ) {
      alert("Invalid email or password.")
    } else {
      alert(error.message)
    }
  }
}

  const handleGuestLogin = () => {
    setLoggedIn(true)
  }

  if (loggedIn) {
    return <WarkariDashboard />
  }

  return (
    <main className="warkari-login-page">

      {/* Left Image */}
      <section className="login-image-section">
        <img
          src={wariImage}
          alt="Wari pilgrimage"
          className="login-image"
        />

        <div className="image-overlay">
          <h2>Jai Hari Vitthal 🙏</h2>
          <p>
            Your journey of seva, devotion and community begins here.
          </p>
        </div>
      </section>

      {/* Login Section */}
      <section className="login-form-section">

        <div className="login-box">

          <div className="login-header">
            <div className="login-logo">🙏</div>

            <h1>Welcome, Warkari</h1>

            <p>
              Sign in to continue your Seva Setu journey.
            </p>
          </div>

          <form onSubmit={handleLogin}>

            {/* Email / Phone */}
            <div className="form-group">
              <label htmlFor="emailOrPhone">
                Email or Phone Number
              </label>

              <input
                id="emailOrPhone"
                type="text"
                placeholder="Enter your email or phone number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Remember + Forgot */}
            <div className="login-options">

              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot-password"
                onClick={() => alert('Password reset coming soon.')}
              >
                Forgot Password?
              </button>

            </div>

            {/* Login */}
            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>

          </form>

          {/* Divider */}
          <div className="divider">
            <span>OR</span>
          </div>

          {/* Google Login */}
          <button
            type="button"
            className="google-login-button"
            onClick={() => alert('Google login will be connected with Firebase later.')}
          >
            <span className="google-icon">G</span>
            Continue with Google
          </button>

          {/* Guest Login */}
          <button
            type="button"
            className="guest-login-button"
            onClick={handleGuestLogin}
          >
            Continue as Guest
          </button>

          {/* Register */}
          <p className="register-text">
            Don't have an account?{' '}
            <button
              type="button"
              className="register-button"
              onClick={() => alert('Registration coming soon.')}
            >
              Create Account
            </button>
          </p>

          {/* Back */}
          <button
            type="button"
            className="back-button"
            onClick={() => window.history.back()}
          >
            ← Back to Role Selection
          </button>

        </div>

      </section>

    </main>
  )
}