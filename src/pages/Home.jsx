import "./Home.css";
import { useNavigate } from "react-router-dom";
import wariImage from "../assets/warkari.jpeg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">

      {/* Moving Background */}
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${wariImage})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">

        {/* Cultural Badge */}
        <div className="hero-badge">
          ॥ जय हरी विठ्ठल ॥
        </div>

        {/* SEVA SETU BRAND */}
        <div className="brand-name">
          <span className="brand-marathi">सेवा</span>
          <span className="brand-setu">Setu</span>
        </div>

        {/* Tagline */}
        <h2 className="main-tagline">
          Connecting Helping Hands
          <br />
          <span>with Every Warkari</span>
        </h2>

        {/* Description */}
        <p className="hero-description">
          A digital platform that connects Warkaris with
          trusted volunteers and essential services —
          making every step of the Wari safer, easier
          and more connected.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">

          <button
            className="hero-btn primary"
            onClick={() => navigate("/role-selection")}
          >
            <span>🤝</span>
            Find a Service →
          </button>

          

        </div>

        {/* Feature Strip */}
        <div className="hero-features">

          <div className="feature-item">
            <span className="feature-icon">🤝</span>

            <div>
              <strong>Verified Volunteers</strong>
              <small>Trusted helping hands</small>
            </div>
          </div>

          <div className="feature-line"></div>

          <div className="feature-item">
            <span className="feature-icon">📍</span>

            <div>
              <strong>Nearby Services</strong>
              <small>Help around you</small>
            </div>
          </div>

          <div className="feature-line"></div>

          <div className="feature-item">
            <span className="feature-icon">❤️</span>

            <div>
              <strong>Seva First</strong>
              <small>Community powered</small>
            </div>
          </div>

        </div>

      </div>

      

    </section>
  );
}