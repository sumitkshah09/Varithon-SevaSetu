import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/VolunteerDashboard.css'

const initialRequests = [
  {
    id: 'SOS-104',
    priority: 'HIGH',
    type: 'Medical Assistance',
    description: 'Warkari needs immediate medical assistance.',
    distance: '1.2 km away',
    time: '2 min ago',
    skill: 'First Aid preferred',
  },
  {
    id: 'SOS-108',
    priority: 'MEDIUM',
    type: 'Water Assistance',
    description: 'Group of Warkaris needs drinking water nearby.',
    distance: '1.8 km away',
    time: '5 min ago',
    skill: 'General assistance',
  },
  {
    id: 'SOS-111',
    priority: 'NORMAL',
    type: 'Navigation Help',
    description: 'An elderly Warkari needs help finding the main route.',
    distance: '2.4 km away',
    time: '8 min ago',
    skill: 'Navigation',
  },
  {
    id: 'SOS-115',
    priority: 'CRITICAL',
    type: 'Shelter Assistance',
    description: 'Family needs immediate temporary shelter support.',
    distance: '3.1 km away',
    time: '10 min ago',
    skill: 'General assistance',
  },
]

export default function VolunteerDashboard() {
  const navigate = useNavigate()

 const [isAvailable, setIsAvailable] = useState(
  localStorage.getItem('volunteerAvailability') !== 'offline'
)
  const [requests, setRequests] = useState(initialRequests)
  const [acceptedRequests, setAcceptedRequests] = useState([])

  const handleAccept = (request) => {
    if (!isAvailable) return

    setRequests((current) =>
      current.filter((item) => item.id !== request.id)
    )

    setAcceptedRequests((current) => [...current, request])
  }

  const handleReject = (request) => {
    setRequests((current) =>
      current.filter((item) => item.id !== request.id)
    )
  }

  const activeRequests = acceptedRequests.length

  return (
    <main className="volunteer-dashboard">

      {/* HEADER */}
      <header className="volunteer-header">

        <div className="volunteer-brand">
          <span className="volunteer-brand-mark">S</span>
          <span>SevaSetu</span>
        </div>

        <nav className="volunteer-nav">
          <button className="active">Dashboard</button>
         <button onClick={() => navigate('/volunteer-requests')}>
  Requests
</button>
<button onClick={() => navigate('/volunteer-tasks')}>
  My Tasks
</button>

          <button>Map</button>
          <button>Resources</button>
        </nav>

        <div className="volunteer-header-actions">

          <button
            className="notification-button"
            title="Notifications"
          >
            🔔
            <span className="notification-dot"></span>
          </button>

          <div className="header-availability">
            <span
              className={
                isAvailable
                  ? 'availability-dot available'
                  : 'availability-dot offline'
              }
            ></span>

            {isAvailable ? 'Available' : 'Offline'}
          </div>

          <button className="volunteer-profile-button">
            <span className="volunteer-avatar">V</span>

            <span className="profile-name">
              Volunteer
            </span>
          </button>

        </div>

      </header>

      {/* MAIN CONTENT */}
      <section className="volunteer-main">

        {/* WELCOME */}
        <div className="volunteer-welcome">

          <div>
            <p className="dashboard-label">
              VOLUNTEER COMMAND CENTER
            </p>

            <h1>
              Welcome back, Volunteer 🤝
            </h1>

            <p>
              Your seva can make someone's journey safer today.
            </p>
          </div>

          {/* AVAILABILITY */}
          <div className="availability-card">

            <div className="availability-info">

              <span
                className={
                  isAvailable
                    ? 'availability-large-dot available'
                    : 'availability-large-dot offline'
                }
              ></span>

              <div>
                <strong>
                  {isAvailable
                    ? "You're available"
                    : "You're offline"}
                </strong>

                <span>
                  {isAvailable
                    ? 'Receiving nearby requests'
                    : "You're not receiving new requests"}
                </span>
              </div>

            </div>

            <button
              className={
                isAvailable
                  ? 'availability-toggle offline-button'
                  : 'availability-toggle online-button'
              }
              onClick={() => {
  const newStatus = !isAvailable

  setIsAvailable(newStatus)

  localStorage.setItem(
    'volunteerAvailability',
    newStatus ? 'available' : 'offline'
  )
}}
            >
              {isAvailable ? 'Go offline' : 'Go available'}
            </button>

          </div>

        </div>

        {/* STATISTICS */}
        <section className="volunteer-stats">

          <div className="stat-card">
            <div className="stat-icon">🚨</div>

            <div>
              <span>Active Requests</span>
              <strong>{activeRequests}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✓</div>

            <div>
              <span>Requests Resolved</span>
              <strong>18</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🤝</div>

            <div>
              <span>Volunteers Nearby</span>
              <strong>24</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⏱</div>

            <div>
              <span>Seva Hours</span>
              <strong>32h</strong>
            </div>
          </div>

        </section>

        {/* REQUESTS */}
        <section className="dashboard-section">

          <div className="section-heading">

            <div>
              <div className="section-title-row">

                <h2>Nearby seva requests</h2>

                <span className="live-indicator">
                  <span></span>
                  Live updates
                </span>

              </div>

              <p>
                Help people nearby who currently need assistance.
              </p>
            </div>

            <span className="request-count">
              {requests.length} nearby
            </span>

          </div>

          {/* OFFLINE MESSAGE */}
          {!isAvailable && requests.length > 0 && (
            <div className="offline-message">
              <span>⚫</span>
              You're offline. Go available to accept nearby seva
              requests.
            </div>
          )}

          {/* REQUEST LIST */}
          {requests.length > 0 ? (

            <div className="request-list">

              {requests.map((request) => (

                <article
                  className="request-card"
                  key={request.id}
                >

                  <div className="request-main">

                    <div className="request-top-row">

                      <span
                        className={`priority-badge ${request.priority.toLowerCase()}`}
                      >
                        {request.priority}
                      </span>

                      <span className="request-id">
                        {request.id}
                      </span>

                    </div>

                    <h3>{request.type}</h3>

                    <p className="request-description">
                      {request.description}
                    </p>

                    <div className="request-meta">

                      <span>📍 {request.distance}</span>

                      <span>🕐 {request.time}</span>

                      <span>🩺 {request.skill}</span>

                    </div>

                  </div>

                  <div className="request-actions">

                    <button
                      className="view-request-button"
                      onClick={() =>
                        alert(
                          `${request.type}\n\n${request.description}\n\nRequest ID: ${request.id}`
                        )
                      }
                    >
                      View Details
                    </button>

                    <button
                      className="reject-request-button"
                      onClick={() => handleReject(request)}
                    >
                      Reject
                    </button>

                    <button
                      className="accept-request-button"
                      disabled={!isAvailable}
                      onClick={() => handleAccept(request)}
                    >
                      Accept Request
                    </button>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="empty-request-state">

              <div className="empty-icon">✓</div>

              <h3>You're all caught up.</h3>

              <p>
                No nearby seva requests right now.
              </p>

            </div>

          )}

        </section>

      </section>

    </main>
  )
}