import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/VolunteerRequests.css";

/*
  ============================================================
  MOCK SHARED REQUEST STORE
  ============================================================

  This lives outside the component so the request state is
  shared between renders/components in this browser session.

  Later, replace acceptRequest() with a Firestore transaction.
*/

const mockRequests = [
  {
    id: 'SOS-104',
    type: 'Medical Assistance',
    priority: 'HIGH',
    description: 'Warkari needs immediate medical assistance.',
    distance: 1.2,
    time: '2 min ago',
    skills: ['Medical Assistance', 'First Aid'],
    location: 'Request location',
    status: 'available',
    assignedVolunteerId: null,
    assignedAt: null,
  },
  {
    id: 'SOS-108',
    type: 'Water Assistance',
    priority: 'MEDIUM',
    description: 'Group of Warkaris needs drinking water nearby.',
    distance: 1.7,
    time: '5 min ago',
    skills: ['Water Distribution'],
    location: 'Request location',
    status: 'available',
    assignedVolunteerId: null,
    assignedAt: null,
  },
  {
    id: 'SOS-112',
    type: 'Navigation Help',
    priority: 'NORMAL',
    description: 'An elderly pilgrim needs help finding the main camp.',
    distance: 2.4,
    time: '8 min ago',
    skills: ['Navigation'],
    location: 'Request location',
    status: 'available',
    assignedVolunteerId: null,
    assignedAt: null,
  },
  {
    id: 'SOS-117',
    type: 'Food Assistance',
    priority: 'HIGH',
    description: 'Family needs food assistance near the seva centre.',
    distance: 3.1,
    time: '11 min ago',
    skills: ['Food Distribution'],
    location: 'Request location',
    status: 'available',
    assignedVolunteerId: null,
    assignedAt: null,
  },
]

/*
  Shared mock state.

  The object itself is intentionally kept outside the component.
  This makes acceptRequest() the single place where assignment
  decisions happen.
*/
const requestStore = mockRequests

const CURRENT_VOLUNTEER_ID = 'volunteer-demo-001'

export function acceptRequest(requestId, volunteerId) {
  const request = requestStore.find(
    (item) => item.id === requestId
  )

  if (!request) {
    return {
      success: false,
      reason: 'not_found',
    }
  }

  // IMPORTANT:
  // This is the mock equivalent of:
  //
  // Firestore transaction:
  // READ → CHECK available → ASSIGN → COMMIT
  //
  // The second volunteer cannot overwrite an assigned request.

  if (request.status !== 'available') {
    return {
      success: false,
      reason: 'already_assigned',
    }
  }

  request.status = 'assigned'
  request.assignedVolunteerId = volunteerId
  request.assignedAt = new Date().toISOString()

  return {
    success: true,
    request,
  }
}

const rejectionReasons = [
  'Too far away',
  'Currently handling another request',
  'Not available right now',
  "I don't have the required skills",
  "I don't have the required resources",
  'Request is outside my service area',
  'Safety concern',
  'Other',
]

export default function VolunteerRequests() {
  const navigate = useNavigate()

  const [requests, setRequests] = useState([...requestStore])

  const [typeFilter, setTypeFilter] = useState('All')
  const [priorityFilter, setPriorityFilter] = useState('All')
  const [distanceFilter, setDistanceFilter] = useState('Within 5 km')
  const [sortBy, setSortBy] = useState('Nearest')

  const [selectedRequest, setSelectedRequest] = useState(null)

  const [availability, setAvailability] = useState(true)

  const [accepting, setAccepting] = useState(false)
  const [acceptResult, setAcceptResult] = useState(null)

  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false)
  const [rejectRequest, setRejectRequest] = useState(null)
  const [selectedReason, setSelectedReason] = useState('')
  const [note, setNote] = useState('')
  const [rejectError, setRejectError] = useState('')

  /*
    ============================================================
    FILTER + SORT
    ============================================================
  */

  const filteredRequests = useMemo(() => {
    let result = requests.filter(
      (request) => request.status === 'available'
    )

    if (typeFilter !== 'All') {
      result = result.filter(
        (request) => request.type === typeFilter
      )
    }

    if (priorityFilter !== 'All') {
      result = result.filter(
        (request) => request.priority === priorityFilter.toUpperCase()
      )
    }

    const maxDistance =
      distanceFilter === 'Within 1 km'
        ? 1
        : distanceFilter === 'Within 2 km'
          ? 2
          : 5

    result = result.filter(
      (request) => request.distance <= maxDistance
    )

    if (sortBy === 'Nearest') {
      result.sort((a, b) => a.distance - b.distance)
    }

    if (sortBy === 'Highest Priority') {
      const priorityOrder = {
        CRITICAL: 0,
        HIGH: 1,
        MEDIUM: 2,
        NORMAL: 3,
      }

      result.sort(
        (a, b) =>
          priorityOrder[a.priority] -
          priorityOrder[b.priority]
      )
    }

    if (sortBy === 'Newest') {
      result.sort((a, b) => {
        const aMinutes = parseInt(a.time)
        const bMinutes = parseInt(b.time)

        return aMinutes - bMinutes
      })
    }

    return result
  }, [
    requests,
    typeFilter,
    priorityFilter,
    distanceFilter,
    sortBy,
  ])

  /*
    ============================================================
    OPEN REQUEST DETAILS
    ============================================================
  */

  const openRequestDetails = (request) => {
    setSelectedRequest(request)
    setAcceptResult(null)
  }

  /*
    ============================================================
    ACCEPT
    ============================================================
  */

  const handleAccept = (request) => {
    if (!availability || accepting) return

    setAccepting(true)
    setAcceptResult(null)

    setTimeout(() => {
      const result = acceptRequest(
        request.id,
        CURRENT_VOLUNTEER_ID
      )

      setAccepting(false)

      if (!result.success) {
        setAcceptResult({
          success: false,
          message: 'Request no longer available.',
          description:
            'This request has already been accepted by another volunteer.',
        })

        setRequests([...requestStore])
        return
      }

      setRequests([...requestStore])

      setSelectedRequest({
        ...result.request,
      })

      setAcceptResult({
        success: true,
        message: 'Request accepted successfully.',
      })
    }, 700)
  }

  /*
    ============================================================
    REJECT MODAL
    ============================================================
  */

  const openRejectModal = (request) => {
    setRejectRequest(request)
    setSelectedReason('')
    setNote('')
    setRejectError('')
    setIsRejectModalOpen(true)
  }

  const closeRejectModal = () => {
    setIsRejectModalOpen(false)
    setRejectRequest(null)
    setSelectedReason('')
    setNote('')
    setRejectError('')
  }

  const confirmRejection = () => {
    if (!selectedReason) {
      setRejectError(
        'Please select a reason for rejecting this request.'
      )
      return
    }

    if (
      selectedReason === 'Other' &&
      !note.trim()
    ) {
      setRejectError(
        'Please provide an explanation.'
      )
      return
    }

    /*
      IMPORTANT:

      Rejection is stored only for this volunteer.

      The request itself stays AVAILABLE for other volunteers.
    */

    const rejectionData = {
      volunteerId: CURRENT_VOLUNTEER_ID,
      reason: selectedReason,
      note: note.trim(),
      rejectedAt: new Date().toISOString(),
    }

    console.log(
      'Mock rejection data:',
      rejectionData
    )

    // Remove only from this volunteer's visible list.
    const remaining = requests.filter(
      (request) => request.id !== rejectRequest.id
    )

    setRequests(remaining)

    if (
      selectedRequest?.id === rejectRequest.id
    ) {
      setSelectedRequest(null)
    }

    closeRejectModal()
  }

  /*
    ============================================================
    NAVIGATION
    ============================================================
  */

  return (
    <main className="volunteer-requests-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="volunteer-header">

        <button
          className="header-brand"
          onClick={() =>
            navigate('/volunteer-dashboard')
          }
        >
          <span className="brand-mark">S</span>
          <span>SevaSetu</span>
        </button>

        <nav className="volunteer-nav">

          <button
            onClick={() =>
              navigate('/volunteer-dashboard')
            }
          >
            Dashboard
          </button>

          <button className="active">
            Requests
          </button>

          <button
            onClick={() =>
              navigate('/volunteer-dashboard')
            }
          >
            My Tasks
          </button>

          <button
            onClick={() =>
              alert('Map coming soon!')
            }
          >
            Map
          </button>

          <button
            onClick={() =>
              alert('Resources coming soon!')
            }
          >
            Resources
          </button>

        </nav>

        <div className="header-right">

          <button
            className="notification-button"
            onClick={() =>
              alert('Notifications coming soon!')
            }
            aria-label="Notifications"
          >
            🔔
          </button>

          <button
            className={`availability-pill ${
              availability ? 'online' : 'offline'
            }`}
            onClick={() =>
              setAvailability(!availability)
            }
          >
            <span></span>
            {availability
              ? 'Available'
              : 'Offline'}
          </button>

          <button
            className="profile-avatar"
            onClick={() =>
              alert('Profile coming soon!')
            }
          >
            V
          </button>

        </div>

      </header>

      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <div className="requests-container">

        <div className="requests-heading">

          <div>
            <span className="eyebrow">
              VOLUNTEER SEVA
            </span>

            <h1>Seva Requests</h1>

            <p>
              Find people who need help near you.
            </p>
          </div>

          <div className="live-status">
            <span></span>
            Live updates
          </div>

        </div>

        {/* ===================================================
            FILTER BAR
        =================================================== */}

        <section className="filter-card">

          <div className="filter-group">
            <label>Type</label>

            <select
              value={typeFilter}
              onChange={(e) =>
                setTypeFilter(e.target.value)
              }
            >
              <option>All</option>
              <option>Medical Assistance</option>
              <option>Food Assistance</option>
              <option>Water Assistance</option>
              <option>Navigation Help</option>
              <option>Shelter Assistance</option>
              <option>Crowd Management</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Priority</label>

            <select
              value={priorityFilter}
              onChange={(e) =>
                setPriorityFilter(e.target.value)
              }
            >
              <option>All</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Normal</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Distance</label>

            <select
              value={distanceFilter}
              onChange={(e) =>
                setDistanceFilter(e.target.value)
              }
            >
              <option>Within 1 km</option>
              <option>Within 2 km</option>
              <option>Within 5 km</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Sort</label>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
            >
              <option>Nearest</option>
              <option>Highest Priority</option>
              <option>Newest</option>
            </select>
          </div>

        </section>

        {/* ===================================================
            OFFLINE NOTICE
        =================================================== */}

        {!availability && (
          <div className="offline-notice">
            <span className="offline-icon">●</span>

            <div>
              <strong>
                You're currently offline
              </strong>

              <p>
                Go available to accept requests.
              </p>
            </div>

            <button
              onClick={() =>
                setAvailability(true)
              }
            >
              Go available
            </button>
          </div>
        )}

        {/* ===================================================
            REQUEST COUNT
        =================================================== */}

        <div className="results-row">
          <span>
            {filteredRequests.length}{' '}
            {filteredRequests.length === 1
              ? 'request'
              : 'requests'}{' '}
            nearby
          </span>
        </div>

        {/* ===================================================
            REQUEST CARDS
        =================================================== */}

        {filteredRequests.length === 0 ? (

          <section className="empty-state">

            <div className="empty-icon">
              ✓
            </div>

            <h2>
              No nearby seva requests right now.
            </h2>

            <p>
              You're all caught up. New requests
              will appear here automatically.
            </p>

          </section>

        ) : (

          <div className="requests-list">

            {filteredRequests.map((request) => (

              <article
                className="request-card"
                key={request.id}
                onClick={() =>
                  openRequestDetails(request)
                }
              >

                <div className="request-card-main">

                  <div className="request-card-top">

                    <span
                      className={`priority-badge priority-${request.priority.toLowerCase()}`}
                    >
                      {request.priority}
                    </span>

                    <span className="request-id">
                      {request.id}
                    </span>

                  </div>

                  <h2>
                    {request.type}
                  </h2>

                  <p className="request-description">
                    {request.description}
                  </p>

                  <div className="request-meta">

                    <span>
                      📍 {request.distance} km away
                    </span>

                    <span>
                      🕐 {request.time}
                    </span>

                    <span>
                      🩺{' '}
                      {request.skills[0]}
                    </span>

                  </div>

                </div>

                <div
                  className="request-card-actions"
                  onClick={(e) =>
                    e.stopPropagation()
                  }
                >

                  <button
                    className="accept-button"
                    disabled={!availability}
                    onClick={() =>
                      handleAccept(request)
                    }
                  >
                    Accept Request
                  </button>

                  <button
                    className="reject-button"
                    onClick={() =>
                      openRejectModal(request)
                    }
                  >
                    Reject
                  </button>

                </div>

              </article>

            ))}

          </div>

        )}

      </div>

      {/* =====================================================
          REQUEST DETAILS MODAL
      ===================================================== */}

      {selectedRequest && (

        <div
          className="details-overlay"
          onMouseDown={() =>
            setSelectedRequest(null)
          }
        >

          <section
            className="details-modal"
            onMouseDown={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="details-close"
              onClick={() =>
                setSelectedRequest(null)
              }
            >
              ×
            </button>

            <div className="details-header">

              <div>
                <span className="eyebrow">
                  SEVA REQUEST
                </span>

                <h2>
                  {selectedRequest.type}
                </h2>
              </div>

              <span
                className={`priority-badge priority-${selectedRequest.priority.toLowerCase()}`}
              >
                {selectedRequest.priority}
              </span>

            </div>

            <div className="details-id">
              {selectedRequest.id}
            </div>

            <div className="details-info-grid">

              <div>
                <span>Distance</span>
                <strong>
                  📍 {selectedRequest.distance} km away
                </strong>
              </div>

              <div>
                <span>Requested</span>
                <strong>
                  🕐 {selectedRequest.time}
                </strong>
              </div>

            </div>

            <div className="details-section">

              <h3>Description</h3>

              <p>
                {selectedRequest.description}
              </p>

            </div>

            <div className="details-section">

              <h3>Required assistance</h3>

              <div className="skill-list">

                {selectedRequest.skills.map(
                  (skill) => (
                    <span
                      className="skill-tag"
                      key={skill}
                    >
                      {skill}
                    </span>
                  )
                )}

              </div>

            </div>

            <div className="details-section">

              <h3>Location</h3>

              <div className="request-map">

                <span className="map-pin">
                  📍
                </span>

                <div className="map-label">
                  <strong>
                    Request location
                  </strong>

                  <span>
                    {selectedRequest.distance} km
                    away
                  </span>
                </div>

              </div>

            </div>

            {/* =============================================
                ACCEPTING
            ============================================= */}

            {accepting && (

              <div className="accepting-message">
                <span>⏳</span>

                <div>
                  <strong>
                    Accepting request...
                  </strong>

                  <p>
                    Checking whether this request
                    is still available.
                  </p>
                </div>
              </div>

            )}

            {/* =============================================
                ASSIGNMENT FAILURE
            ============================================= */}

            {acceptResult &&
              !acceptResult.success && (

                <div className="unavailable-message">

                  <strong>
                    Request no longer available.
                  </strong>

                  <p>
                    This request has already been
                    accepted by another volunteer.
                  </p>

                </div>

              )}

            {/* =============================================
                ASSIGNMENT SUCCESS
            ============================================= */}

            {acceptResult &&
              acceptResult.success && (

                <div className="success-message">

                  <div className="success-check">
                    ✓
                  </div>

                  <div>
                    <strong>
                      Request accepted successfully.
                    </strong>

                    <p>
                      This request has been added
                      to your active tasks.
                    </p>
                  </div>

                </div>

              )}

            <div className="details-actions">

              {acceptResult?.success ? (

                <>
                  <button
                    className="accept-button"
                    onClick={() =>
                      navigate(
                        '/volunteer-dashboard'
                      )
                    }
                  >
                    View Task
                  </button>

                  <button
                    className="secondary-button"
                    onClick={() =>
                      alert(
                        'Navigation coming soon!'
                      )
                    }
                  >
                    Open Navigation
                  </button>
                </>

              ) : acceptResult?.success === false ? (

                <button
                  className="accept-button"
                  onClick={() =>
                    setSelectedRequest(null)
                  }
                >
                  View Other Requests
                </button>

              ) : (

                <>
                  <button
                    className="accept-button"
                    disabled={
                      !availability || accepting
                    }
                    onClick={() =>
                      handleAccept(
                        selectedRequest
                      )
                    }
                  >
                    {accepting
                      ? 'Accepting...'
                      : 'Accept Request'}
                  </button>

                  <button
                    className="reject-button"
                    disabled={accepting}
                    onClick={() => {
                      setSelectedRequest(null)
                      openRejectModal(
                        selectedRequest
                      )
                    }}
                  >
                    Reject
                  </button>
                </>

              )}

            </div>

            {!availability &&
              !acceptResult && (
                <p className="modal-offline-message">
                  Go available to accept requests.
                </p>
              )}

          </section>

        </div>

      )}

      {/* =====================================================
          REJECT MODAL
      ===================================================== */}

      {isRejectModalOpen && rejectRequest && (

        <div
          className="details-overlay"
          onMouseDown={closeRejectModal}
        >

          <section
            className="reject-modal"
            onMouseDown={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="details-close"
              onClick={closeRejectModal}
            >
              ×
            </button>

            <div className="reject-modal-icon">
              !
            </div>

            <h2>
              Reject this request?
            </h2>

            <p className="reject-modal-subtitle">
              Please tell us why you are unable to
              accept this request.
            </p>

            <div className="reason-list">

              {rejectionReasons.map(
                (reason) => (

                  <label
                    className={`reason-option ${
                      selectedReason === reason
                        ? 'selected'
                        : ''
                    }`}
                    key={reason}
                  >

                    <input
                      type="radio"
                      name="rejectReason"
                      value={reason}
                      checked={
                        selectedReason === reason
                      }
                      onChange={(e) => {
                        setSelectedReason(
                          e.target.value
                        )
                        setRejectError('')
                      }}
                    />

                    <span>
                      {reason}
                    </span>

                  </label>

                )
              )}

            </div>

            <label className="note-label">
              Additional note
            </label>

            <textarea
              value={note}
              onChange={(e) => {
                setNote(e.target.value)
                setRejectError('')
              }}
              placeholder="Add any additional information..."
              rows={3}
            />

            {rejectError && (

              <div className="validation-error">
                {rejectError}
              </div>

            )}

            <div className="reject-modal-actions">

              <button
                className="secondary-button"
                onClick={closeRejectModal}
              >
                Cancel
              </button>

              <button
                className="confirm-reject"
                onClick={confirmRejection}
              >
                Confirm Rejection
              </button>

            </div>

          </section>

        </div>

      )}

    </main>
  )
}