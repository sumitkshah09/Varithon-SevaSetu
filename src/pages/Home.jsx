
import "./Home.css";
import { useNavigate } from "react-router-dom";
import wariImage from "../assets/warkari.jpeg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* ================= HERO ================= */}
      <section className="hero-section">

        {/* YOUR ORIGINAL MOVING BACKGROUND */}
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${wariImage})` }}
        ></div>

        {/* Dark Overlay */}
        <div className="hero-overlay"></div>

        {/* ================= NAVBAR ================= */}
        <nav className="home-navbar">

          <div className="home-logo">
            <div className="logo-icon">से</div>

            <div>
              <div className="logo-name">
                <span>सेवा</span>Setu
              </div>
              <small>Wari Seva Network</small>
            </div>
          </div>

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#map">Nearby Help</a>
            <a href="#about">About</a>
          </div>

          <button
            className="nav-button"
            onClick={() => navigate("/role-selection")}
          >
            Get Started →
          </button>

        </nav>

        {/* ================= HERO CONTENT ================= */}
        <div className="hero-content">

          <div className="hero-badge">
            ॥ जय हरी विठ्ठल ॥
          </div>

          <div className="brand-name">
            <span className="brand-marathi">सेवा</span>
            <span className="brand-setu">Setu</span>
          </div>

          <h1 className="main-tagline">
            Connecting Helping Hands
            <br />
            <span>with Every Warkari</span>
          </h1>

          <p className="hero-description">
            A digital platform that connects Warkaris with
            trusted volunteers and essential services —
            making every step of the Wari safer, easier
            and more connected.
          </p>

          
{/* BUTTONS */}
<div className="hero-buttons">
  <button
    className="hero-btn primary"
    onClick={() => navigate("/role-selection")}
  >
    🤝 Find a Service →
  </button>
</div>


          {/* QUICK TRUST INFO */}
          <div className="hero-trust">

            <span>✓ Verified Volunteers</span>
            <span>•</span>
            <span>📍 Nearby Help</span>
            <span>•</span>
            <span>🚨 Emergency Support</span>

          </div>

        </div>

        {/* ================= LIVE STATUS BAR ================= */}
        <div className="live-status">

          <div className="live-indicator">
            <span></span>
            LIVE
          </div>

          <div className="status-text">
            SevaSetu Network is Active
          </div>

          <div className="status-stat">
            <strong>24+</strong>
            <small>Active Volunteers</small>
          </div>

          <div className="status-stat">
            <strong>18</strong>
            <small>Nearby Services</small>
          </div>

          <div className="status-stat">
            <strong>7</strong>
            <small>Medical Points</small>
          </div>

        </div>

      </section>

      {/* ================= MAP PREVIEW ================= */}
      <section className="map-section" id="map">

        <div className="map-content">

          <span className="section-label">
            NEARBY SEVA NETWORK
          </span>

          <h2>
            Find help
            <br />
            <strong>around you.</strong>
          </h2>

          <p>
            Use your location to discover nearby volunteers,
            medical centres, food camps, water points and
            other essential services along the Wari route.
          </p>

          <button
            className="map-button"
            onClick={() => navigate("/role-selection")}
          >
            📍 Explore Nearby Services →
          </button>

        </div>

        {/* Fake map-style preview */}
        <div className="map-preview">

          <div className="map-grid"></div>

          <div className="map-route"></div>

          <div className="map-pin pin-one">🏥</div>
          <div className="map-pin pin-two">🍱</div>
          <div className="map-pin pin-three">💧</div>
          <div className="map-pin pin-four">🤝</div>

          <div className="map-location">
            <span></span>
            Your Location
          </div>

          <div className="map-label">
            Nearby Seva
          </div>

        </div>

      </section>


      {/* ================= WHY SEVASETU ================= */}
      <section className="why-section" id="about">

        <div className="why-heading">

          <span className="section-label">
            WHY SEVASETU
          </span>

          <h2>
            Technology with a
            <br />
            <strong>human purpose.</strong>
          </h2>

        </div>

        <div className="why-grid">

          <div className="why-card">
            <div>🛡️</div>
            <h3>Verified Volunteers</h3>
            <p>
              Connect with trusted volunteers who are
              ready to provide assistance.
            </p>
          </div>

          <div className="why-card">
            <div>📍</div>
            <h3>Location Based</h3>
            <p>
              Find the services and support closest
              to your current location.
            </p>
          </div>

          <div className="why-card">
            <div>🚨</div>
            <h3>Emergency Ready</h3>
            <p>
              Quickly reach assistance when you need
              urgent support during the Wari.
            </p>
          </div>

          <div className="why-card">
            <div>🌐</div>
            <h3>One Connected Network</h3>
            <p>
              Bring Warkaris, volunteers and service
              providers onto one platform.
            </p>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="final-cta">

        <div>
          <span>SEVA • SAHYOG • SAMARPAN</span>

          <h2>
            Be a part of the
            <br />
            <strong>Seva Network.</strong>
          </h2>

          <p>
            Every helping hand can make someone's journey easier.
          </p>

          <button
            onClick={() => navigate("/role-selection")}
          >
            Join SevaSetu →
          </button>
        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="home-footer">

        <div>
          <strong>
            <span>सेवा</span>Setu
          </strong>

          <p>
            Connecting Helping Hands with Every Warkari.
          </p>
        </div>

        <div className="footer-center">
          ॥ जय हरी विठ्ठल ॥
        </div>

        <small>
          © 2026 SevaSetu
        </small>

      </footer>

    </div>
  );
}

