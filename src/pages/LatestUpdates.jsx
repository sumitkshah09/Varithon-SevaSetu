import './LatestUpdates.css'

export default function LatestUpdates({ onBack }) {
  return (
    <main className="latest-updates-page">

      {/* ================= HEADER ================= */}

      <header className="latest-updates-header">

        <button
          className="updates-back-button"
          onClick={onBack}
        >
          ←
        </button>

        <div className="updates-header-title">

          <div className="updates-header-icon">
            📢
          </div>

          <div>
            <h1>Latest Updates</h1>
            <p>Stay informed during your Wari journey</p>
          </div>

        </div>

      </header>


      {/* ================= CONTENT ================= */}

      <div className="latest-updates-container">

        {/* PAGE INTRO */}

        <section className="updates-intro">

          <div className="updates-intro-icon">
            📢
          </div>

          <div>

            <span>
              SEVA SETU UPDATES
            </span>

            <h2>
              Important information for Warkaris
            </h2>

            <p>
              Stay updated with announcements, route changes,
              safety information and important Wari notices.
            </p>

          </div>

        </section>


        {/* ================= IMPORTANT NOTICE ================= */}

        <section className="featured-update">

          <div className="featured-update-top">

            <span className="important-badge">
              IMPORTANT
            </span>

            <span className="update-time">
              Today
            </span>

          </div>

          <h2>
            Stay Hydrated During Your Yatra
          </h2>

          <p>
            Warkaris are advised to drink sufficient water
            throughout the journey. Please use designated
            drinking water points and avoid dehydration.
          </p>

          <div className="update-footer">
            <span>💧 Health & Safety</span>
            <span>Seva Setu</span>
          </div>

        </section>


        {/* ================= UPDATES ================= */}

        <section className="updates-section">

          <div className="updates-section-heading">

            <div>
              <h2>
                Recent Updates
              </h2>

              <p>
                Latest announcements from the Wari support team.
              </p>
            </div>

          </div>


          <div className="updates-list">


            {/* UPDATE 1 */}

            <article className="update-card">

              <div className="update-card-icon">
                🛣️
              </div>

              <div className="update-card-content">

                <div className="update-card-meta">

                  <span className="update-category route">
                    ROUTE
                  </span>

                  <span>
                    Today
                  </span>

                </div>

                <h3>
                  Follow the Designated Wari Route
                </h3>

                <p>
                  Please follow the official Wari route and
                  instructions provided by organizers and
                  volunteers for a safe journey.
                </p>

              </div>

            </article>


            {/* UPDATE 2 */}

            <article className="update-card">

              <div className="update-card-icon">
                🏕️
              </div>

              <div className="update-card-content">

                <div className="update-card-meta">

                  <span className="update-category camp">
                    CAMPS
                  </span>

                  <span>
                    Today
                  </span>

                </div>

                <h3>
                  Wari Camps Are Available Along the Route
                </h3>

                <p>
                  Registered Wari camps provide resting areas,
                  drinking water and other basic facilities
                  for Warkaris.
                </p>

              </div>

            </article>


            {/* UPDATE 3 */}

            <article className="update-card">

              <div className="update-card-icon">
                🏥
              </div>

              <div className="update-card-content">

                <div className="update-card-meta">

                  <span className="update-category medical">
                    MEDICAL
                  </span>

                  <span>
                    Yesterday
                  </span>

                </div>

                <h3>
                  Medical Assistance Available
                </h3>

                <p>
                  Medical assistance points are available at
                  designated locations. Contact Seva Setu
                  volunteers if you need help.
                </p>

              </div>

            </article>


            {/* UPDATE 4 */}

            <article className="update-card">

              <div className="update-card-icon">
                🤝
              </div>

              <div className="update-card-content">

                <div className="update-card-meta">

                  <span className="update-category seva">
                    SEVA
                  </span>

                  <span>
                    Yesterday
                  </span>

                </div>

                <h3>
                  Volunteers Are Available to Assist Warkaris
                </h3>

                <p>
                  Seva Setu volunteers are available to help
                  with directions, facilities and other
                  assistance during the journey.
                </p>

              </div>

            </article>


            {/* UPDATE 5 */}

            <article className="update-card">

              <div className="update-card-icon">
                📍
              </div>

              <div className="update-card-content">

                <div className="update-card-meta">

                  <span className="update-category location">
                    LOCATION
                  </span>

                  <span>
                    2 days ago
                  </span>

                </div>

                <h3>
                  Keep Your Location Services Enabled
                </h3>

                <p>
                  Keeping location services enabled helps
                  Seva Setu provide accurate route and nearby
                  assistance information.
                </p>

              </div>

            </article>

          </div>

        </section>


        {/* ================= SAFETY ================= */}

        <section className="updates-safety">

          <div className="updates-safety-icon">
            ⚠️
          </div>

          <div>

            <h3>
              Important Safety Reminder
            </h3>

            <p>
              Follow official announcements and instructions
              from Wari organizers. In case of an emergency,
              use the Get Help section to request assistance.
            </p>

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <footer className="latest-updates-footer">

          <div>
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