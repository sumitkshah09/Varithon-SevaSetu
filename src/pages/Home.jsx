import "./Home.css";

import { useNavigate } from "react-router-dom";

import wariImage from "../assets/warkari.jpeg";

import { useLanguage } from "../language/languageContext";
import { translations } from "../language.js";

export default function Home() {
  const navigate = useNavigate();

  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="home-page">

      {/* ================= HERO ================= */}
      <section className="hero-section">

        {/* YOUR ORIGINAL MOVING BACKGROUND */}
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${wariImage})` }}
        ></div>

        {/* DARK OVERLAY */}
        <div className="hero-overlay"></div>

        {/* ================= NAVBAR ================= */}
        <nav className="home-navbar">

          <div className="home-logo">

            <div className="logo-icon">से</div>

            <div>
              <div className="logo-name">
                <span>सेवा</span>Setu
              </div>

              <small>{t.brandSubtitle}</small>
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
              {t.nearbyHelp}
            </a>

            <a href="#about">
              {language === "mr"
                ? "आमच्याबद्दल"
                : language === "hi"
                ? "हमारे बारे में"
                : "About"}
            </a>

          </div>

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

        </nav>

        {/* ================= HERO CONTENT ================= */}
        <div className="hero-content">

          {/* CULTURAL BADGE */}
          <div className="hero-badge">
            {t.badge}
          </div>

          {/* BRAND */}
          <div className="brand-name">

            <span className="brand-marathi">
              {language === "en" ? "सेवा" : "सेवा"}
            </span>

            <span className="brand-setu">
              {language === "mr"
                ? "सेतू"
                : language === "hi"
                ? "सेतु"
                : "Setu"}
            </span>

          </div>

          {/* TAGLINE */}
          <h1 className="main-tagline">

            {t.tagline1}

            <br />

            <span>
              {t.tagline2}
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="hero-description">
            {t.description}
          </p>

          {/* BUTTON */}
          <div className="hero-buttons">

            <button
              className="hero-btn primary"
              onClick={() => navigate("/role-selection")}
            >
              {t.findService}
            </button>

          </div>

          {/* QUICK TRUST INFO */}
          <div className="hero-trust">

            <span>
              {t.verifiedVolunteers}
            </span>

            <span>•</span>

            <span>
              {t.nearbyHelp}
            </span>

            <span>•</span>

            <span>
              {t.emergencySupport}
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
            {t.networkActive}
          </div>

          <div className="status-stat">

            <strong>24+</strong>

            <small>
              {t.activeVolunteers}
            </small>

          </div>

          <div className="status-stat">

            <strong>18</strong>

            <small>
              {t.nearbyServices}
            </small>

          </div>

          <div className="status-stat">

            <strong>7</strong>

            <small>
              {t.medicalPoints}
            </small>

          </div>

        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section
        className="services-section"
        id="services"
      >

        <div className="services-heading">

          <span className="section-label">
            {language === "mr"
              ? "आवश्यक सेवा"
              : language === "hi"
              ? "आवश्यक सेवाएं"
              : "ESSENTIAL SERVICES"}
          </span>

          <h2>
            {t.servicesTitle}

            <br />

            <strong>
              {t.servicesTitle2}
            </strong>
          </h2>

          <p>
            {t.servicesDescription}
          </p>

        </div>


        <div className="services-grid">

          <div className="service-card">

            <div className="service-icon">
              🏥
            </div>

            <h3>
              {t.medicalHelp}
            </h3>

            <p>
              {t.medicalDescription}
            </p>

          </div>


          <div className="service-card">

            <div className="service-icon">
              🍱
            </div>

            <h3>
              {t.foodWater}
            </h3>

            <p>
              {t.foodDescription}
            </p>

          </div>


          <div className="service-card">

            <div className="service-icon">
              🚻
            </div>

            <h3>
              {t.toilets}
            </h3>

            <p>
              {t.toiletDescription}
            </p>

          </div>


          <div className="service-card">

            <div className="service-icon">
              🧭
            </div>

            <h3>
              {t.navigation}
            </h3>

            <p>
              {t.navigationDescription}
            </p>

          </div>

        </div>

      </section>


      {/* ================= MAP PREVIEW ================= */}
      <section
        className="map-section"
        id="map"
      >

        <div className="map-content">

          <span className="section-label">
            {t.nearbyNetwork}
          </span>

          <h2>

            {t.findHelp}

            <br />

            <strong>
              {t.aroundYou}
            </strong>

          </h2>

          <p>
            {t.mapDescription}
          </p>

          <button
            className="map-button"
            onClick={() => navigate("/role-selection")}
          >
            {t.exploreServices}
          </button>

        </div>


        {/* MAP PREVIEW */}
        <div className="map-preview">

          <div className="map-grid"></div>

          <div className="map-route"></div>


          <div className="map-pin pin-one">
            🏥
          </div>

          <div className="map-pin pin-two">
            🍱
          </div>

          <div className="map-pin pin-three">
            💧
          </div>

          <div className="map-pin pin-four">
            🤝
          </div>


          <div className="map-location">

            <span></span>

            {language === "mr"
              ? "तुमचे स्थान"
              : language === "hi"
              ? "आपका स्थान"
              : "Your Location"}

          </div>


          <div className="map-label">

            {language === "mr"
              ? "जवळची सेवा"
              : language === "hi"
              ? "आसपास की सेवा"
              : "Nearby Seva"}

          </div>

        </div>

      </section>


      {/* ================= WHY SEVASETU ================= */}
      <section
        className="why-section"
        id="about"
      >

        <div className="why-heading">

          <span className="section-label">
            {t.whySevaSetu}
          </span>

          <h2>

            {t.technologyPurpose}

            <br />

            <strong>
              {t.humanPurpose}
            </strong>

          </h2>

        </div>


        <div className="why-grid">

          {/* CARD 1 */}
          <div className="why-card">

            <div>
              🛡️
            </div>

            <h3>
              {t.verifiedTitle}
            </h3>

            <p>
              {t.verifiedDescription}
            </p>

          </div>


          {/* CARD 2 */}
          <div className="why-card">

            <div>
              📍
            </div>

            <h3>
              {t.locationTitle}
            </h3>

            <p>
              {t.locationDescription}
            </p>

          </div>


          {/* CARD 3 */}
          <div className="why-card">

            <div>
              🚨
            </div>

            <h3>
              {t.emergencyTitle}
            </h3>

            <p>
              {t.emergencyDescription}
            </p>

          </div>


          {/* CARD 4 */}
          <div className="why-card">

            <div>
              🌐
            </div>

            <h3>
              {t.networkTitle}
            </h3>

            <p>
              {t.networkDescription}
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="final-cta">

        <div>

          <span>
            SEVA • SAHYOG • SAMARPAN
          </span>

          <h2>

            {t.ctaTitle}

            <br />

            <strong>
              {t.ctaTitle2}
            </strong>

          </h2>

          <p>
            {t.ctaDescription}
          </p>

          <button
            onClick={() => navigate("/role-selection")}
          >
            {t.join}
          </button>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="home-footer">

        <div>

          <strong>

            <span>
              सेवा
            </span>

            {language === "mr"
              ? "सेतू"
              : language === "hi"
              ? "सेतु"
              : "Setu"}

          </strong>

          <p>
            {t.footerText}
          </p>

        </div>


        <div className="footer-center">
          {t.badge}
        </div>


        <small>
          © 2026 SevaSetu
        </small>

      </footer>

    </div>
  );
}

