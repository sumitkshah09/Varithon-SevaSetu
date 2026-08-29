import { useState } from 'react'
import '../styles/OrganizerDashboard.css'

export default function OrganizerDashboard() {
  const [activePage, setActivePage] = useState('Home')

  const handleComingSoon = (name) => {
    alert(`${name} page will be connected next.`)
  }

  const openPage = (name) => {
    setActivePage(name)
  }

  return (
    <main className="organizer-dashboard">

      {/* ==================================================
          SIDE NAVIGATION
      ================================================== */}

      <aside className="organizer-sidebar">

        <div className="sidebar-brand">

          <div className="sidebar-brand-icon">
            🙏
          </div>

          <div>
            <h1>Seva Setu</h1>
            <p>Organizer Panel</p>
          </div>

        </div>


        <div className="sidebar-divider" />


        <nav className="sidebar-navigation">

          <button
            className={`sidebar-nav-item ${
              activePage === 'Home' ? 'active' : ''
            }`}
            onClick={() => setActivePage('Home')}
          >
            <span className="sidebar-nav-icon">🏠</span>
            <span>Home</span>
          </button>


          <button
            className={`sidebar-nav-item ${
              activePage === 'Volunteers' ? 'active' : ''
            }`}
            onClick={() => openPage('Volunteers')}
          >
            <span className="sidebar-nav-icon">🤝</span>
            <span>Volunteer</span>
          </button>


          <button
            className={`sidebar-nav-item ${
              activePage === 'Alerts' ? 'active' : ''
            }`}
            onClick={() => openPage('Alerts')}
          >
            <span className="sidebar-nav-icon">🚨</span>
            <span>Alerts</span>

            <span className="sidebar-badge">
              3
            </span>
          </button>


          <button
            className={`sidebar-nav-item ${
              activePage === 'Updates' ? 'active' : ''
            }`}
            onClick={() => openPage('Updates')}
          >
            <span className="sidebar-nav-icon">📢</span>
            <span>Updates</span>
          </button>

        </nav>


        <div className="sidebar-bottom">

          <button
            className={`sidebar-nav-item ${
              activePage === 'Profile' ? 'active' : ''
            }`}
            onClick={() => handleComingSoon('Profile')}
          >
            <span className="sidebar-nav-icon">👤</span>
            <span>Profile</span>
          </button>


          <div className="sidebar-footer">

            <span className="sidebar-footer-icon">
              🏛️
            </span>

            <div>
              <strong>Organizer</strong>
              <span>SevaSetu</span>
            </div>

          </div>

        </div>

      </aside>


      {/* ==================================================
          MAIN AREA
      ================================================== */}

      <div className="organizer-main">


        {/* ==================================================
            HEADER
        ================================================== */}

        <header className="dashboard-header">

          <div className="header-page-title">

            <p>
              SEVASETU ORGANIZER
            </p>

            <h1>
              {activePage === 'Home' && 'Dashboard'}
              {activePage === 'Volunteers' && 'Volunteer'}
              {activePage === 'Alerts' && 'Alerts'}
              {activePage === 'Updates' && 'Updates'}
              {activePage === 'Profile' && 'Profile'}
            </h1>

          </div>


          <div className="header-actions">

            <button
              className="header-button"
              onClick={() => handleComingSoon('Notifications')}
              aria-label="Notifications"
            >
              🔔
            </button>


            <button
              className="header-button"
              onClick={() => handleComingSoon('Profile')}
              aria-label="Profile"
            >
              👤
            </button>

          </div>

        </header>


        {/* ==================================================
            PAGE CONTENT
        ================================================== */}

        {activePage === 'Home' && (

          <div className="organizer-content">


            {/* WELCOME */}

            <section className="welcome-section">

              <div className="welcome-content">

                <p className="welcome-small">
                  Jai Hari Vitthal 🙏
                </p>

                <h2>
                  Welcome, Organizer!
                </h2>

                <p>
                  Coordinate volunteers, monitor the Wari journey,
                  manage resources and keep every SevaSetu operation
                  running smoothly.
                </p>

              </div>

              <div className="welcome-symbol">
                🏛️
              </div>

            </section>


            {/* QUICK ACTIONS */}

            <section className="dashboard-section">

              <div className="section-heading">

                <div>

                  <h2>
                    Quick Actions
                  </h2>

                  <p>
                    Manage the most important operations from here.
                  </p>

                </div>

              </div>


              <div className="quick-actions-grid">


                <button
                  className="action-card"
                  onClick={() => openPage('Volunteers')}
                >

                  <div className="action-icon volunteer-icon">
                    🤝
                  </div>

                  <h3>
                    Volunteer Tasks
                  </h3>

                  <p>
                    Create, assign and monitor tasks
                    handled by SevaSetu volunteers.
                  </p>

                  <span>
                    View All Tasks →
                  </span>

                </button>


                <button
                  className="action-card"
                  onClick={() => openPage('Alerts')}
                >

                  <div className="action-icon emergency-action-icon">
                    🚨
                  </div>

                  <h3>
                    Emergency Requests
                  </h3>

                  <p>
                    Monitor urgent requests and coordinate
                    immediate assistance.
                  </p>

                  <span>
                    Manage Requests →
                  </span>

                </button>


                <button
                  className="action-card"
                  onClick={() => handleComingSoon('Yatra Monitoring')}
                >

                  <div className="action-icon">
                    📍
                  </div>

                  <h3>
                    Yatra Monitoring
                  </h3>

                  <p>
                    Monitor routes, camps, facilities and
                    important locations.
                  </p>

                  <span>
                    Monitor Yatra →
                  </span>

                </button>


                <button
                  className="action-card"
                  onClick={() => openPage('Updates')}
                >

                  <div className="action-icon">
                    📢
                  </div>

                  <h3>
                    Announcements
                  </h3>

                  <p>
                    Publish important updates and
                    instructions for the Wari community.
                  </p>

                  <span>
                    Manage Updates →
                  </span>

                </button>

              </div>

            </section>


            {/* OPERATIONS */}

            <section className="dashboard-section">

              <div className="section-heading">

                <div>

                  <h2>
                    Today's Operations
                  </h2>

                  <p>
                    A quick overview of current SevaSetu activity.
                  </p>

                </div>

              </div>


              <div className="operations-grid">


                <div className="operation-card">

                  <div className="operation-icon volunteer-icon">
                    🤝
                  </div>

                  <div className="operation-content">

                    <span className="operation-label">
                      Active Volunteers
                    </span>

                    <h3>
                      128
                    </h3>

                    <span className="operation-status success">
                      ● Currently active
                    </span>

                  </div>

                </div>


                <div className="operation-card">

                  <div className="operation-icon">
                    📋
                  </div>

                  <div className="operation-content">

                    <span className="operation-label">
                      Open Tasks
                    </span>

                    <h3>
                      24
                    </h3>

                    <span className="operation-status">
                      ● Awaiting action
                    </span>

                  </div>

                </div>


                <div className="operation-card">

                  <div className="operation-icon emergency-operation-icon">
                    🚨
                  </div>

                  <div className="operation-content">

                    <span className="operation-label">
                      Active Emergencies
                    </span>

                    <h3>
                      03
                    </h3>

                    <span className="operation-status danger">
                      ● Requires attention
                    </span>

                  </div>

                </div>


                <div className="operation-card">

                  <div className="operation-icon">
                    ❤️
                  </div>

                  <div className="operation-content">

                    <span className="operation-label">
                      People Assisted
                    </span>

                    <h3>
                      1,284
                    </h3>

                    <span className="operation-status success">
                      ● Today's assistance
                    </span>

                  </div>

                </div>

              </div>

            </section>


            {/* VOLUNTEER OPERATIONS */}

            <section className="dashboard-section">

              <div className="section-heading">

                <div>

                  <h2>
                    Volunteer Operations
                  </h2>

                  <p>
                    Keep track of volunteer activity and task progress.
                  </p>

                </div>

                <button
                  className="text-button"
                  onClick={() => openPage('Volunteers')}
                >
                  View All Tasks →
                </button>

              </div>


              <div className="task-summary-card">

                <div className="task-summary-header">

                  <div>

                    <h3>
                      Today's Volunteer Tasks
                    </h3>

                    <p>
                      Monitor assignment and completion status.
                    </p>

                  </div>

                  <div className="task-count">
                    24 Open
                  </div>

                </div>


                <div className="task-progress">

                  <div className="task-progress-item">
                    <span>🟠 Pending</span>
                    <strong>08</strong>
                  </div>

                  <div className="task-progress-item">
                    <span>🔵 Assigned</span>
                    <strong>07</strong>
                  </div>

                  <div className="task-progress-item">
                    <span>🟢 In Progress</span>
                    <strong>06</strong>
                  </div>

                  <div className="task-progress-item">
                    <span>✅ Completed</span>
                    <strong>43</strong>
                  </div>

                </div>

              </div>

            </section>


            {/* EMERGENCY */}

            <section className="dashboard-section">

              <div className="section-heading">

                <div>

                  <h2>
                    Emergency & Help
                  </h2>

                  <p>
                    Quickly respond to people who need assistance.
                  </p>

                </div>

              </div>


              <div className="emergency-card">

                <div className="emergency-left">

                  <div className="emergency-icon">
                    🚨
                  </div>

                  <div>

                    <h3>
                      3 Active Emergency Requests
                    </h3>

                    <p>
                      Immediate attention is required for
                      requests currently awaiting organizer action.
                    </p>

                  </div>

                </div>


                <button
                  className="emergency-button"
                  onClick={() => openPage('Alerts')}
                >
                  View Emergency Requests
                </button>

              </div>

            </section>


            {/* FOOTER */}

            <section className="dashboard-footer">

              <div className="footer-symbol">
                🙏
              </div>

              <h3>
                Jai Hari Vitthal
              </h3>

              <p>
                Seva • Coordination • Samaj
              </p>

            </section>

          </div>

        )}


        {/* ==================================================
            OTHER PAGES
        ================================================== */}

        {activePage === 'Volunteers' && (
          <section className="organizer-placeholder">
            <div className="placeholder-icon">
              🤝
            </div>

            <p>
              SEVASETU ORGANIZER
            </p>

            <h2>
              Volunteer Tasks
            </h2>

            <span>
              All volunteer tasks will appear here.
            </span>
          </section>
        )}


        {activePage === 'Alerts' && (
          <section className="organizer-placeholder">
            <div className="placeholder-icon">
              🚨
            </div>

            <p>
              SEVASETU ORGANIZER
            </p>

            <h2>
              Emergency Alerts
            </h2>

            <span>
              Emergency requests will appear here.
            </span>
          </section>
        )}


        {activePage === 'Updates' && (
          <section className="organizer-placeholder">
            <div className="placeholder-icon">
              📢
            </div>

            <p>
              SEVASETU ORGANIZER
            </p>

            <h2>
              Updates & Announcements
            </h2>

            <span>
              Organizer announcements will appear here.
            </span>
          </section>
        )}


        {activePage === 'Profile' && (
          <section className="organizer-placeholder">
            <div className="placeholder-icon">
              👤
            </div>

            <p>
              SEVASETU ORGANIZER
            </p>

            <h2>
              Organizer Profile
            </h2>

            <span>
              Profile settings will appear here.
            </span>
          </section>
        )}

      </div>

    </main>
  )
}