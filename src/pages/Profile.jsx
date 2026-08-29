import { useState } from 'react'
import './Profile.css'

export default function Profile({ onBack }) {
  const [editing, setEditing] = useState(false)

  const [profile, setProfile] = useState({
    name: 'Warkari',
    mobile: '+91 98765 43210',
    dindi: 'Dindi 12',
    location: 'Pandharpur',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSave = () => {
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


      <div className="profile-container">

        {/* PROFILE HERO */}
        <section className="profile-hero">

          <div className="profile-avatar">
            {profile.name.charAt(0).toUpperCase()}
          </div>

          <div className="profile-hero-content">
            <span>WARKARI PROFILE</span>

            <h2>
              {profile.name}
            </h2>

            <p>
              Jai Hari Vitthal 🙏
            </p>
          </div>

          <div className="profile-verified">
            ✓
          </div>

        </section>


        {/* PERSONAL INFORMATION */}
        <section className="profile-card">

          <div className="profile-card-heading">

            <div>
              <span>PERSONAL INFORMATION</span>

              <h2>
                Your Details
              </h2>

              <p>
                Keep your Warkari information updated.
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


          <div className="profile-fields">

            {/* NAME */}
            <div className="profile-field">

              <label htmlFor="profile-name">
                Full Name
              </label>

              {editing ? (
                <input
                  id="profile-name"
                  name="name"
                  type="text"
                  value={profile.name}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  <span className="profile-value-icon">👤</span>
                  <span>{profile.name}</span>
                </div>
              )}

            </div>


            {/* MOBILE */}
            <div className="profile-field">

              <label htmlFor="profile-mobile">
                Mobile Number
              </label>

              {editing ? (
                <input
                  id="profile-mobile"
                  name="mobile"
                  type="tel"
                  value={profile.mobile}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  <span className="profile-value-icon">📱</span>
                  <span>{profile.mobile}</span>
                </div>
              )}

            </div>


            {/* DINDI */}
            <div className="profile-field">

              <label htmlFor="profile-dindi">
                Dindi
              </label>

              {editing ? (
                <input
                  id="profile-dindi"
                  name="dindi"
                  type="text"
                  value={profile.dindi}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  <span className="profile-value-icon">🤝</span>
                  <span>{profile.dindi}</span>
                </div>
              )}

            </div>


            {/* LOCATION */}
            <div className="profile-field">

              <label htmlFor="profile-location">
                Current Location
              </label>

              {editing ? (
                <input
                  id="profile-location"
                  name="location"
                  type="text"
                  value={profile.location}
                  onChange={handleChange}
                />
              ) : (
                <div className="profile-value">
                  <span className="profile-value-icon">📍</span>
                  <span>{profile.location}</span>
                </div>
              )}

            </div>

          </div>


          {editing && (
            <div className="profile-edit-actions">

              <button
                type="button"
                className="profile-cancel-button"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="profile-save-button"
                onClick={handleSave}
              >
                ✓ Save Changes
              </button>

            </div>
          )}

        </section>


        {/* WARI INFORMATION */}
        <section className="profile-card">

          <div className="profile-card-heading">

            <div>
              <span>WARI INFORMATION</span>

              <h2>
                Your Journey
              </h2>

              <p>
                Your current Wari journey status.
              </p>
            </div>

          </div>


          <div className="profile-info-grid">

            <div className="profile-info-item">

              <div className="profile-info-icon">
                📍
              </div>

              <div>
                <span>Current Location</span>
                <strong>Pandharpur</strong>
              </div>

            </div>


            <div className="profile-info-item">

              <div className="profile-info-icon">
                🛕
              </div>

              <div>
                <span>Destination</span>
                <strong>Vitthal Mandir</strong>
              </div>

            </div>


            <div className="profile-info-item">

              <div className="profile-info-icon">
                🕐
              </div>

              <div>
                <span>Yatra Status</span>
                <strong>Journey Active</strong>
              </div>

            </div>


            <div className="profile-info-item">

              <div className="profile-info-icon">
                🤝
              </div>

              <div>
                <span>Seva Status</span>
                <strong>Ready to Serve</strong>
              </div>

            </div>

          </div>

        </section>


        {/* PROFILE OPTIONS */}
        <section className="profile-card">

          <div className="profile-card-heading">

            <div>
              <span>ACCOUNT OPTIONS</span>

              <h2>
                Quick Settings
              </h2>

              <p>
                Manage your Seva Setu preferences.
              </p>
            </div>

          </div>


          <div className="profile-option-list">

            <button
              type="button"
              className="profile-option-card"
              onClick={() => alert('Notifications settings will be connected soon.')}
            >

              <div className="profile-option-icon">
                🔔
              </div>

              <div className="profile-option-content">
                <h3>
                  Notifications
                </h3>

                <p>
                  Stay updated with Wari announcements.
                </p>
              </div>

              <span className="profile-option-arrow">
                →
              </span>

            </button>


            <button
              type="button"
              className="profile-option-card"
              onClick={() => alert('Safety and privacy settings will be connected soon.')}
            >

              <div className="profile-option-icon">
                🛡️
              </div>

              <div className="profile-option-content">
                <h3>
                  Safety & Privacy
                </h3>

                <p>
                  Manage your account and safety information.
                </p>
              </div>

              <span className="profile-option-arrow">
                →
              </span>

            </button>


            <button
              type="button"
              className="profile-option-card"
              onClick={() => alert('About Seva Setu will be connected soon.')}
            >

              <div className="profile-option-icon">
                ℹ️
              </div>

              <div className="profile-option-content">
                <h3>
                  About Seva Setu
                </h3>

                <p>
                  Learn more about the Seva Setu platform.
                </p>
              </div>

              <span className="profile-option-arrow">
                →
              </span>

            </button>

          </div>

        </section>


        {/* MOTIVATION */}
        <section className="profile-motivation">

          <div className="profile-motivation-icon">
            🙏
          </div>

          <h2>
            Seva • Bhakti • Samaj
          </h2>

          <p>
            Together we walk, serve and celebrate the spirit of Wari.
          </p>

          <strong>
            Jai Hari Vitthal
          </strong>

        </section>


        {/* FOOTER */}
        <footer className="profile-footer">

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