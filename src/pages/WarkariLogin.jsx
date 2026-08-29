import { useState } from 'react'
import wariImage from '../assets/wari1.jpeg'
import './WarkariLogin.css'

export default function WarkariLogin({ onBack }) {
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    alert('Login submitted!')
  }

  const handleGoogleLogin = () => {
    alert('Google Login coming soon!')
  }

  const handleGuestLogin = () => {
    alert('Guest access coming soon!')
  }

  const handleCreateAccount = () => {
    alert('Create Account coming soon!')
  }

  return (
    <main className="warkari-login-page">

      {/* LEFT IMAGE */}
      <div className="wari-photo">
        <img
          src={wariImage}
          alt="Warkari pilgrimage"
        />

        <div className="photo-overlay"></div>

        <div className="photo-content">
          <div className="photo-logo">🙏</div>

          <h2>Seva Setu</h2>

          <p>सेवा • भक्ती • वारकरी</p>
        </div>
      </div>


      {/* RIGHT LOGIN AREA */}
      <section className="login-section">

        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          ← Back to roles
        </button>


        <div className="login-card">

          <div className="login-icon">
            🙏
          </div>

          <h1>Welcome, Warkari</h1>

          <p className="login-subtitle">
            Sign in to continue your Wari journey
          </p>


          {/* LOGIN FORM */}
          <form onSubmit={handleLogin}>

            <div className="form-group">

              <label htmlFor="emailOrPhone">
                Email or Mobile Number
              </label>

              <input
                id="emailOrPhone"
                type="text"
                placeholder="Enter email or mobile number"
                value={emailOrPhone}
                onChange={(e) =>
                  setEmailOrPhone(e.target.value)
                }
                required
              />

            </div>


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
                required
              />

            </div>


            <div className="login-options">

              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot-password"
                onClick={() =>
                  alert('Password reset coming soon!')
                }
              >
                Forgot password?
              </button>

            </div>


            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>

          </form>


          {/* DIVIDER */}
          <div className="divider">
            <span>OR</span>
          </div>


          {/* GOOGLE LOGIN */}
          <button
            type="button"
            className="google-button"
            onClick={handleGoogleLogin}
          >
            <span className="google-logo">
              G
            </span>

            Continue with Google
          </button>


          {/* GUEST LOGIN */}
          <button
            type="button"
            className="guest-button"
            onClick={handleGuestLogin}
          >
            Continue as Guest
          </button>


          {/* CREATE ACCOUNT */}
          <div className="signup-section">

            <span>
              Don't have an account?
            </span>

            <button
              type="button"
              className="signup-button"
              onClick={handleCreateAccount}
            >
              Create Account
            </button>

          </div>


          <p className="login-footer">
            Seva through every step of the Wari.
          </p>

        </div>

      </section>

    </main>
  )
}