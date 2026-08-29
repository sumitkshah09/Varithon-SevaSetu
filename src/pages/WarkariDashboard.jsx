
import { useState } from 'react'
import { useLanguage } from '../language/languageContext'
import { translations } from "../language/translations";

import YatraInformation from './YatraInformation'
import GetHelp from './GetHelp'
import RouteMap from './RouteMap'
import Profile from './Profile'

import './WarkariDashboard.css'

export default function WarkariDashboard() {
  const [activePage, setActivePage] = useState('Home')

  // LANGUAGE
  const { language } = useLanguage()
  const t = translations[language].warkariDashboard

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
            {t.welcomeSmall}
          </p>

          <h2>
            {t.welcome}
          </h2>

          <p>
            {t.welcomeText}
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
              {t.emergencyTitle}
            </h2>

            <p>
              {t.emergencyText}
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
                {t.emergencyLabel}
              </span>

              <h3>
                {t.emergencyHelp}
              </h3>

              <p>
                {t.emergencyDescription}
              </p>

            </div>

          </div>


          <button
            type="button"
            className="emergency-button"
            onClick={() => setActivePage('Help')}
          >
            {t.emergencyButton}
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
              {t.todaysYatra}
            </h2>

            <p>
              {t.todaysYatraText}
            </p>

          </div>


          <button
            type="button"
            className="text-button"
            onClick={() => setActivePage('Yatra')}
          >
            {t.viewDetails}
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
                {t.currentLocation}
              </span>

              <h3>
                {t.location}
              </h3>

              <span className="yatra-status">
                {t.locationUpdated}
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
                {t.nextDestination}
              </span>

              <h3>
                {t.wariCamp}
              </h3>

              <span className="yatra-status">
                {t.upcomingDestination}
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
              {t.needHelp}
            </h2>

            <p>
              {t.needHelpText}
            </p>

          </div>


          <button
            type="button"
            className="text-button"
            onClick={() => setActivePage('Help')}
          >
            {t.viewHelp}
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
                {t.medicalHelp}
              </h3>

              <p>
                {t.medicalDescription}
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
                {t.volunteerHelp}
              </h3>

              <p>
                {t.volunteerDescription}
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
                {t.foodWater}
              </h3>

              <p>
                {t.foodWaterDescription}
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
                {t.nearbyFacilities}
              </h3>

              <p>
                {t.nearbyFacilitiesDescription}
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
            {t.home}
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
            {t.yatra}
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
            {t.profile}
          </span>

        </button>

      </nav>

    </main>
  )
}

