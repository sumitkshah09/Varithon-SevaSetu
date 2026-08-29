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
            onClick={() => setActivePage('Profile')}
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

          <button
  className={`sidebar-nav-item ${
    activePage === 'Donations' ? 'active' : ''
  }`}
  onClick={() => openPage('Donations')}
>
  <span className="sidebar-nav-icon">💰</span>
  <span>Donations</span>
</button>

        </nav>

        <div className="sidebar-bottom">

         <button
  className={`sidebar-nav-item ${
    activePage === 'Profile' ? 'active' : ''
  }`}
  onClick={() => {
    console.log('PROFILE CLICKED')
    setActivePage('Profile')
  }}
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
              {activePage === 'Donations' && 'Donations'}
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
              onClick={() => setActivePage('Profile')}
              aria-label="Profile"
            >
              👤
            </button>

          </div>

        </header>


        {/* ==================================================
            HOME PAGE
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
            VOLUNTEERS PAGE
        ================================================== */}

        {activePage === 'Volunteers' && (

          <div className="organizer-content">


            {/* VOLUNTEER TASKS HEADER */}

            <section className="dashboard-section">

              <div className="section-heading">

                <div>

                  <h2>
                    Volunteer Tasks
                  </h2>

                  <p>
                    Manage and monitor volunteer assignments and activity.
                  </p>

                </div>

              </div>

            </section>


            {/* TASK OVERVIEW */}

            <section className="dashboard-section">

              <div className="section-heading">

                <div>

                  <h2>
                    Task Overview
                  </h2>

                  <p>
                    Get a quick overview of today's volunteer operations.
                  </p>

                </div>

              </div>


              <div className="operations-grid">


                <div className="operation-card">

                  <div className="operation-icon">
                    📋
                  </div>

                  <div className="operation-content">

                    <span className="operation-label">
                      Total Tasks
                    </span>

                    <h3>
                      68
                    </h3>

                    <span className="operation-status">
                      ● Today's tasks
                    </span>

                  </div>

                </div>


                <div className="operation-card">

                  <div className="operation-icon">
                    🟠
                  </div>

                  <div className="operation-content">

                    <span className="operation-label">
                      Pending
                    </span>

                    <h3>
                      08
                    </h3>

                    <span className="operation-status">
                      ● Awaiting assignment
                    </span>

                  </div>

                </div>


                <div className="operation-card">

                  <div className="operation-icon">
                    🔵
                  </div>

                  <div className="operation-content">

                    <span className="operation-label">
                      Assigned
                    </span>

                    <h3>
                      07
                    </h3>

                    <span className="operation-status">
                      ● Volunteers assigned
                    </span>

                  </div>

                </div>


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
                    🟢
                  </div>

                  <div className="operation-content">

                    <span className="operation-label">
                      In Progress
                    </span>

                    <h3>
                      06
                    </h3>

                    <span className="operation-status success">
                      ● Currently running
                    </span>

                  </div>

                </div>


                <div className="operation-card">

                  <div className="operation-icon">
                    ✅
                  </div>

                  <div className="operation-content">

                    <span className="operation-label">
                      Completed
                    </span>

                    <h3>
                      43
                    </h3>

                    <span className="operation-status success">
                      ● Successfully completed
                    </span>

                  </div>

                </div>


              </div>

            </section>


            {/* VOLUNTEER AVAILABILITY */}

            <section className="dashboard-section">

              <div className="section-heading">

                <div>

                  <h2>
                    Volunteer Availability
                  </h2>

                  <p>
                    View the current availability of SevaSetu volunteers.
                  </p>

                </div>

              </div>


              <div className="availability-grid">


                <div className="availability-card available">

                  <div className="availability-icon">
                    🟢
                  </div>

                  <div className="availability-content">

                    <span className="availability-label">
                      Available
                    </span>

                    <h3>
                      82
                    </h3>

                    <span className="availability-status">
                      Ready for tasks
                    </span>

                  </div>

                </div>


                <div className="availability-card busy">

                  <div className="availability-icon">
                    🟠
                  </div>

                  <div className="availability-content">

                    <span className="availability-label">
                      Busy
                    </span>

                    <h3>
                      31
                    </h3>

                    <span className="availability-status">
                      Currently assigned
                    </span>

                  </div>

                </div>


                <div className="availability-card offline">

                  <div className="availability-icon">
                    ⚪
                  </div>

                  <div className="availability-content">

                    <span className="availability-label">
                      Offline
                    </span>

                    <h3>
                      15
                    </h3>

                    <span className="availability-status">
                      Not currently available
                    </span>

                  </div>

                </div>


              </div>

            </section>


            {/* TODAY'S VOLUNTEER TASKS */}

            <section className="dashboard-section">

              <div className="section-heading">

                <div>

                  <h2>
                    Today's Volunteer Tasks
                  </h2>

                  <p>
                    Monitor assignment and completion status.
                  </p>

                </div>

                <button
                  className="text-button"
                  onClick={() => handleComingSoon('All Volunteer Tasks')}
                >
                  View All Tasks →
                </button>

              </div>


              <div className="volunteer-task-list">


                {/* TASK 1 */}

                <div className="volunteer-task-card">

                  <div className="volunteer-task-icon volunteer-icon">
                    💧
                  </div>

                  <div className="volunteer-task-details">

                    <h3>
                      Water Distribution
                    </h3>

                    <p>
                      Support water distribution for Warkaris.
                    </p>

                    <div className="volunteer-task-meta">

                      <span>
                        📍 Alandi Gate
                      </span>

                      <span>
                        🕐 10:00 AM – 2:00 PM
                      </span>

                      <span>
                        👥 4 / 5 Volunteers
                      </span>

                    </div>

                  </div>

                  <div className="volunteer-task-status">

                    <span className="task-status-badge in-progress">
                      In Progress
                    </span>

                    <span className="task-priority high">
                      High Priority
                    </span>

                  </div>

                </div>


                {/* TASK 2 */}

                <div className="volunteer-task-card">

                  <div className="volunteer-task-icon">
                    🏥
                  </div>

                  <div className="volunteer-task-details">

                    <h3>
                      Medical Camp Support
                    </h3>

                    <p>
                      Assist the medical team at the temporary camp.
                    </p>

                    <div className="volunteer-task-meta">

                      <span>
                        📍 Camp Area B
                      </span>

                      <span>
                        🕐 11:00 AM – 4:00 PM
                      </span>

                      <span>
                        👥 3 / 4 Volunteers
                      </span>

                    </div>

                  </div>

                  <div className="volunteer-task-status">

                    <span className="task-status-badge assigned">
                      Assigned
                    </span>

                    <span className="task-priority medium">
                      Medium Priority
                    </span>

                  </div>

                </div>


                {/* TASK 3 */}

                <div className="volunteer-task-card">

                  <div className="volunteer-task-icon">
                    📍
                  </div>

                  <div className="volunteer-task-details">

                    <h3>
                      Route Assistance
                    </h3>

                    <p>
                      Guide Warkaris and help maintain route flow.
                    </p>

                    <div className="volunteer-task-meta">

                      <span>
                        📍 Yatra Route C
                      </span>

                      <span>
                        🕐 12:00 PM – 5:00 PM
                      </span>

                      <span>
                        👥 0 / 3 Volunteers
                      </span>

                    </div>

                  </div>

                  <div className="volunteer-task-status">

                    <span className="task-status-badge pending">
                      Pending
                    </span>

                    <span className="task-priority high">
                      High Priority
                    </span>

                  </div>

                </div>


              </div>

            </section>

          </div>

        )}


        {/* ==================================================
            ALERTS PAGE
        ================================================== */}

        {activePage === 'Alerts' && (

          <div className="organizer-content">


            {/* EMERGENCY REQUESTS HEADER */}

            <section className="dashboard-section">

              <div className="section-heading">

                <div>

                  <h2>
                    Emergency Requests
                  </h2>

                  <p>
                    Monitor urgent requests and coordinate immediate assistance.
                  </p>

                </div>

              </div>

            </section>


            {/* EMERGENCY OVERVIEW */}

            <section className="dashboard-section">

              <div className="section-heading">

                <div>

                  <h2>
                    Emergency Overview
                  </h2>

                  <p>
                    Get a quick overview of current emergency activity.
                  </p>

                </div>

              </div>


              <div className="operations-grid">


                {/* ACTIVE */}

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


                {/* UNASSIGNED */}

                <div className="operation-card">

                  <div className="operation-icon">
                    🟠
                  </div>

                  <div className="operation-content">

                    <span className="operation-label">
                      Unassigned
                    </span>

                    <h3>
                      01
                    </h3>

                    <span className="operation-status">
                      ● Awaiting volunteer
                    </span>

                  </div>

                </div>


                {/* IN PROGRESS */}

                <div className="operation-card">

                  <div className="operation-icon">
                    🔵
                  </div>

                  <div className="operation-content">

                    <span className="operation-label">
                      In Progress
                    </span>

                    <h3>
                      02
                    </h3>

                    <span className="operation-status">
                      ● Assistance underway
                    </span>

                  </div>

                </div>


                {/* RESOLVED */}

                <div className="operation-card">

                  <div className="operation-icon volunteer-icon">
                    ✅
                  </div>

                  <div className="operation-content">

                    <span className="operation-label">
                      Resolved
                    </span>

                    <h3>
                      18
                    </h3>

                    <span className="operation-status success">
                      ● Successfully handled
                    </span>

                  </div>

                </div>


              </div>

            </section>


            {/* ACTIVE EMERGENCY REQUESTS */}

            <section className="dashboard-section">

              <div className="section-heading">

                <div>

                  <h2>
                    Active Emergency Requests
                  </h2>

                  <p>
                    Review urgent requests and coordinate assistance.
                  </p>

                </div>

              </div>


              <div className="emergency-request-list">


                {/* ==================================================
                    EMERGENCY 1
                ================================================== */}

                <div className="emergency-request-card">

                  <div className="emergency-request-main">

                    <div className="emergency-request-icon critical">
                      🚑
                    </div>

                    <div className="emergency-request-details">

                      <div className="emergency-request-title">

                        <h3>
                          Medical Emergency
                        </h3>

                        <span className="emergency-priority critical">
                          Critical
                        </span>

                      </div>

                      <p>
                        Immediate medical assistance required for a Warkari.
                      </p>

                      <div className="emergency-request-meta">

                        <span>
                          📍 Alandi Gate
                        </span>

                        <span>
                          🕐 Reported 5 min ago
                        </span>

                        <span>
                          👤 Volunteer: Unassigned
                        </span>

                      </div>

                    </div>

                  </div>


                  <div className="emergency-request-actions">

                    <button
                      className="secondary-action-button"
                      onClick={() => handleComingSoon('Emergency Details')}
                    >
                      View Details
                    </button>

                    <button
                      className="primary-action-button"
                      onClick={() => handleComingSoon('Assign Volunteer')}
                    >
                      Assign Volunteer
                    </button>

                  </div>

                </div>


                {/* ==================================================
                    EMERGENCY 2
                ================================================== */}

                <div className="emergency-request-card">

                  <div className="emergency-request-main">

                    <div className="emergency-request-icon high">
                      🆘
                    </div>

                    <div className="emergency-request-details">

                      <div className="emergency-request-title">

                        <h3>
                          Lost Warkari
                        </h3>

                        <span className="emergency-priority high">
                          High
                        </span>

                      </div>

                      <p>
                        A Warkari has been separated from their group.
                      </p>

                      <div className="emergency-request-meta">

                        <span>
                          📍 Route B
                        </span>

                        <span>
                          🕐 Reported 12 min ago
                        </span>

                        <span>
                          👤 Volunteer: Rahul
                        </span>

                      </div>

                    </div>

                  </div>


                  <div className="emergency-request-actions">

                    <button
                      className="secondary-action-button"
                      onClick={() => handleComingSoon('Emergency Details')}
                    >
                      View Details
                    </button>

                    <button
                      className="primary-action-button"
                      onClick={() => handleComingSoon('Contact Volunteer')}
                    >
                      Contact Volunteer
                    </button>

                  </div>

                </div>


                {/* ==================================================
                    EMERGENCY 3
                ================================================== */}

                <div className="emergency-request-card">

                  <div className="emergency-request-main">

                    <div className="emergency-request-icon high">
                      💧
                    </div>

                    <div className="emergency-request-details">

                      <div className="emergency-request-title">

                        <h3>
                          Water & Shelter Assistance
                        </h3>

                        <span className="emergency-priority high">
                          High
                        </span>

                      </div>

                      <p>
                        Group of Warkaris requires immediate access to water and shelter.
                      </p>

                      <div className="emergency-request-meta">

                        <span>
                          📍 Camp Area C
                        </span>

                        <span>
                          🕐 Reported 18 min ago
                        </span>

                        <span>
                          👤 Volunteer: Priya
                        </span>

                      </div>

                    </div>

                  </div>


                  <div className="emergency-request-actions">

                    <button
                      className="secondary-action-button"
                      onClick={() => handleComingSoon('Emergency Details')}
                    >
                      View Details
                    </button>

                    <button
                      className="primary-action-button"
                      onClick={() => handleComingSoon('Contact Volunteer')}
                    >
                      Contact Volunteer
                    </button>

                  </div>

                </div>


              </div>

            </section>


            {/* EMERGENCY HISTORY */}

            <section className="dashboard-section">

              <div className="section-heading">

                <div>

                  <h2>
                    Emergency History
                  </h2>

                  <p>
                    Previously resolved emergency requests.
                  </p>

                </div>

                <button
                  className="text-button"
                  onClick={() => handleComingSoon('Emergency History')}
                >
                  View History →
                </button>

              </div>


              <div className="task-summary-card">

                <div className="task-summary-header">

                  <div>

                    <h3>
                      Recently Resolved
                    </h3>

                    <p>
                      Emergency requests successfully handled today.
                    </p>

                  </div>

                  <div className="task-count">
                    18 Resolved
                  </div>

                </div>


                <div className="task-progress">

                  <div className="task-progress-item">
                    <span>🚑 Medical</span>
                    <strong>07</strong>
                  </div>

                  <div className="task-progress-item">
                    <span>🆘 Lost Person</span>
                    <strong>05</strong>
                  </div>

                  <div className="task-progress-item">
                    <span>💧 Assistance</span>
                    <strong>04</strong>
                  </div>

                  <div className="task-progress-item">
                    <span>📍 Other</span>
                    <strong>02</strong>
                  </div>

                </div>

              </div>

            </section>

          </div>

        )}


        {/* ==================================================
            UPDATES PAGE
        ================================================== */}

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

        {activePage === 'Donations' && (

  <div className="organizer-content">

    {/* DONATIONS HEADER */}

    <section className="dashboard-section">

      <div className="section-heading">

        <div>

          <h2>
            Donations & Resources
          </h2>

          <p>
            Track contributions and manage resources for the Wari community.
          </p>

        </div>

      </div>

    </section>


    {/* DONATION OVERVIEW */}

    <section className="dashboard-section">

      <div className="section-heading">

        <div>

          <h2>
            Donation Overview
          </h2>

          <p>
            Current contribution and resource status.
          </p>

        </div>

      </div>


      <div className="operations-grid">

        <div className="operation-card">

          <div className="operation-icon volunteer-icon">
            💰
          </div>

          <div className="operation-content">

            <span className="operation-label">
              Total Donations
            </span>

            <h3>
              ₹2,48,500
            </h3>

            <span className="operation-status success">
              ● Received
            </span>

          </div>

        </div>


        <div className="operation-card">

          <div className="operation-icon">
            📅
          </div>

          <div className="operation-content">

            <span className="operation-label">
              Today's Donations
            </span>

            <h3>
              ₹18,750
            </h3>

            <span className="operation-status success">
              ● Received today
            </span>

          </div>

        </div>


        <div className="operation-card">

          <div className="operation-icon">
            📦
          </div>

          <div className="operation-content">

            <span className="operation-label">
              In-Kind Donations
            </span>

            <h3>
              36
            </h3>

            <span className="operation-status">
              ● Resource contributions
            </span>

          </div>

        </div>


        <div className="operation-card">

          <div className="operation-icon emergency-operation-icon">
            ⏳
          </div>

          <div className="operation-content">

            <span className="operation-label">
              Pending Requests
            </span>

            <h3>
              07
            </h3>

            <span className="operation-status danger">
              ● Awaiting fulfillment
            </span>

          </div>

        </div>

      </div>

    </section>


    {/* RESOURCE NEEDS */}

    <section className="dashboard-section">

      <div className="section-heading">

        <div>

          <h2>
            Current Resource Needs
          </h2>

          <p>
            Resources currently required at SevaSetu locations.
          </p>

        </div>

      </div>


      <div className="volunteer-task-list">

        <div className="volunteer-task-card">

          <div className="volunteer-task-icon volunteer-icon">
            💧
          </div>

          <div className="volunteer-task-details">

            <h3>
              Drinking Water
            </h3>

            <p>
              Additional water supplies required for Warkaris.
            </p>

            <div className="volunteer-task-meta">

              <span>
                📍 Camp Area C
              </span>

              <span>
                📦 500 bottles needed
              </span>

            </div>

          </div>

          <div className="volunteer-task-status">

            <span className="task-status-badge pending">
              High Need
            </span>

          </div>

        </div>


        <div className="volunteer-task-card">

          <div className="volunteer-task-icon">
            🍱
          </div>

          <div className="volunteer-task-details">

            <h3>
              Food Packets
            </h3>

            <p>
              Food packets required for distribution camps.
            </p>

            <div className="volunteer-task-meta">

              <span>
                📍 Alandi Gate
              </span>

              <span>
                📦 300 packets needed
              </span>

            </div>

          </div>

          <div className="volunteer-task-status">

            <span className="task-status-badge assigned">
              In Demand
            </span>

          </div>

        </div>


        <div className="volunteer-task-card">

          <div className="volunteer-task-icon">
            🏥
          </div>

          <div className="volunteer-task-details">

            <h3>
              Medical Supplies
            </h3>

            <p>
              Basic first-aid and medical supplies required.
            </p>

            <div className="volunteer-task-meta">

              <span>
                📍 Medical Camp B
              </span>

              <span>
                📦 45 kits needed
              </span>

            </div>

          </div>

          <div className="volunteer-task-status">

            <span className="task-status-badge in-progress">
              Required
            </span>

          </div>

        </div>

      </div>

    </section>


    {/* RECENT DONATIONS */}

    <section className="dashboard-section">

      <div className="section-heading">

        <div>

          <h2>
            Recent Donations
          </h2>

          <p>
            Latest contributions received by SevaSetu.
          </p>

        </div>

      </div>


      <div className="task-summary-card">

        <div className="task-progress">

          <div className="task-progress-item">
            <span>🙏 Anonymous Donor</span>
            <strong>₹5,000</strong>
          </div>

          <div className="task-progress-item">
            <span>🏢 Local Organization</span>
            <strong>₹25,000</strong>
          </div>

          <div className="task-progress-item">
            <span>👤 Warkari Supporter</span>
            <strong>₹2,500</strong>
          </div>

          <div className="task-progress-item">
            <span>📦 Community Group</span>
            <strong>Water Supplies</strong>
          </div>

        </div>

      </div>

    </section>

  </div>

)}


        {/* ==================================================
            PROFILE PAGE
        ================================================== */}

        {/* ==================================================
    PROFILE PAGE
================================================== */}

{activePage === 'Profile' && (

  <div className="organizer-content">

    {/* PROFILE HEADER */}

    <section className="dashboard-section">

      <div className="section-heading">

        <div>

          <p className="profile-label">
            SEVASETU ORGANIZER
          </p>

          <h2>
            Organizer Profile
          </h2>

          <p>
            Manage your organizer information and SevaSetu account.
          </p>

        </div>

      </div>

    </section>


    {/* PROFILE CARD */}

    <section className="organizer-profile-card">

      <div className="organizer-profile-main">

        <div className="organizer-large-avatar">
          O
        </div>

        <div className="organizer-profile-info">

          <h2>
            Organizer
          </h2>

          <p>
            Organizer ID: <strong>ORG-001</strong>
          </p>

          <span className="organizer-role-badge">
            SevaSetu Organizer
          </span>

        </div>

      </div>


      <div className="organizer-account-status">

        <span className="account-status-dot"></span>

        <div>
          <span>ACCOUNT STATUS</span>

          <strong>
            Active
          </strong>
        </div>

      </div>

    </section>


    {/* INFORMATION GRID */}

    <div className="organizer-profile-grid">


      {/* PERSONAL INFORMATION */}

      <section className="dashboard-section profile-info-section">

        <div className="section-heading">

          <div>

            <h2>
              Organizer Information
            </h2>

            <p>
              Your basic organizer account details.
            </p>

          </div>

        </div>


        <div className="profile-details-list">

          <div className="profile-detail-item">

            <span>
              Full Name
            </span>

            <strong>
              Organizer
            </strong>

          </div>


          <div className="profile-detail-item">

            <span>
              Organizer ID
            </span>

            <strong>
              ORG-001
            </strong>

          </div>


          <div className="profile-detail-item">

            <span>
              Organization
            </span>

            <strong>
              SevaSetu
            </strong>

          </div>


          <div className="profile-detail-item">

            <span>
              Role
            </span>

            <strong>
              Event Organizer
            </strong>

          </div>

        </div>

      </section>


      {/* CONTACT INFORMATION */}

      <section className="dashboard-section profile-info-section">

        <div className="section-heading">

          <div>

            <h2>
              Contact Information
            </h2>

            <p>
              Contact details associated with your account.
            </p>

          </div>

        </div>


        <div className="profile-details-list">

          <div className="profile-detail-item">

            <span>
              Email
            </span>

            <strong>
              organizer@sevasetu.org
            </strong>

          </div>


          <div className="profile-detail-item">

            <span>
              Phone
            </span>

            <strong>
              +91 98765 43210
            </strong>

          </div>


          <div className="profile-detail-item">

            <span>
              Location
            </span>

            <strong>
              Wari Operations Center
            </strong>

          </div>


          <div className="profile-detail-item">

            <span>
              Account Type
            </span>

            <strong>
              Organizer
            </strong>

          </div>

        </div>

      </section>

    </div>


    {/* ORGANIZER RESPONSIBILITIES */}

    <section className="dashboard-section">

      <div className="section-heading">

        <div>

          <h2>
            Organizer Responsibilities
          </h2>

          <p>
            Key operations managed through your SevaSetu account.
          </p>

        </div>

      </div>


      <div className="responsibility-grid">

        <div className="responsibility-card">

          <div className="responsibility-icon">
            🤝
          </div>

          <div>

            <h3>
              Volunteer Coordination
            </h3>

            <p>
              Assign volunteers and monitor their task progress.
            </p>

          </div>

        </div>


        <div className="responsibility-card">

          <div className="responsibility-icon">
            🚨
          </div>

          <div>

            <h3>
              Emergency Management
            </h3>

            <p>
              Monitor emergency requests and coordinate immediate assistance.
            </p>

          </div>

        </div>


        <div className="responsibility-card">

          <div className="responsibility-icon">
            📢
          </div>

          <div>

            <h3>
              Announcements
            </h3>

            <p>
              Publish important updates for the Wari community.
            </p>

          </div>

        </div>


        <div className="responsibility-card">

          <div className="responsibility-icon">
            📦
          </div>

          <div>

            <h3>
              Resource Management
            </h3>

            <p>
              Monitor donations and resource requirements.
            </p>

          </div>

        </div>

      </div>

    </section>


    {/* ACTIVITY STATISTICS */}

    <section className="dashboard-section">

      <div className="section-heading">

        <div>

          <h2>
            Organizer Activity
          </h2>

          <p>
            Your contribution to SevaSetu operations.
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
              Volunteers Coordinated
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
              Tasks Managed
            </span>

            <h3>
              68
            </h3>

            <span className="operation-status">
              ● Today's operations
            </span>

          </div>

        </div>


        <div className="operation-card">

          <div className="operation-icon emergency-operation-icon">
            🚨
          </div>

          <div className="operation-content">

            <span className="operation-label">
              Emergencies Handled
            </span>

            <h3>
              18
            </h3>

            <span className="operation-status success">
              ● Successfully resolved
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
              ● Community assistance
            </span>

          </div>

        </div>

      </div>

    </section>


    {/* ACCOUNT ACTIONS */}

    <section className="dashboard-section profile-actions-section">

      <div className="profile-actions">

        <button
          className="profile-edit-button"
          onClick={() => handleComingSoon('Edit Profile')}
        >
          ✏️ Edit Profile
        </button>

        <button
          className="profile-logout-button"
          onClick={() => handleComingSoon('Logout')}
        >
          🚪 Logout
        </button>

      </div>

    </section>

  </div>

)}

      </div>

    </main>
  )
}