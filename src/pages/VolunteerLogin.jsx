
import { useNavigate } from 'react-router-dom'
import '../styles/VolunteerLogin.css'
import heroImage from '../assets/volunteer1.jpeg'

export default function VolunteerLogin() {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    navigate('/volunteer-dashboard')
  }

  const handleForgotPassword = () => {
    alert('Password reset coming soon!')
  }

  const handleBack = () => {
    navigate('/')
  }

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
          <div className="photo-logo">🙏</div>

          <h2>Seva Setu</h2>

          <p>सेवा • सहयोग • सुरक्षा</p>
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
          <h1>Welcome, Volunteer</h1>

          <p className="volunteer-login-subtitle">
            Sign in to respond to people who need your help.
          </p>

          {/* LOGIN FORM */}
          <form onSubmit={handleLogin}>

            <div className="volunteer-form-group">

              <label htmlFor="mobile">
                Mobile Number
              </label>

              <input
                id="mobile"
                type="tel"
                placeholder="Enter your mobile number"
                required
              />

            </div>

            <div className="volunteer-form-group">

              <div className="volunteer-password-row">

                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  className="volunteer-forgot-password"
                  onClick={handleForgotPassword}
                >
                  Forgot password?
                </button>

              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />

            </div>

            <button
              type="submit"
              className="volunteer-login-button"
            >
              Login
            </button>

          </form>

          {/* DIVIDER */}
          <div className="volunteer-divider">
            <span>OR</span>
          </div>

          {/* GOOGLE LOGIN */}
          <button
            type="button"
            className="volunteer-google-button"
            onClick={() => alert('Google Login coming soon!')}
          >
            <span className="volunteer-google-logo">
              G
            </span>

            Continue with Google
          </button>

          {/* GUEST LOGIN */}
          <button
            type="button"
            className="volunteer-guest-button"
            onClick={() => alert('Guest access coming soon!')}
          >
            Continue as Guest
          </button>

          {/* CREATE ACCOUNT */}
          <div className="volunteer-signup-section">

            <span>
              Don't have an account?
            </span>

            <button
              type="button"
              className="volunteer-signup-button"
              onClick={() => alert('Create Account coming soon!')}
            >
              Create Account
            </button>

          </div>

          {/* FOOTER */}
          <p className="volunteer-login-footer">
            Seva through every step of the Wari.
          </p>

        </div>

      </section>

    </main>
  )
}

