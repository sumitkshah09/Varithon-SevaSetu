
import "../styles/VolunteerDashboard.css";

export default function VolunteerDashboard() {
  return (
    <div className="volunteer-dashboard">

      {/* Top Bar */}
      <header className="volunteer-topbar">
        <div className="volunteer-brand">
          <div className="volunteer-brand-mark">S</div>
          <span>SevaSetu</span>
        </div>

        <div className="volunteer-profile">
          <div>
            <strong>Volunteer</strong>
            <span>Available to help</span>
          </div>

          <div className="volunteer-avatar">
            V
          </div>
        </div>
      </header>


      {/* Main Dashboard */}
      <main className="volunteer-main">

        {/* Welcome */}
        <section className="volunteer-welcome">

          <div>
            <p className="dashboard-label">
              VOLUNTEER DASHBOARD
            </p>

            <h1>Welcome, Volunteer 👋</h1>

            <p>
              Help Warkaris nearby who need assistance.
            </p>
          </div>


          {/* Availability */}
          <div className="availability-control">

            <label
              htmlFor="availability"
              className="status-label"
            >
              Your availability
            </label>

            <select
              id="availability"
              className="status-select"
              defaultValue="available"
            >
              <option value="available">
                🟢 Available
              </option>

              <option value="busy">
                🟡 Busy
              </option>

              <option value="offline">
                ⚪ Offline
              </option>
            </select>

          </div>

        </section>


        {/* Statistics */}
        <section className="volunteer-stats">

          <div className="stat-card">
            <div className="stat-icon">🤝</div>

            <div>
              <span>Requests helped</span>
              <strong>0</strong>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon">⏳</div>

            <div>
              <span>Active requests</span>
              <strong>0</strong>
            </div>
          </div>


          <div className="stat-card">
            <div className="stat-icon">⭐</div>

            <div>
              <span>Volunteer rating</span>
              <strong>5.0</strong>
            </div>
          </div>

        </section>


        {/* Requests */}
        <section className="dashboard-section">

          <div className="section-heading">

            <div>
              <h2>Help requests</h2>

              <p>
                Requests from Warkaris who need assistance.
              </p>
            </div>

            <span className="request-count">
              0 requests
            </span>

          </div>


          {/* Empty state for now */}
          <div className="empty-request-state">

            <div className="empty-icon">
              🙏
            </div>

            <h3>No requests right now</h3>

            <p>
              New help requests will appear here automatically.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

