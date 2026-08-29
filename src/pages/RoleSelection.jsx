import { useState } from 'react'
import VolunteerDashboard from './VolunteerDashboard'
import WarkariLogin from './WarkariLogin'
import './RoleSelection.css'

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState(null)

  // -------------------------
  // VOLUNTEER
  // -------------------------
  if (selectedRole === 'volunteer') {
    return <VolunteerDashboard />
  }

  // -------------------------
  // ORGANIZER
  // -------------------------
  if (selectedRole === 'organizer') {
    return (
      <div className="coming-soon">
        <h1>Organizer Dashboard</h1>

        <p>
          The Organizer section is coming soon.
        </p>

        <button onClick={() => setSelectedRole(null)}>
          ← Back to roles
        </button>
      </div>
    )
  }

  // -------------------------
  // WARKARI LOGIN
  // -------------------------
  if (selectedRole === 'warkari') {
    return (
      <WarkariLogin
        onBack={() => setSelectedRole(null)}
      />
    )
  }

  // -------------------------
  // ROLE SELECTION PAGE
  // -------------------------
  return (
    <main className="role-page">

      <div className="role-header">

        <span className="logo-mark">
          🙏
        </span>

        <h1>
          Welcome to Seva Setu
        </h1>

        <p>
          Choose your role to begin your journey of seva.
        </p>

      </div>

      <div className="roles">

        {/* ORGANIZER */}

        <div className="role-card">

          <div className="role-icon">
            🏛️
          </div>

          <h2>
            Organizer
          </h2>

          <p>
            Manage Wari operations, coordinate volunteers
            and organize essential resources.
          </p>

          <button
            onClick={() => setSelectedRole('organizer')}
          >
            Continue as Organizer
          </button>

        </div>


        {/* WARKARI */}

        <div className="role-card">

          <div className="role-icon">
            🙏
          </div>

          <h2>
            Warkari
          </h2>

          <p>
            Find help, services and assistance throughout
            your Wari journey.
          </p>

          <button
            onClick={() => setSelectedRole('warkari')}
          >
            Continue as Warkari
          </button>

        </div>


        {/* VOLUNTEER */}

        <div className="role-card">

          <div className="role-icon">
            🤝
          </div>

          <h2>
            Volunteer
          </h2>

          <p>
            Offer your time, skills and seva to support
            fellow Warkaris.
          </p>

          <button
            onClick={() => setSelectedRole('volunteer')}
          >
            Continue as Volunteer
          </button>

        </div>

      </div>


      <p className="role-footer">
        Seva through every step of the Wari.
      </p>

    </main>
  )
}