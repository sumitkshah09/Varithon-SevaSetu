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
              Stay informed about your route and destinations
              throughout your Wari journey.
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