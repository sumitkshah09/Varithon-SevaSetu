
import { useNavigate } from 'react-router-dom';
import '../styles/VolunteerLogin.css';

export default function VolunteerLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/volunteer-dashboard');
  };

  return (
    <div className="volunteer-login-page">
      <div className="volunteer-login-card">

        <div className="volunteer-login-brand">
          <span className="brand-mark">S</span>
          <span>SevaSetu</span>
        </div>

        <div className="volunteer-login-header">
          <div className="volunteer-icon">🤝</div>

          <h1>Welcome, Volunteer</h1>

          <p>
            Sign in to respond to people who need your help.
          </p>
        </div>

        <form onSubmit={handleLogin} className="volunteer-login-form">

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>

            <input
              id="mobile"
              type="tel"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          <div className="form-group">
            <div className="password-label-row">
              <label htmlFor="password">Password</label>

              <button
                type="button"
                className="forgot-password"
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

          <button type="submit" className="volunteer-login-button">
            Login
            <span>→</span>
          </button>

        </form>

        <div className="volunteer-login-footer">
          <span className="security-dot"></span>
          <span>Your information is securely handled by SevaSetu.</span>
        </div>

      </div>
    </div>
  );
}


