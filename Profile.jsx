import { useState } from 'react'
import './Profile.css'

export default function Profile({ onBack }) {
  const [editing, setEditing] = useState(false)

  const [profile, setProfile] = useState({
    name: 'Warkari',
    mobile: '9876543210',
    location: 'Pandharpur',
    dindi: 'Not added',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSave = (event) => {
    event.preventDefault()
    setEditing(false)
  }

  return (
    <main className="profile-page">

      {/* HEADER */}
      <header className="profile-header">

        <button
          type="button"
          className="profile-back-button"
          onClick={onBack}
          aria-label="Go back"
        >
          ←
        </button>

        <div className="profile-header-title">

          <div className="profile-header-icon">
            👤
          </div>

          <div>
            <h1>Profile</h1>
            <p>Your Warkari profile</p>
          </div>

        </div>

      </header>


      {/* CONTENT */}
      <div className="profile-container">

        {/* PROFILE HERO */}
        <section className="profile-hero">

          <div className="profile-avatar">
            {profile.name.charAt(0).toUpperCase()}
          </div>

          <div className="profile-hero-content">

            <span>
              WARKARI PROFILE
            </span>

            <h2>
              {profile.name}
            </h2>

            <p>
              Jai Hari Vitthal 🙏
            </p>

          </div>

        </section>


        {/* PERSONAL DETAILS */}
        <section className="profile-card">

          <div className="profile-card-heading">

            <div>
              <span>
                PERSONAL INFORMATION
              </span>

              <h2>
                Your Details
              </h2>

              <p>
                Keep your information updated for your Wari journey.
              </p>
            </div>

            {!editing && (
              <button
                type="button"
                className="profile-edit-button"
                onClick={() => setEditing(true)}
              >
                ✏️ Edit
              </button>
            )}

          </div>


          {editing ? (

            <form
              className="profile-form"
              onSubmit={handleSave}
            >

              <div className="profile-form-group">

                <label htmlFor="profile-name">
                  Full Name
                </label>

                <input
                  id="profile-name"
                  name="name"
                  type="text"
                  value={profile.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="profile-form-group">

                <label htmlFor="profile-mobile">
                  Mobile Number
                </label>

                <input
                  id="profile-mobile"
                  name="mobile"
                  type="tel"
                  value={profile.mobile}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="profile-form-group">

                <label htmlFor="profile-location">
                  Current Location
                </label>

                <input
                  id="profile-location"
                  name="location"
                  type="text"
                  value={profile.location}
                  onChange={handleChange}
                />

              </div>


              <div className="profile-form-group">

                <label htmlFor="profile-dindi">
                  Dindi Name
                </label>

                <input
                  id="profile-dindi"
                  name="dindi"
                  type="text"
                  value={profile.dindi}
                  onChange={handleChange}
                />

              </div>


              <div className="profile-form-actions">

                <button
                  type="button"
                  className="profile-cancel-button"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="profile-save-button"
                >
                  ✓ Save Changes
                </button>

              </div>

            </form>

          ) : (

            <div className="profile-details-grid">

              <div className="profile-detail">

                <span>
                  👤 Full Name
                </span>

                <strong>
                  {profile.name}
                </strong>

              </div>


              <div className="profile-detail">

                <span>
                  📱 Mobile Number
                </span>

                <strong>
                  {profile.mobile}
                </strong>

              </div>


              <div className="profile-detail">

                <span>
                  📍 Current Location
                </span>

                <strong>
                  {profile.location}
                </strong>

              </div>


              <div className="profile-detail">

                <span>
                  🤝 Dindi
                </span>

                <strong>
                  {profile.dindi}
                </strong>

              </div>

            </div>

          )}

        </section>


        {/* YATRA PROFILE */}
        <section className="profile-card">

          <div className="profile-section-heading">

            <span>
              YATRA INFORMATION
            </span>

            <h2>
              Your Wari Journey
            </h2>

          </div>


          <div className="journey-status">

            <div className="journey-icon">
              🛕
            </div>

            <div className="journey-content">

              <h3>
                Pandharpur Wari
              </h3>

              <p>
                Your journey information and participation
                details will appear here.
              </p>

            </div>

            <span className="journey-active">
              Active
            </span>

          </div>

        </section>


        {/* SEVA PROFILE */}
        <section className="profile-card">

          <div className="profile-section-heading">

            <span>
              SEVA
            </span>

            <h2>
              Your Seva
            </h2>

            <p>
              Your registered seva opportunities will appear here.
            </p>

          </div>


          <div className="profile-empty-state">

            <div className="profile-empty-icon">
              🤲
            </div>

            <h3>
              No active seva
            </h3>

            <p>
              Register for a seva opportunity to contribute
              to the Wari community.
            </p>

          </div>

        </section>


        {/* SETTINGS */}
        <section className="profile-card">

          <div className="profile-section-heading">

            <span>
              ACCOUNT
            </span>

            <h2>
              Account Settings
            </h2>

          </div>


          <div className="profile-setting-list">

            <button
              type="button"
              className="profile-setting"
              onClick={() => alert('Notifications settings will be connected soon.')}
            >

              <div className="setting-icon">
                🔔
              </div>

              <div className="setting-content">

                <h3>
                  Notifications
                </h3>

                <p>
                  Manage your Wari updates and alerts.
                </p>

              </div>

              <span>
                →
              </span>

            </button>


            <button
              type="button"
              className="profile-setting"
              onClick={() => alert('Help and support will be connected soon.')}
            >

              <div className="setting-icon">
                ❓
              </div>

              <div className="setting-content">

                <h3>
                  Help & Support
                </h3>

                <p>
                  Get assistance with Seva Setu.
                </p>

              </div>

              <span>
                →
              </span>

            </button>

          </div>

        </section>


        {/* MOTIVATION */}
        <section className="profile-motivation">

          <div>
            🙏
          </div>

          <h2>
            Jai Hari Vitthal
          </h2>

          <p>
            Seva • Bhakti • Samaj
          </p>

        </section>


        {/* FOOTER */}
        <footer className="profile-footer">

          <p>
            Seva Setu • Warkari Dashboard
          </p>

        </footer>

      </div>

    </main>
  )
}