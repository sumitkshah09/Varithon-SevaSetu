import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/VolunteerProfile.css";

const SKILLS = [
  "First Aid",
  "Medical Assistance",
  "Navigation",
  "Crowd Management",
  "Food Distribution",
  "Water Distribution",
  "Language Assistance",
  "Emergency Response",
];

export default function VolunteerProfile() {
  const navigate = useNavigate();

  const [isAvailable, setIsAvailable] = useState(true);

  return (
    <div className="volunteer-profile-page">

      {/* =========================================
          TOP BAR
          ========================================= */}

      <header className="volunteer-profile-topbar">

        {/* Logo */}

        <button
          className="volunteer-profile-brand"
          onClick={() => navigate("/volunteer-dashboard")}
        >
          <span className="volunteer-profile-brand-mark">
            S
          </span>

          <span>
            SevaSetu
          </span>
        </button>


        {/* Navigation */}

        <nav className="volunteer-profile-nav">

          <button
            onClick={() =>
              navigate("/volunteer-dashboard")
            }
          >
            Dashboard
          </button>

          <button
            onClick={() =>
              navigate("/volunteer-requests")
            }
          >
            Requests
          </button>

          <button
            onClick={() =>
              navigate("/volunteer-dashboard")
            }
          >
            My Tasks
          </button>

          <button
            onClick={() =>
              navigate("/volunteer-map")
            }
          >
            Map
          </button>

          <button>
            Resources
          </button>

        </nav>


        {/* Right side */}

        <div className="volunteer-profile-top-right">

          <button
            type="button"
            className="profile-notification"
          >
            🔔
          </button>


          <div className="profile-header-status">

            <span
              className={
                isAvailable
                  ? "profile-status-dot available"
                  : "profile-status-dot offline"
              }
            />

            {isAvailable
              ? "Available"
              : "Offline"}

          </div>


          {/* Current profile */}

          <button
            type="button"
            className="profile-header-user active-profile"
          >

            <span className="profile-header-avatar">
              V
            </span>

            <span>
              Volunteer
            </span>

          </button>

        </div>

      </header>


      {/* =========================================
          MAIN
          ========================================= */}

      <main className="volunteer-profile-main">

        {/* Back */}

        <button
          type="button"
          className="profile-back-button"
          onClick={() =>
            navigate("/volunteer-dashboard")
          }
        >
          ← Back to Dashboard
        </button>


        {/* Page heading */}

        <section className="profile-page-heading">

          <div>

            <p className="profile-dashboard-label">
              VOLUNTEER ACCOUNT
            </p>

            <h1>
              Volunteer Profile
            </h1>

            <p>
              Manage your volunteer information,
              availability and seva skills.
            </p>

          </div>

        </section>


        {/* =========================================
            PROFILE CARD
            ========================================= */}

        <section className="profile-card">

          <div className="profile-card-main">

            <div className="large-profile-avatar">
              V
            </div>


            <div className="profile-person-info">

              <h2>
                Volunteer
              </h2>

              <p>
                Volunteer ID: <strong>VOL-001</strong>
              </p>

              <span className="profile-member-badge">
                SevaSetu Volunteer
              </span>

            </div>

          </div>


          {/* Availability */}

          <div className="profile-availability">

            <div className="profile-availability-info">

              <span
                className={
                  isAvailable
                    ? "large-status-dot available"
                    : "large-status-dot offline"
                }
              />

              <div>

                <span>
                  AVAILABILITY
                </span>

                <strong>
                  {isAvailable
                    ? "🟢 Available"
                    : "⚪ Offline"}
                </strong>

              </div>

            </div>


            <button
              type="button"
              className={
                isAvailable
                  ? "go-offline-button"
                  : "go-online-button"
              }
              onClick={() =>
                setIsAvailable(!isAvailable)
              }
            >
              {isAvailable
                ? "Go Offline"
                : "Go Online"}
            </button>

          </div>

        </section>


        {/* =========================================
            CONTENT GRID
            ========================================= */}

        <div className="profile-content-grid">


          {/* =======================================
              SKILLS
              ======================================= */}

          <section className="profile-section skills-section">

            <div className="profile-section-heading">

              <div>

                <h2>
                  Skills
                </h2>

                <p>
                  Skills available for seva assignments.
                </p>

              </div>

            </div>


            <div className="skills-list">

              {SKILLS.map((skill) => (

                <div
                  className="skill-item"
                  key={skill}
                >

                  <span className="skill-check">
                    ✓
                  </span>

                  <span>
                    {skill}
                  </span>

                </div>

              ))}

            </div>

          </section>


          {/* =======================================
              STATISTICS
              ======================================= */}

          <section className="profile-section statistics-section">

            <div className="profile-section-heading">

              <div>

                <h2>
                  Statistics
                </h2>

                <p>
                  Your seva contribution so far.
                </p>

              </div>

            </div>


            <div className="profile-stat-list">

              <div className="profile-stat-card">

                <div className="profile-stat-icon">
                  🤝
                </div>

                <div>

                  <span>
                    Requests Completed
                  </span>

                  <strong>
                    18
                  </strong>

                </div>

              </div>


              <div className="profile-stat-card">

                <div className="profile-stat-icon">
                  ⏱
                </div>

                <div>

                  <span>
                    Seva Hours
                  </span>

                  <strong>
                    32h
                  </strong>

                </div>

              </div>


              <div className="profile-stat-card">

                <div className="profile-stat-icon">
                  🚨
                </div>

                <div>

                  <span>
                    Active Requests
                  </span>

                  <strong>
                    3
                  </strong>

                </div>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}