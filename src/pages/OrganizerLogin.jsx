import { useState } from 'react';
import '../styles/OrganizerLogin.css';

export default function OrganizerLogin({ onBack, onLogin }) {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
  event.preventDefault();

  if (!emailOrMobile.trim() || !password.trim()) {
    alert('Please enter your email/mobile number and password.');
    return;
  }

  console.log('Organizer login submitted', {
    emailOrMobile,
    password,
    rememberMe,
  });

  if (onLogin) {
    onLogin();
  }
};

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  const handleCreateAccount = () => {
    console.log('Create organizer account clicked');
  };

  return (
    <main className="organizer-login-page">

      {/* LEFT SIDE */}
      <section className="organizer-visual">

        <div className="organizer-visual-overlay"></div>

        <div className="organizer-visual-content">
          <div className="organizer-visual-icon">🙏</div>

          <h2>SevaSetu</h2>

          <p>ORGANIZER PORTAL</p>
        </div>

      </section>

      {/* RIGHT SIDE */}
      <section className="organizer-login-section">

        {onBack && (
          <button
            type="button"
            className="organizer-back-button"
            onClick={onBack}
          >
            ← Back
          </button>
        )}

        <div className="organizer-login-card">

          {/* ICON */}
          <div className="organizer-login-icon">
            🙏
          </div>

          {/* HEADING */}
          <div className="organizer-login-heading">
            <h1>Welcome, Organizer</h1>

            <p>
              Sign in to continue your SevaSetu journey
            </p>
          </div>

          {/* LOGIN FORM */}
          <form
            onSubmit={handleSubmit}
            className="organizer-login-form"
          >

            {/* EMAIL / MOBILE */}
            <div className="organizer-form-group">
              <label htmlFor="organizer-email">
                Email or Mobile Number
              </label>

              <input
                id="organizer-email"
                type="text"
                placeholder="Enter your email or mobile number"
                value={emailOrMobile}
                onChange={(event) =>
                  setEmailOrMobile(event.target.value)
                }
              />
            </div>

            {/* PASSWORD */}
            <div className="organizer-form-group">
              <label htmlFor="organizer-password">
                Password
              </label>

              <div className="organizer-password-wrapper">
                <input
                  id="organizer-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                />

                <button
                  type="button"
                  className="organizer-password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* REMEMBER / FORGOT */}
            <div className="organizer-login-options">

              <label className="organizer-remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) =>
                    setRememberMe(event.target.checked)
                  }
                />

                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="organizer-forgot-password"
                onClick={handleForgotPassword}
              >
                Forgot password?
              </button>

            </div>

            {/* LOGIN */}
            <button
              type="submit"
              className="organizer-login-button"
            >
              Login
            </button>

          </form>

          {/* DIVIDER */}
          <div className="organizer-login-divider">
            <span>or</span>
          </div>

          {/* CREATE ACCOUNT */}
          <div className="organizer-register-section">

            <p>New to SevaSetu?</p>

            <button
              type="button"
              className="organizer-create-account"
              onClick={handleCreateAccount}
            >
              Create an account
            </button>

          </div>

          <p className="organizer-login-footer">
            SevaSetu • Serving with compassion
          </p>

        </div>

      </section>

    </main>
  );
}