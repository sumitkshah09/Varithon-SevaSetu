
import "./Home.css";
import { useNavigate } from "react-router-dom";
import wariImage from "../assets/warkari.jpeg";

import { useLanguage } from "../language/languageContext";
import { translations } from "../language/translations";
import LanguageSwitcher from "../components/languageSwitcher"; 

export default function Home() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  // Safe translation fallback
  const t = translations?.[language] || translations?.en || {};

  return (
    <div className="home-page">

      {/* ================= HERO ================= */}
      <section className="hero-section">

        {/* Moving Background */}
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

              <small>
                {t.brandSubtitle || "Wari Seva Network"}
              </small>
            </div>
          </div>

          <div className="nav-links">
            <a href="#services">
              {language === "mr"
                ? "सेवा"
                : language === "hi"
                ? "सेवाएं"
                : "Services"}
            </a>

            <a href="#map">
              {t.nearbyHelp || "Nearby Help"}
            </a>

            <a href="#about">
              {language === "mr"
                ? "आमच्याबद्दल"
                : language === "hi"
                ? "हमारे बारे में"
                : "About"}
            </a>
          </div>

          <div className="navbar-actions">

            <button
              className="nav-button"
              onClick={() => navigate("/role-selection")}
            >
              {language === "mr"
                ? "सुरुवात करा →"
                : language === "hi"
                ? "शुरू करें →"
                : "Get Started →"}
            </button>

            {/* LANGUAGE BUTTON */}
            <LanguageSwitcher />

          </div>
        </nav>

        {/* ================= HERO CONTENT ================= */}
        <div className="hero-content">

          {/* Cultural Badge */}
          <div className="hero-badge">
            {t.badge || "॥ जय हरी विठ्ठल ॥"}
          </div>

          {/* Brand */}
          <div className="brand-name">
            <span className="brand-marathi">सेवा</span>

            <span className="brand-setu">
              {language === "mr"
                ? "सेतू"
                : language === "hi"
                ? "सेतु"
                : "Setu"}
            </span>
          </div>

          {/* Tagline */}
          <h1 className="main-tagline">
            {t.tagline1 || "Connecting Helping Hands"}
            <br />
            <span>
              {t.tagline2 || "with Every Warkari"}
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            {t.description ||
              "A digital platform that connects Warkaris with trusted volunteers and essential services — making every step of the Wari safer, easier and more connected."}
          </p>

          {/* Button */}
          <div className="hero-buttons">
            <button
              className="hero-btn primary"
              onClick={() => navigate("/role-selection")}
            >
              {t.findService || "🤝 Find a Service →"}
            </button>
          </div>

          {/* Quick Trust Info */}
          <div className="hero-trust">
            <span>
              {t.verifiedVolunteers || "✓ Verified Volunteers"}
            </span>

            <span>•</span>

            <span>
              {t.nearbyHelp || "📍 Nearby Help"}
            </span>

            <span>•</span>

            <span>
              {t.emergencySupport || "🚨 Emergency Support"}
            </span>
          </div>
        </div>

        {/* ================= LIVE STATUS BAR ================= */}
        <div className="live-status">

          <div className="live-indicator">
            <span></span>

            {language === "mr"
              ? "लाईव्ह"
              : language === "hi"
              ? "लाइव"
              : "LIVE"}
          </div>

          <div className="status-text">
            {t.networkActive || "SevaSetu Network is Active"}
          </div>

          <div className="status-stat">
            <strong>24+</strong>
            <small>
              {t.activeVolunteers || "Active Volunteers"}
            </small>
          </div>

          <div className="status-stat">
            <strong>18</strong>
            <small>
              {t.nearbyServices || "Nearby Services"}
            </small>
          </div>

          <div className="status-stat">
            <strong>7</strong>
            <small>
              {t.medicalPoints || "Medical Points"}
            </small>
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-section" id="services">

        <div className="services-heading">

          <span className="section-label">
            {language === "mr"
              ? "आवश्यक सेवा"
              : language === "hi"
              ? "आवश्यक सेवाएं"
              : "ESSENTIAL SERVICES"}
          </span>

          <h2>
            {t.servicesTitle || "Essential"}
            <br />
            <strong>
              {t.servicesTitle2 || "services for every Warkari."}
            </strong>
          </h2>

          <p>
            {t.servicesDescription ||
              "Access important services and assistance during your Wari journey."}
          </p>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon">🏥</div>

            <h3>
              {t.medicalHelp || "Medical Help"}
            </h3>

            <p>
              {t.medicalDescription ||
                "Find medical assistance and healthcare support nearby."}
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🍱</div>

            <h3>
              {t.foodWater || "Food & Water"}
            </h3>

            <p>
              {t.foodDescription ||
                "Locate food camps and drinking water points along the route."}
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🚻</div>

            <h3>
              {t.toilets || "Toilets"}
            </h3>

            <p>
              {t.toiletDescription ||
                "Find nearby toilet and sanitation facilities."}
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🧭</div>

            <h3>
              {t.navigation || "Navigation"}
            </h3>

            <p>
              {t.navigationDescription ||
                "Get help navigating the Wari route and nearby services."}
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHY SEVASETU ================= */}
      <section className="why-section" id="about">

        <div className="why-heading">

          <span className="section-label">
            {t.whySevaSetu || "WHY SEVASETU"}
          </span>

          <h2>
            {t.technologyPurpose || "Technology with a"}
            <br />
            <strong>
              {t.humanPurpose || "human purpose."}
            </strong>
          </h2>

        </div>

        <div className="why-grid">

          <div className="why-card">
            <div>🛡️</div>

            <h3>
              {t.verifiedTitle || "Verified Volunteers"}
            </h3>

            <p>
              {t.verifiedDescription ||
                "Connect with trusted volunteers who are ready to provide assistance."}
            </p>
          </div>

          <div className="why-card">
            <div>📍</div>

            <h3>
              {t.locationTitle || "Location Based"}
            </h3>

            <p>
              {t.locationDescription ||
                "Find the services and support closest to your current location."}
            </p>
          </div>

          <div className="why-card">
            <div>🚨</div>

            <h3>
              {t.emergencyTitle || "Emergency Ready"}
            </h3>

            <p>
              {t.emergencyDescription ||
                "Quickly reach assistance when you need urgent support during the Wari."}
            </p>
          </div>

          <div className="why-card">
            <div>🌐</div>

            <h3>
              {t.networkTitle || "One Connected Network"}
            </h3>

            <p>
              {t.networkDescription ||
                "Bring Warkaris, volunteers and service providers onto one platform."}
            </p>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="final-cta">

        <div>

          <span>SEVA • SAHYOG • SAMARPAN</span>

          <h2>
            {t.ctaTitle || "Be a part of the"}
            <br />
            <strong>
              {t.ctaTitle2 || "Seva Network."}
            </strong>
          </h2>

          <p>
            {t.ctaDescription ||
              "Every helping hand can make someone's journey easier."}
          </p>

          <button
            onClick={() => navigate("/role-selection")}
          >
            {t.join || "Join SevaSetu →"}
          </button>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="home-footer">

        <div>

          <strong>
            <span>सेवा</span>

            {language === "mr"
              ? "सेतू"
              : language === "hi"
              ? "सेतु"
              : "Setu"}
          </strong>

          <p>
            {t.footerText ||
              "Connecting Helping Hands with Every Warkari."}
          </p>

        </div>

        <div className="footer-center">
          {t.badge || "॥ जय हरी विठ्ठल ॥"}
        </div>

        <small>
          © 2026 SevaSetu
        </small>

      </footer>

    </div>
  );
}

