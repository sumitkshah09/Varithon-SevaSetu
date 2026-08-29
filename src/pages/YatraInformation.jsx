import './YatraInformation.css'

export default function YatraInformation({ onBack }) {
  return (
    <main className="yatra-page">

      {/* ================= HEADER ================= */}

      <header className="yatra-header">

        <button
          className="yatra-back-button"
          onClick={onBack}
        >
          ←
        </button>

        <div className="yatra-header-title">
          <div className="yatra-header-icon">
            🛕
          </div>

          <div>
            <h1>Yatra Information</h1>
            <p>Your Wari journey at a glance</p>
          </div>
        </div>

        <div className="yatra-header-spacer"></div>

      </header>


      {/* ================= MAIN CONTENT ================= */}

      <div className="yatra-container">

        {/* ================= WELCOME CARD ================= */}

        <section className="yatra-welcome-card">

          <div className="yatra-welcome-content">

            <span className="yatra-small-text">
              Jai Hari Vitthal 🙏
            </span>

            <h2>
              Your Yatra Journey
            </h2>

            <p>
              Stay informed about your route, destinations,
              schedule and important information throughout
              your Wari journey.
            </p>

          </div>

          <div className="yatra-welcome-icon">
            🙏
          </div>

        </section>


        {/* ================= JOURNEY STATUS ================= */}

        <section className="yatra-section">

          <div className="yatra-section-heading">

            <h2>
              Journey Status
            </h2>

            <p>
              Your current position in the Yatra.
            </p>

          </div>


          <div className="journey-status-card">

            <div className="journey-status-top">

              <div>

                <span className="status-label">
                  CURRENT LOCATION
                </span>

                <h3>
                  Pandharpur
                </h3>

              </div>

              <span className="journey-active">
                ● Active
              </span>

            </div>


            <div className="journey-progress">

              <div className="progress-line">

                <div className="progress-filled"></div>

              </div>

              <div className="progress-points">

                <div className="progress-point completed">
                  ✓
                </div>

                <div className="progress-point completed">
                  ✓
                </div>

                <div className="progress-point current">
                  ●
                </div>

                <div className="progress-point">
                  4
                </div>

              </div>

            </div>


            <div className="journey-locations">

              <div>
                <strong>
                  Alandi
                </strong>
                <span>
                  Completed
                </span>
              </div>

              <div>
                <strong>
                  Pune
                </strong>
                <span>
                  Completed
                </span>
              </div>

              <div>
                <strong>
                  Pandharpur
                </strong>
                <span>
                  Current
                </span>
              </div>

              <div>
                <strong>
                  Vitthal Mandir
                </strong>
                <span>
                  Destination
                </span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= TODAY ================= */}

        <section className="yatra-section">

          <div className="yatra-section-heading">

            <h2>
              Today's Schedule
            </h2>

            <p>
              Important activities planned for today.
            </p>

          </div>


          <div className="schedule-list">

            {/* Morning */}

            <div className="schedule-card">

              <div className="schedule-time">
                <span>06:00</span>
                <small>AM</small>
              </div>

              <div className="schedule-line">
                <div className="schedule-dot"></div>
              </div>

              <div className="schedule-content">

                <h3>
                  Morning Darshan
                </h3>

                <p>
                  Begin the day with prayers and darshan.
                </p>

                <span className="schedule-status">
                  Morning
                </span>

              </div>

            </div>


            {/* Yatra */}

            <div className="schedule-card">

              <div className="schedule-time">
                <span>08:00</span>
                <small>AM</small>
              </div>

              <div className="schedule-line">
                <div className="schedule-dot"></div>
              </div>

              <div className="schedule-content">

                <h3>
                  Yatra Begins
                </h3>

                <p>
                  Continue your journey with your Dindi.
                </p>

                <span className="schedule-status">
                  Yatra
                </span>

              </div>

            </div>


            {/* Break */}

            <div className="schedule-card">

              <div className="schedule-time">
                <span>12:30</span>
                <small>PM</small>
              </div>

              <div className="schedule-line">
                <div className="schedule-dot"></div>
              </div>

              <div className="schedule-content">

                <h3>
                  Rest & Meal Break
                </h3>

                <p>
                  Take some time to rest, eat and stay hydrated.
                </p>

                <span className="schedule-status">
                  Break
                </span>

              </div>

            </div>


            {/* Evening */}

            <div className="schedule-card">

              <div className="schedule-time">
                <span>06:00</span>
                <small>PM</small>
              </div>

              <div className="schedule-line">
                <div className="schedule-dot"></div>
              </div>

              <div className="schedule-content">

                <h3>
                  Evening Bhajan
                </h3>

                <p>
                  Join fellow Warkaris for evening prayers
                  and bhajans.
                </p>

                <span className="schedule-status">
                  Evening
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ================= IMPORTANT INFORMATION ================= */}

        <section className="yatra-section">

          <div className="yatra-section-heading">

            <h2>
              Important Information
            </h2>

            <p>
              Keep these things in mind during your journey.
            </p>

          </div>


          <div className="information-grid">

            <div className="information-card">

              <div className="information-icon">
                💧
              </div>

              <div>

                <h3>
                  Stay Hydrated
                </h3>

                <p>
                  Drink water regularly, especially while
                  walking long distances.
                </p>

              </div>

            </div>


            <div className="information-card">

              <div className="information-icon">
                👣
              </div>

              <div>

                <h3>
                  Stay With Your Group
                </h3>

                <p>
                  Stay connected with your Dindi and fellow
                  Warkaris during the journey.
                </p>

              </div>

            </div>


            <div className="information-card">

              <div className="information-icon">
                🪪
              </div>

              <div>

                <h3>
                  Keep Your ID Safe
                </h3>

                <p>
                  Keep your identification and important
                  belongings safely with you.
                </p>

              </div>

            </div>


            <div className="information-card">

              <div className="information-icon">
                📢
              </div>

              <div>

                <h3>
                  Follow Announcements
                </h3>

                <p>
                  Pay attention to announcements from
                  organizers and volunteers.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= DESTINATION ================= */}

        <section className="destination-card">

          <div className="destination-icon">
            🛕
          </div>

          <div className="destination-content">

            <span>
              FINAL DESTINATION
            </span>

            <h2>
              Shri Vitthal Rukmini Mandir
            </h2>

            <p>
              Pandharpur
            </p>

          </div>

          <div className="destination-arrow">
            →
          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <footer className="yatra-footer">

          <div className="yatra-footer-icon">
            🙏
          </div>

          <h3>
            Jai Hari Vitthal
          </h3>

          <p>
            Seva • Bhakti • Samaj
          </p>

        </footer>

      </div>

    </main>
  )
}