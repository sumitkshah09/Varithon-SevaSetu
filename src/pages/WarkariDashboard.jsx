import { useState } from 'react'

import YatraInformation from './YatraInformation'
import GetHelp from './GetHelp'
import RouteMap from './RouteMap'
import LatestUpdates from './LatestUpdates'
import Profile from './Profile'

import './WarkariDashboard.css'

export default function WarkariDashboard() {
  const [activePage, setActivePage] = useState('Home')

  /* ======================================================
     PAGE NAVIGATION
  ====================================================== */

  if (activePage === 'Yatra') {
    return (
      <YatraInformation
        onBack={() => setActivePage('Home')}
      />
    )
  }

  if (activePage === 'Help') {
    return (
      <GetHelp
        onBack={() => setActivePage('Home')}
      />
    )
  }

  if (activePage === 'RouteMap') {
    return (
      <RouteMap
        onBack={() => setActivePage('Home')}
      />
    )
  }

  if (activePage === 'Updates') {
    return (
      <LatestUpdates
        onBack={() => setActivePage('Home')}
      />
    )
  }

  if (activePage === 'Profile') {
    return (
      <Profile
        onBack={() => setActivePage('Home')}
      />
    )
  }

  /* ======================================================
     DASHBOARD HOME
  ====================================================== */

  return (
    <main className="warkari-dashboard">

      {/* ==================================================
         WELCOME SECTION
      ================================================== */}

      <section className="welcome-section">

        <div className="welcome-content">

          <p className="welcome-small">
            Jai Hari Vitthal 🙏
          </p>

          <h2>
            Welcome, Warkari!
          </h2>

          <p>
            Your journey of seva, devotion and community
            begins here.
          </p>

        </div>

        <div className="welcome-symbol">
          🛕
        </div>

      </section>


      {/* ==================================================
         EMERGENCY / SOS
      ================================================== */}

      <section className="dashboard-section emergency-section">

        <div className="section-heading">

          <div>

            <h2>
              🚨 Emergency Assistance
            </h2>

            <p>
              Get immediate assistance during your Wari journey.
            </p>

          </div>

        </div>


        <div className="emergency-card">

          <div className="emergency-left">

            <div className="emergency-icon">
              🆘
            </div>

            <div>

              <span className="emergency-label">
                EMERGENCY
              </span>

              <h3>
                Need Immediate Help?
              </h3>

              <p>
                Request emergency assistance from available
                Seva Setu support services.
              </p>

            </div>

          </div>


          <button
            type="button"
            className="emergency-button"
            onClick={() => setActivePage('Help')}
          >
            🆘 Get Emergency Help
          </button>

        </div>

      </section>


      {/* ==================================================
         TODAY'S YATRA
      ================================================== */}

      <section className="dashboard-section">

        <div className="section-heading">

          <div>

            <h2>
              Today's Yatra
            </h2>

            <p>
              Keep track of your journey and today's
              important information.
            </p>

          </div>


          <button
            type="button"
            className="text-button"
            onClick={() => setActivePage('Yatra')}
          >
            View Details →
          </button>

        </div>


        <div className="yatra-grid">

          {/* CURRENT LOCATION */}

          <div className="yatra-card">

            <div className="yatra-icon">
              📍
            </div>

            <div className="yatra-content">

              <span className="yatra-label">
                Current Location
              </span>

              <h3>
                Pandharpur
              </h3>

              <span className="yatra-status">
                ● Location updated recently
              </span>

            </div>

          </div>


          {/* NEXT DESTINATION */}

          <div className="yatra-card">

            <div className="yatra-icon">
              🛕
            </div>

            <div className="yatra-content">

              <span className="yatra-label">
                Next Destination
              </span>

              <h3>
                Wari Camp
              </h3>

              <span className="yatra-status">
                Upcoming destination
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ==================================================
         NEED HELP
      ================================================== */}

      <section className="dashboard-section">

        <div className="section-heading">

          <div>

            <h2>
              Need Help?
            </h2>

            <p>
              Get assistance quickly during your Wari journey.
            </p>

          </div>


          <button
            type="button"
            className="text-button"
            onClick={() => setActivePage('Help')}
          >
            View Help →
          </button>

        </div>


        <div className="help-grid">

          {/* MEDICAL */}

          <button
            type="button"
            className="help-card"
            onClick={() => setActivePage('Help')}
          >

            <div className="help-icon">
              🏥
            </div>

            <div className="help-content">

              <h3>
                Medical Help
              </h3>

              <p>
                Find nearby medical assistance.
              </p>

            </div>

            <span>
              →
            </span>

          </button>


          {/* VOLUNTEER */}

          <button
            type="button"
            className="help-card"
            onClick={() => setActivePage('Help')}
          >

            <div className="help-icon">
              🤝
            </div>

            <div className="help-content">

              <h3>
                Volunteer Help
              </h3>

              <p>
                Connect with a nearby volunteer.
              </p>

            </div>

            <span>
              →
            </span>

          </button>


          {/* FOOD & WATER */}

          <button
            type="button"
            className="help-card"
            onClick={() => setActivePage('Help')}
          >

            <div className="help-icon">
              💧
            </div>

            <div className="help-content">

              <h3>
                Food & Water
              </h3>

              <p>
                Find nearby food and water points.
              </p>

            </div>

            <span>
              →
            </span>

          </button>


          {/* FACILITIES */}

          <button
            type="button"
            className="help-card"
            onClick={() => setActivePage('Help')}
          >

            <div className="help-icon">
              🚻
            </div>

            <div className="help-content">

              <h3>
                Nearby Facilities
              </h3>

              <p>
                Find toilets and rest areas nearby.
              </p>

            </div>

            <span>
              →
            </span>

          </button>

        </div>

      </section>


      {/* ==================================================
         BOTTOM NAVIGATION
      ================================================== */}

      <nav className="bottom-navigation">

        {/* HOME */}

        <button
          type="button"
          className={`nav-item ${
            activePage === 'Home' ? 'active' : ''
          }`}
          onClick={() => setActivePage('Home')}
        >

          <span className="nav-icon">
            🏠
          </span>

          <span className="nav-label">
            Home
          </span>

        </button>


        {/* YATRA */}

        <button
          type="button"
          className={`nav-item ${
            activePage === 'Yatra' ? 'active' : ''
          }`}
          onClick={() => setActivePage('Yatra')}
        >

          <span className="nav-icon">
            🛕
          </span>

          <span className="nav-label">
            Yatra
          </span>

        </button>


        {/* UPDATES */}

        <button
          type="button"
          className={`nav-item ${
            activePage === 'Updates' ? 'active' : ''
          }`}
          onClick={() => setActivePage('Updates')}
        >

          <span className="nav-icon">
            📢
          </span>

          <span className="nav-label">
            Updates
          </span>

        </button>


        {/* PROFILE */}

        <button
          type="button"
          className={`nav-item ${
            activePage === 'Profile' ? 'active' : ''
          }`}
          onClick={() => setActivePage('Profile')}
        >

          <span className="nav-icon">
            👤
          </span>

          <span className="nav-label">
            Profile
          </span>

        </button>

      </nav>

    </main>
  )
}

