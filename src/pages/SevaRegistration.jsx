import { useState } from 'react'
import './SevaRegistration.css'

export default function SevaRegistration({ seva, onBack }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="seva-registration-page">

        <header className="seva-registration-header">

          <button
            type="button"
            className="registration-back-button"
            onClick={onBack}
          >
            ←
          </button>

          <div className="registration-header-title">

            <div className="registration-header-icon">
              {seva.icon}
            </div>

            <div>
              <h1>Seva Registration</h1>
              <p>Seva Setu</p>
            </div>

          </div>

        </header>


        <div className="registration-container">

          <section className="success-card">

            <div className="success-icon">
              ✓
            </div>

            <span className="success-label">
              REGISTRATION SUCCESSFUL
            </span>

            <h2>
              Your Seva request has been submitted!
            </h2>

            <p>
              Thank you for volunteering for {seva.title}.
              The organizers will connect with you with
              further details.
            </p>

            <div className="success-details">

              <div>
                <span>Seva</span>
                <strong>{seva.title}</strong>
              </div>

              <div>
                <span>Status</span>
                <strong>Registration Submitted</strong>
              </div>

            </div>

            <button
              type="button"
              className="registration-primary-button"
              onClick={onBack}
            >
              Back to Seva
            </button>

          </section>


          <section className="registration-footer-message">

            <div>
              🙏
            </div>

            <h3>
              Jai Hari Vitthal
            </h3>

            <p>
              Seva • Bhakti • Samaj
            </p>

          </section>

        </div>

      </main>
    )
  }


  return (
    <main className="seva-registration-page">

      {/* HEADER */}

      <header className="seva-registration-header">

        <button
          type="button"
          className="registration-back-button"
          onClick={onBack}
        >
          ←
        </button>

        <div className="registration-header-title">

          <div className="registration-header-icon">
            {seva.icon}
          </div>

          <div>
            <h1>{seva.title}</h1>
            <p>Join this seva opportunity</p>
          </div>

        </div>

      </header>


      {/* CONTENT */}

      <div className="registration-container">

        {/* SEVA DETAILS */}

        <section className="registration-info-card">

          <div className="registration-info-icon">
            {seva.icon}
          </div>

          <div>

            <span>
              SEVA OPPORTUNITY
            </span>

            <h2>
              {seva.title}
            </h2>

            <p>
              {seva.description}
            </p>

          </div>

        </section>


        {/* DETAILS */}

        <section className="registration-details-card">

          <h2>
            Seva Details
          </h2>

          <div className="details-grid">

            <div className="detail-item">

              <span>
                📍 Location
              </span>

              <strong>
                Pandharpur Wari Area
              </strong>

            </div>

            <div className="detail-item">

              <span>
                📅 Date
              </span>

              <strong>
                Today
              </strong>

            </div>

            <div className="detail-item">

              <span>
                🕐 Time
              </span>

              <strong>
                8:00 AM – 6:00 PM
              </strong>

            </div>

            <div className="detail-item">

              <span>
                👥 Volunteers Needed
              </span>

              <strong>
                10+
              </strong>

            </div>

          </div>

        </section>


        {/* REGISTRATION */}

        <section className="registration-form-card">

          <div className="form-heading">

            <h2>
              Register for Seva
            </h2>

            <p>
              Enter your details to express your interest.
            </p>

          </div>


          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="phone">
                Mobile Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your mobile number"
                required
              />

            </div>


            <div className="form-group">

              <label htmlFor="availability">
                Availability
              </label>

              <select
                id="availability"
                name="availability"
                required
                defaultValue=""
              >

                <option
                  value=""
                  disabled
                >
                  Select availability
                </option>

                <option value="morning">
                  Morning
                </option>

                <option value="afternoon">
                  Afternoon
                </option>

                <option value="evening">
                  Evening
                </option>

                <option value="full-day">
                  Full Day
                </option>

              </select>

            </div>


            <div className="form-group">

              <label htmlFor="message">
                Additional Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Anything you would like the organizers to know?"
                rows="4"
              />

            </div>


            <button
              type="submit"
              className="registration-submit-button"
            >
              🙏 Submit Seva Registration
            </button>

          </form>

        </section>


        {/* NOTICE */}

        <section className="registration-notice">

          <div>
            ℹ️
          </div>

          <div>

            <h3>
              Important
            </h3>

            <p>
              Your registration is an expression of interest.
              The final seva assignment will be confirmed
              by the organizers or volunteers.
            </p>

          </div>

        </section>


        {/* FOOTER */}

        <footer className="registration-footer">

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