import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { translations } from "../language/translations";
import "./YatraInformation.css";

function YatraInformation() {
  const navigate = useNavigate();

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem("language") || "en");
    };

    window.addEventListener("languageChanged", handleLanguageChange);

    return () => {
      window.removeEventListener(
        "languageChanged",
        handleLanguageChange
      );
    };
  }, []);

  const t =
    translations[language]?.yatraInformation ||
    translations.en.yatraInformation;

  return (
    <div className="yatra-page">

      {/* ================= HEADER ================= */}
      <header className="yatra-header">

        <button
          className="back-button"
          onClick={() => navigate(-1)}
        >
          ← {t.back}
        </button>

        <div className="header-title">
          <div className="header-blessing">
            {t.blessing}
          </div>

          <h1>{t.title}</h1>

          <p>{t.headerSubtitle}</p>
        </div>

      </header>


      {/* ================= MAIN CONTENT ================= */}
      <main className="yatra-container">

        {/* INTRO CARD */}
        <section className="intro-card">

          <div className="intro-icon">
            🛕
          </div>

          <div>
            <h2>{t.yourYatraJourney}</h2>

            <p>{t.welcomeDescription}</p>
          </div>

        </section>


        {/* ================= JOURNEY STATUS ================= */}
        <section className="section">

          <div className="section-heading">
            <h2>{t.journeyStatus}</h2>

            <p>{t.journeyStatusDescription}</p>
          </div>


          <div className="journey-card">

            {/* Current Location */}
            <div className="journey-point completed-point">

              <div className="point-icon">
                ✓
              </div>

              <div className="point-content">

                <span className="point-label">
                  {t.currentLocationLabel}
                </span>

                <h3>{t.pandharpur}</h3>

                <span className="status active">
                  ● {t.active}
                </span>

              </div>

            </div>


            {/* Journey Line */}
            <div className="journey-line">
              <div className="line-progress"></div>
            </div>


            {/* Alandi */}
            <div className="journey-point">

              <div className="point-icon completed">
                ✓
              </div>

              <div className="point-content">

                <h3>{t.alandi}</h3>

                <span className="status">
                  {t.completed}
                </span>

              </div>

            </div>


            {/* Pune */}
            <div className="journey-point">

              <div className="point-icon completed">
                ✓
              </div>

              <div className="point-content">

                <h3>{t.pune}</h3>

                <span className="status">
                  {t.completed}
                </span>

              </div>

            </div>


            {/* Vitthal Mandir */}
            <div className="journey-point destination-point">

              <div className="point-icon destination">
                🛕
              </div>

              <div className="point-content">

                <h3>{t.vitthalMandir}</h3>

                <span className="status destination-status">
                  {t.destination}
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ================= TODAY'S SCHEDULE ================= */}
        <section className="section">

          <div className="section-heading">

            <h2>{t.todaysSchedule}</h2>

            <p>{t.scheduleDescription}</p>

          </div>


          <div className="schedule-list">

            {/* Morning Darshan */}
            <div className="schedule-card">

              <div className="schedule-time">
                <strong>6:00</strong>
                <span>{t.am}</span>
              </div>

              <div className="schedule-icon">
                🙏
              </div>

              <div className="schedule-content">

                <h3>{t.morningDarshan}</h3>

                <p>{t.morningDarshanDescription}</p>

                <span className="schedule-tag">
                  {t.morning}
                </span>

              </div>

            </div>


            {/* Yatra Begins */}
            <div className="schedule-card">

              <div className="schedule-time">
                <strong>8:00</strong>
                <span>{t.am}</span>
              </div>

              <div className="schedule-icon">
                🚶
              </div>

              <div className="schedule-content">

                <h3>{t.yatraBegins}</h3>

                <p>{t.yatraBeginsDescription}</p>

                <span className="schedule-tag">
                  {t.yatra}
                </span>

              </div>

            </div>


            {/* Rest & Meal */}
            <div className="schedule-card">

              <div className="schedule-time">
                <strong>1:00</strong>
                <span>{t.pm}</span>
              </div>

              <div className="schedule-icon">
                🍱
              </div>

              <div className="schedule-content">

                <h3>{t.restMealBreak}</h3>

                <p>{t.restMealBreakDescription}</p>

                <span className="schedule-tag">
                  {t.break}
                </span>

              </div>

            </div>


            {/* Evening Bhajan */}
            <div className="schedule-card">

              <div className="schedule-time">
                <strong>7:00</strong>
                <span>{t.pm}</span>
              </div>

              <div className="schedule-icon">
                🎵
              </div>

              <div className="schedule-content">

                <h3>{t.eveningBhajan}</h3>

                <p>{t.eveningBhajanDescription}</p>

                <span className="schedule-tag">
                  {t.evening}
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ================= IMPORTANT INFORMATION ================= */}
        <section className="section">

          <div className="section-heading">

            <h2>{t.importantInformation}</h2>

            <p>{t.importantInformationDescription}</p>

          </div>


          <div className="information-grid">

            {/* Hydration */}
            <div className="info-card">

              <div className="info-icon">
                💧
              </div>

              <div>

                <h3>{t.stayHydrated}</h3>

                <p>{t.stayHydratedDescription}</p>

              </div>

            </div>


            {/* Group */}
            <div className="info-card">

              <div className="info-icon">
                👥
              </div>

              <div>

                <h3>{t.stayWithGroup}</h3>

                <p>{t.stayWithGroupDescription}</p>

              </div>

            </div>


            {/* ID */}
            <div className="info-card">

              <div className="info-icon">
                🪪
              </div>

              <div>

                <h3>{t.keepIdSafe}</h3>

                <p>{t.keepIdSafeDescription}</p>

              </div>

            </div>


            {/* Announcements */}
            <div className="info-card">

              <div className="info-icon">
                📢
              </div>

              <div>

                <h3>{t.followAnnouncements}</h3>

                <p>{t.followAnnouncementsDescription}</p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= FINAL DESTINATION ================= */}
        <section className="final-destination">

          <div className="final-icon">
            🛕
          </div>

          <span>{t.finalDestination}</span>

          <h2>{t.vitthalRukminiMandir}</h2>

          <p>{t.jaiHariVitthal}</p>

        </section>


        {/* ================= FOOTER ================= */}
        <footer className="yatra-footer">

          <div>{t.sevaBhaktiSamaj}</div>

        </footer>

      </main>

    </div>
  );
}

export default YatraInformation;