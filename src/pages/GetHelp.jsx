import { useState } from 'react'
import './GetHelp.css'

export default function GetHelp({ onBack }) {

  /* ======================================================
     SOS POPUP
  ====================================================== */

  const [showEmergency, setShowEmergency] = useState(true)

  const [selectedAssistance, setSelectedAssistance] = useState(null)
  const [requestSent, setRequestSent] = useState(false)


  /* ======================================================
     EMERGENCY OPTIONS
  ====================================================== */

  const emergencyOptions = [
    {
      id: 'medical',
      icon: '🏥',
      title: 'Medical Assistance',
      description:
        'Get immediate medical support from nearby services.'
    },
    {
      id: 'food',
      icon: '🍲',
      title: 'Food Assistance',
      description:
        'Get help finding food and meal distribution points.'
    },
    {
      id: 'water',
      icon: '💧',
      title: 'Water Assistance',
      description:
        'Get help finding clean drinking water nearby.'
    },
    {
      id: 'navigation',
      icon: '🧭',
      title: 'Navigation Assistance',
      description:
        'Get help with directions and finding your route.'
    },
    {
      id: 'shelter',
      icon: '🏕️',
      title: 'Shelter Assistance',
      description:
        'Find nearby camps, rest areas and shelter facilities.'
    }
  ]


  /* ======================================================
     OPEN EMERGENCY
  ====================================================== */

  const handleEmergency = () => {
    setSelectedAssistance(null)
    setRequestSent(false)
    setShowEmergency(true)
  }


  /* ======================================================
     SELECT ASSISTANCE
  ====================================================== */

  const handleSelectAssistance = (option) => {
    setSelectedAssistance(option)
    setRequestSent(false)
  }


  /* ======================================================
     REQUEST HELP
  ====================================================== */

  const handleRequestHelp = () => {

    if (!selectedAssistance) {
      return
    }

    setRequestSent(true)
  }


  /* ======================================================
     CLOSE EMERGENCY
  ====================================================== */

  const handleClose = () => {

    setShowEmergency(false)
    setSelectedAssistance(null)
    setRequestSent(false)
  }


  /* ======================================================
     NORMAL HELP OPTIONS
  ====================================================== */

  const handleNormalHelp = (type) => {
    alert(`${type} request feature will be connected soon.`)
  }


  return (
    <main className="get-help-page">


      {/* ==================================================
         HEADER
      ================================================== */}

      <header className="get-help-header">

        <button
          type="button"
          className="get-help-back-button"
          onClick={onBack}
          aria-label="Go back"
        >
          ←
        </button>


        <div className="get-help-header-title">

          <div className="get-help-header-icon">
            🤝
          </div>

          <div>

            <h1>
              Get Help
            </h1>

            <p>
              Support for your Wari journey
            </p>

          </div>

        </div>

      </header>


      {/* ==================================================
         CONTENT
      ================================================== */}

      <div className="get-help-container">


        {/* ==================================================
           EMERGENCY CARD
        ================================================== */}

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
            type="button"
            className="emergency-help-button"
            onClick={handleEmergency}
          >
            🆘 Get Emergency Help
          </button>

        </section>


        {/* ==================================================
           HELP OPTIONS
        ================================================== */}

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
              type="button"
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
              type="button"
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


            {/* FOOD & WATER */}

            <button
              type="button"
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


            {/* REST AREAS */}

            <button
              type="button"
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
              type="button"
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
              type="button"
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


        {/* ==================================================
           FOOTER
        ================================================== */}

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


            {/* ==================================================
               STEP 1 — SELECT ASSISTANCE
            ================================================== */}

            {!selectedAssistance ? (

              <>

                <div className="emergency-modal-icon">
                  🆘
                </div>

                <h2>
                  What assistance do you need?
                </h2>

                <p>
                  Select the type of emergency assistance
                  you need.
                </p>


                <div className="emergency-options">

                  {emergencyOptions.map((option) => (

                    <button
                      type="button"
                      key={option.id}
                      className="emergency-option"
                      onClick={() => handleSelectAssistance(option)}
                    >

                      <div className="emergency-option-icon">
                        {option.icon}
                      </div>


                      <div className="emergency-option-content">

                        <h3>
                          {option.title}
                        </h3>

                        <p>
                          {option.description}
                        </p>

                      </div>


                      <span className="emergency-option-arrow">
                        →
                      </span>

                    </button>

                  ))}

                </div>


                <button
                  type="button"
                  className="emergency-cancel-button"
                  onClick={handleClose}
                >
                  Cancel
                </button>

              </>

            ) : !requestSent ? (


              /* ==================================================
                 STEP 2 — CONFIRMATION
              ================================================== */

              <>

                <div className="emergency-modal-icon">
                  {selectedAssistance.icon}
                </div>


                <span className="emergency-label">
                  EMERGENCY ASSISTANCE
                </span>


                <h2>
                  {selectedAssistance.title}
                </h2>


                <p>
                  You are requesting immediate help for:
                </p>


                <div className="selected-assistance-box">

                  <span>
                    {selectedAssistance.icon}
                  </span>

                  <strong>
                    {selectedAssistance.title}
                  </strong>

                </div>


                <p className="emergency-modal-note">
                  Your request will be sent to available
                  Seva Setu support volunteers.
                </p>


                <div className="emergency-modal-actions">

                  <button
                    type="button"
                    className="emergency-cancel-button"
                    onClick={() => setSelectedAssistance(null)}
                  >
                    Back
                  </button>


                  <button
                    type="button"
                    className="emergency-confirm-button"
                    onClick={handleRequestHelp}
                  >
                    🆘 Request Help
                  </button>

                </div>

              </>

            ) : (


              /* ==================================================
                 STEP 3 — SUCCESS
              ================================================== */

              <div className="emergency-success">

                <div className="emergency-success-icon">
                  ✓
                </div>


                <h2>
                  Help Request Sent
                </h2>


                <p className="success-main-text">

                  Your {selectedAssistance.title.toLowerCase()}
                  request has been successfully registered.

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
