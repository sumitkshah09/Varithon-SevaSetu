import '../styles/OrganizerDashboard.css';

export default function OrganizerDashboard() {
  return (
    <main className="organizer-dashboard">

      <header className="organizer-dashboard-header">
        <div>
          <h1>Organizer Dashboard</h1>
          <p>Manage your SevaSetu operations from one place.</p>
        </div>

        <div className="organizer-profile">
          <span className="organizer-profile-icon">🏛️</span>
          <div>
            <strong>Organizer</strong>
            <span>SevaSetu</span>
          </div>
        </div>
      </header>


      <section className="organizer-dashboard-content">

        <div className="dashboard-welcome">
          <span>🙏</span>

          <div>
            <h2>Welcome, Organizer</h2>
            <p>
              Coordinate volunteers, manage resources,
              and keep the Wari journey organized.
            </p>
          </div>
        </div>


        <div className="dashboard-cards">

          <div className="dashboard-card">
            <div className="dashboard-card-icon">🤝</div>

            <h3>Volunteers</h3>

            <p>
              View and coordinate volunteers
              participating in SevaSetu.
            </p>

            <button type="button">
              Manage Volunteers →
            </button>
          </div>


          <div className="dashboard-card">
            <div className="dashboard-card-icon">📍</div>

            <h3>Wari Locations</h3>

            <p>
              Manage important locations,
              camps and service points.
            </p>

            <button type="button">
              Manage Locations →
            </button>
          </div>


          <div className="dashboard-card">
            <div className="dashboard-card-icon">📦</div>

            <h3>Resources</h3>

            <p>
              Track essential resources
              and their availability.
            </p>

            <button type="button">
              Manage Resources →
            </button>
          </div>


          <div className="dashboard-card">
            <div className="dashboard-card-icon">📊</div>

            <h3>Overview</h3>

            <p>
              View an overview of your
              ongoing SevaSetu activities.
            </p>

            <button type="button">
              View Overview →
            </button>
          </div>

        </div>

      </section>

    </main>
  );
}