import { useState } from 'react'
import './GetHelp.css'

export default function GetHelp({ onBack }) {
  const [showEmergency, setShowEmergency] = useState(false)
  const [requestSent, setRequestSent] = useState(false)

  const handleEmergency = () => {
    setRequestSent(false)
    setShowEmergency(true)
  }

  const handleRequestHelp = () => {
    setRequestSent(true)
  }

  const handleClose = () => {
    setShowEmergency(false)
    setRequestSent(false)
  }

  const handleNormalHelp = (type) => {
    alert(`${type} request feature will be connected soon.`)
  }

  return (
    <main className="get-help-page">

      {/* ================= HEADER ================= */}

      <header className="get-help-header">

        <button
          className="get-help-back-button"
          onClick={onBack}
        >
          ←
        </button>

        <div className="get-help-header-title">

          <div className="get-help-header-icon">
            🤝
          </div>

          <div>
            <h1>Get Help</h1>
            <p>Support for your Wari journey</p>
          </div>

        </div>

      </header>


      {/* ================= CONTENT ================= */}

      <div className="get-help-container">

        {/* WELCOME */}

        <section className="help-welcome">

          <div className="help-welcome-icon">
            🙏
          </div>

          <div>

            <span>
              SEVA SETU SUPPORT
            </span>

            <h2>
              How can we help you?
            </h2>

            <p>
              Find assistance quickly and stay safe during
              your Wari journey.
            </p>

          </div>

        </section>


        {/* ================= EMERGENCY ================= */}

        <section className="emergency-help-card">

          <div className="emergency-help-left">

            <div className="emergency-help-icon">
              🆘
            </div>

            <div>

              <span className="emergency-label">
                EMERGENCY
              </span>

              <h2>
                Need Immediate Help?
              </h2>

              <p>
                If you are facing an emergency, request
                immediate assistance from the support team.
              </p>

            </div>

          </div>


          <button
            className="emergency-help-button"
            onClick={handleEmergency}
          >
            🆘 Get Emergency Help
          </button>

        </section>


        {/* ================= HELP OPTIONS ================= */}

        <section className="help-options-section">

          <div className="help-section-heading">

            <h2>
              Find Assistance
            </h2>

            <p>
              Choose the type of help you need.
            </p>

          </div>


          <div className="help-options-grid">


            {/* MEDICAL */}

            <button
              className="help-option-card"
              onClick={() => handleNormalHelp('Medical Help')}
            >

              <div className="help-option-icon">
                🏥
              </div>

              <div className="help-option-content">

                <h3>
                  Medical Help
                </h3>

                <p>
                  Find medical assistance and nearby
                  health facilities.
                </p>

              </div>

              <span className="help-option-arrow">
                →
              </span>

            </button>


            {/* VOLUNTEER */}

            <button
              className="help-option-card"
              onClick={() => handleNormalHelp('Volunteer Help')}
            >

              <div className="help-option-icon">
                🤝
              </div>

              <div className="help-option-content">

                <h3>
                  Volunteer Help
                </h3>

                <p>
                  Connect with a nearby Seva Setu volunteer.
                </p>

              </div>

              <span className="help-option-arrow">
                →
              </span>

            </button>


            {/* FOOD */}

            <button
              className="help-option-card"
              onClick={() => handleNormalHelp('Food & Water')}
            >

              <div className="help-option-icon">
                🍲
              </div>

              <div className="help-option-content">

                <h3>
                  Food & Water
                </h3>

                <p>
                  Locate nearby food and drinking water
                  points.
                </p>

              </div>

              <span className="help-option-arrow">
                →
              </span>

            </button>


            {/* REST */}

            <button
              className="help-option-card"
              onClick={() => handleNormalHelp('Rest Areas')}
            >

              <div className="help-option-icon">
                🏕️
              </div>

              <div className="help-option-content">

                <h3>
                  Rest Areas
                </h3>

                <p>
                  Find Wari camps and nearby resting places.
                </p>

              </div>

              <span className="help-option-arrow">
                →
              </span>

            </button>


            {/* TOILETS */}

            <button
              className="help-option-card"
              onClick={() => handleNormalHelp('Toilets')}
            >

              <div className="help-option-icon">
                🚻
              </div>

              <div className="help-option-content">

                <h3>
                  Toilets
                </h3>

                <p>
                  Find nearby toilet and sanitation facilities.
                </p>

              </div>

              <span className="help-option-arrow">
                →
              </span>

            </button>


            {/* LOST & FOUND */}

            <button
              className="help-option-card"
              onClick={() => handleNormalHelp('Lost & Found')}
            >

              <div className="help-option-icon">
                🔎
              </div>

              <div className="help-option-content">

                <h3>
                  Lost & Found
                </h3>

                <p>
                  Get help with lost belongings or people.
                </p>

              </div>

              <span className="help-option-arrow">
                →
              </span>

            </button>

          </div>

        </section>


        {/* ================= LOCATION ================= */}

        <section className="current-location-help">

          <div className="location-help-icon">
            📍
          </div>

          <div className="location-help-content">

            <span>
              YOUR CURRENT LOCATION
            </span>

            <h2>
              Pandharpur
            </h2>

            <p>
              Your location helps volunteers provide
              assistance nearby.
            </p>

          </div>

          <span className="location-help-status">
            ● Live
          </span>

        </section>


        {/* ================= VOLUNTEER ================= */}

        <section className="volunteer-notice">

          <div className="volunteer-notice-icon">
            💙
          </div>

          <div>

            <h3>
              Seva Setu Volunteers
            </h3>

            <p>
              Our volunteers are here to support Warkaris.
              If you need assistance, don't hesitate to ask.
            </p>

          </div>

        </section>


        {/* ================= SAFETY ================= */}

        <section className="help-safety-card">

          <div className="help-safety-icon">
            ⚠️
          </div>

          <div>

            <h3>
              Stay Safe
            </h3>

            <p>
              In a serious emergency, contact the appropriate
              emergency services immediately.
            </p>

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <footer className="get-help-footer">

          <div className="get-help-footer-icon">
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


      {/* ==================================================
          EMERGENCY MODAL
      ================================================== */}

      {showEmergency && (

        <div className="emergency-modal-overlay">

          <div className="emergency-modal">

            {!requestSent ? (

              /* ================= CONFIRMATION ================= */

              <>

                <div className="emergency-modal-icon">
                  🆘
                </div>

                <h2>
                  Emergency Assistance
                </h2>

                <p>
                  Are you sure you need immediate emergency
                  assistance?
                </p>

                <p className="emergency-modal-note">
                  Your request will be sent to available
                  Seva Setu support volunteers.
                </p>


                <div className="emergency-modal-actions">

                  <button
                    type="button"
                    className="emergency-cancel-button"
                    onClick={handleClose}
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="emergency-confirm-button"
                    onClick={handleRequestHelp}
                  >
                    Yes, Request Help
                  </button>

                </div>

              </>

            ) : (

              /* ================= SUCCESS ================= */

              <div className="emergency-success">

                <div className="emergency-success-icon">
                  ✓
                </div>

                <h2>
                  Help Request Sent
                </h2>

                <p className="success-main-text">
                  Your emergency assistance request has
                  been successfully registered.
                </p>

                <div className="request-status-box">

                  <span>
                    REQUEST STATUS
                  </span>

                  <strong>
                    🟢 Volunteers are being notified
                  </strong>

                  <p>
                    Please stay at your current location
                    and keep your phone available.
                  </p>

                </div>

                <button
                  type="button"
                  className="emergency-close-button"
                  onClick={handleClose}
                >
                  Done
                </button>

              </div>

            )}

          </div>

        </div>

      )}

    </main>
  )
}