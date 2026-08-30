import { useEffect, useMemo, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import {
  collection,
  onSnapshot,
  doc,
  runTransaction,
  updateDoc,
  arrayUnion,
  serverTimestamp,
} from 'firebase/firestore'

import { auth, db } from '../firebase'

import "../styles/VolunteerRequests.css"


/*
  ============================================================
  VOLUNTEER CONSTANTS
  ============================================================
*/

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


/*
  ============================================================
  TIME FORMATTER
  ============================================================
*/

const formatRequestTime = (createdAt) => {

  if (!createdAt) {
    return 'Just now'
  }

  let date

  if (createdAt?.toDate) {
    date = createdAt.toDate()
  } else if (createdAt instanceof Date) {
    date = createdAt
  } else {
    date = new Date(createdAt)
  }

  if (Number.isNaN(date.getTime())) {
    return 'Just now'
  }

  const diffMs = Date.now() - date.getTime()

  const diffMinutes = Math.floor(
    diffMs / 60000
  )

  if (diffMinutes < 1) {
    return 'Just now'
  }

  if (diffMinutes === 1) {
    return '1 min ago'
  }

  if (diffMinutes < 60) {
    return `${diffMinutes} min ago`
  }

  const diffHours = Math.floor(
    diffMinutes / 60
  )

  if (diffHours === 1) {
    return '1 hr ago'
  }

  if (diffHours < 24) {
    return `${diffHours} hrs ago`
  }

  const diffDays = Math.floor(
    diffHours / 24
  )

  if (diffDays === 1) {
    return '1 day ago'
  }

  return `${diffDays} days ago`
}


/*
  ============================================================
  FIRESTORE REQUEST → UI REQUEST
  ============================================================
*/

const convertFirestoreRequest = (docSnap) => {

  const data = docSnap.data()

  return {
    id: docSnap.id,

    type: data.type || 'General Assistance',

    priority: data.priority || 'NORMAL',

    description:
      data.description ||
      'Warkari needs assistance.',

    distance:
      typeof data.distance === 'number'
        ? data.distance
        : 1.0,

    time: formatRequestTime(
      data.createdAt
    ),

    skills:
      Array.isArray(data.skills)
        ? data.skills
        : [],

    location:
      data.location ||
      'Request location',

    status:
      data.status ||
      'available',

    warkariId:
      data.warkariId || null,

    assignedVolunteerId:
      data.assignedVolunteerId ||
      null,

    assignedAt:
      data.assignedAt || null,

    rejectedBy:
      Array.isArray(data.rejectedBy)
        ? data.rejectedBy
        : [],

    createdAt:
      data.createdAt || null,
  }
}


/*
  ============================================================
  COMPONENT
  ============================================================
*/

export default function VolunteerRequests() {

  const navigate = useNavigate()


  /*
    ============================================================
    STATE
    ============================================================
  */

  const [requests, setRequests] = useState([])

  const [typeFilter, setTypeFilter] =
    useState('All')

  const [priorityFilter, setPriorityFilter] =
    useState('All')

  const [distanceFilter, setDistanceFilter] =
    useState('Within 5 km')

  const [sortBy, setSortBy] =
    useState('Nearest')

  const [selectedRequest, setSelectedRequest] =
    useState(null)

  const [availability, setAvailability] =
    useState(true)

  const [accepting, setAccepting] =
    useState(false)

  const [acceptResult, setAcceptResult] =
    useState(null)

  const [isRejectModalOpen, setIsRejectModalOpen] =
    useState(false)

  const [rejectRequest, setRejectRequest] =
    useState(null)

  const [selectedReason, setSelectedReason] =
    useState('')

  const [note, setNote] =
    useState('')

  const [rejectError, setRejectError] =
    useState('')


  /*
    ============================================================
    CURRENT VOLUNTEER
    ============================================================
  */

  const volunteerId =
    auth.currentUser?.uid || null


  /*
    ============================================================
    FIRESTORE REAL-TIME REQUESTS
    ============================================================
  */

  useEffect(() => {

    const requestsRef =
      collection(db, 'helpRequests')

    const unsubscribe =
      onSnapshot(

        requestsRef,

        (snapshot) => {

          const firebaseRequests =
            snapshot.docs.map(
              convertFirestoreRequest
            )

          setRequests(firebaseRequests)

        },

        (error) => {

          console.error(
            '🔥 Error loading help requests:',
            error
          )

        }
      )

    return () => unsubscribe()

  }, [])


  /*
    ============================================================
    FILTER + SORT
    ============================================================
  */

  const filteredRequests = useMemo(() => {

    let result = requests.filter(
      (request) =>
        request.status === 'available'
    )


    /*
      Don't show requests that this volunteer
      has personally rejected.
    */

    if (volunteerId) {

      result = result.filter(
        (request) =>
          !request.rejectedBy?.includes(
            volunteerId
          )
      )

    }


    /*
      TYPE FILTER
    */

    if (typeFilter !== 'All') {

      result = result.filter(
        (request) =>
          request.type === typeFilter
      )

    }


    /*
      PRIORITY FILTER
    */

    if (priorityFilter !== 'All') {

      result = result.filter(
        (request) =>
          request.priority ===
          priorityFilter.toUpperCase()
      )

    }


    /*
      DISTANCE FILTER
    */

    const maxDistance =
      distanceFilter === 'Within 1 km'
        ? 1
        : distanceFilter === 'Within 2 km'
          ? 2
          : 5

    result = result.filter(
      (request) =>
        request.distance <= maxDistance
    )


    /*
      SORT — NEAREST
    */

    if (sortBy === 'Nearest') {

      result.sort(
        (a, b) =>
          a.distance - b.distance
      )

    }


    /*
      SORT — PRIORITY
    */

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


    /*
      SORT — NEWEST
    */

    if (sortBy === 'Newest') {

      result.sort((a, b) => {

        const getTime = (request) => {

          if (
            request.createdAt?.toMillis
          ) {
            return request.createdAt.toMillis()
          }

          if (
            request.createdAt?.toDate
          ) {
            return request.createdAt
              .toDate()
              .getTime()
          }

          return 0
        }

        return getTime(b) - getTime(a)

      })

    }


    return result

  }, [
    requests,
    typeFilter,
    priorityFilter,
    distanceFilter,
    sortBy,
    volunteerId,
  ])


  /*
    ============================================================
    OPEN REQUEST DETAILS
    ============================================================
  */

  const openRequestDetails =
    (request) => {

      setSelectedRequest(request)

      setAcceptResult(null)

    }


  /*
    ============================================================
    ACCEPT REQUEST
    ============================================================
  */

  const handleAccept =
    async (request) => {

      if (
        !availability ||
        accepting
      ) {
        return
      }


      if (!volunteerId) {

        setAcceptResult({

          success: false,

          message:
            'Please login again.',

          description:
            'Your volunteer account could not be found.',

        })

        return

      }


      setAccepting(true)

      setAcceptResult(null)


      try {

        const requestRef =
          doc(
            db,
            'helpRequests',
            request.id
          )


        /*
          ========================================================
          FIRESTORE TRANSACTION

          READ
          ↓
          CHECK AVAILABLE
          ↓
          ASSIGN VOLUNTEER
          ↓
          COMMIT

          This prevents two volunteers from
          accepting the same request.
          ========================================================
        */

        const result =
          await runTransaction(
            db,
            async (transaction) => {

              const requestSnap =
                await transaction.get(
                  requestRef
                )


              if (!requestSnap.exists()) {

                throw new Error(
                  'not_found'
                )

              }


              const currentData =
                requestSnap.data()


              /*
                Someone already accepted it.
              */

              if (
                currentData.status !==
                'available'
              ) {

                throw new Error(
                  'already_assigned'
                )

              }


              /*
                Assign this volunteer.
              */

              transaction.update(
                requestRef,
                {

                  status: 'assigned',

                  assignedVolunteerId:
                    volunteerId,

                  assignedAt:
                    serverTimestamp(),

                }
              )


              return true

            }
          )


        if (result) {

          const updatedRequest = {

            ...request,

            status: 'assigned',

            assignedVolunteerId:
              volunteerId,

          }


          setSelectedRequest(
            updatedRequest
          )


          setAcceptResult({

            success: true,

            message:
              'Request accepted successfully.',

          })

        }

      } catch (error) {

        console.error(
          '🔥 Error accepting request:',
          error
        )


        /*
          Request was already taken.
        */

        if (
          error.message ===
          'already_assigned'
        ) {

          setAcceptResult({

            success: false,

            message:
              'Request no longer available.',

            description:
              'This request has already been accepted by another volunteer.',

          })

        }

        /*
          Request does not exist.
        */

        else if (
          error.message ===
          'not_found'
        ) {

          setAcceptResult({

            success: false,

            message:
              'Request no longer available.',

            description:
              'This request could not be found.',

          })

        }

        /*
          Other Firebase error.
        */

        else {

          setAcceptResult({

            success: false,

            message:
              'Unable to accept request.',

            description:
              error.message ||
              'Please try again.',

          })

        }

      } finally {

        setAccepting(false)

      }

    }


  /*
    ============================================================
    REJECT MODAL
    ============================================================
  */

  const openRejectModal =
    (request) => {

      setRejectRequest(request)

      setSelectedReason('')

      setNote('')

      setRejectError('')

      setIsRejectModalOpen(true)

    }


  /*
    ============================================================
    CLOSE REJECT MODAL
    ============================================================
  */

  const closeRejectModal =
    () => {

      setIsRejectModalOpen(false)

      setRejectRequest(null)

      setSelectedReason('')

      setNote('')

      setRejectError('')

    }


  /*
    ============================================================
    CONFIRM REJECTION
    ============================================================
  */

  const confirmRejection =
    async () => {

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


      if (!volunteerId) {

        setRejectError(
          'Please login again before rejecting a request.'
        )

        return

      }


      try {

        /*
          ========================================================
          STORE REJECTION IN FIRESTORE

          The request remains AVAILABLE.

          Only this volunteer is added to rejectedBy.
          ========================================================
        */

        const requestRef =
          doc(
            db,
            'helpRequests',
            rejectRequest.id
          )


        const rejectionData = {

          volunteerId:

            volunteerId,

          reason:

            selectedReason,

          note:

            note.trim(),

          rejectedAt:

            new Date().toISOString(),

        }


        await updateDoc(
          requestRef,
          {

            rejectedBy:
              arrayUnion(
                rejectionData
              ),

          }
        )


        console.log(
          '✅ Request rejected:',
          rejectionData
        )


        /*
          Remove it immediately from
          this volunteer's visible list.
        */

        setRequests(
          (currentRequests) =>
            currentRequests.filter(
              (request) =>
                request.id !==
                rejectRequest.id
            )
        )


        /*
          Close details if it is open.
        */

        if (
          selectedRequest?.id ===
          rejectRequest.id
        ) {

          setSelectedRequest(null)

        }


        closeRejectModal()

      } catch (error) {

        console.error(
          '🔥 Error rejecting request:',
          error
        )

        setRejectError(
          error.message ||
          'Unable to reject this request. Please try again.'
        )

      }

    }


  /*
    ============================================================
    RENDER
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

          <span className="brand-mark">
            S
          </span>

          <span>
            SevaSetu
          </span>

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
              alert(
                'Notifications coming soon!'
              )
            }
            aria-label="Notifications"
          >
            🔔
          </button>


          <button
            className={
              `availability-pill ${
                availability
                  ? 'online'
                  : 'offline'
              }`
            }
            onClick={() =>
              setAvailability(
                !availability
              )
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
              alert(
                'Profile coming soon!'
              )
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

            <h1>
              Seva Requests
            </h1>

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

            <label>
              Type
            </label>

            <select
              value={typeFilter}
              onChange={(e) =>
                setTypeFilter(
                  e.target.value
                )
              }
            >

              <option>
                All
              </option>

              <option>
                Medical Assistance
              </option>

              <option>
                Food Assistance
              </option>

              <option>
                Water Assistance
              </option>

              <option>
                Navigation Help
              </option>

              <option>
                Shelter Assistance
              </option>

              <option>
                Crowd Management
              </option>

            </select>

          </div>


          <div className="filter-group">

            <label>
              Priority
            </label>

            <select
              value={priorityFilter}
              onChange={(e) =>
                setPriorityFilter(
                  e.target.value
                )
              }
            >

              <option>
                All
              </option>

              <option>
                Critical
              </option>

              <option>
                High
              </option>

              <option>
                Medium
              </option>

              <option>
                Normal
              </option>

            </select>

          </div>


          <div className="filter-group">

            <label>
              Distance
            </label>

            <select
              value={distanceFilter}
              onChange={(e) =>
                setDistanceFilter(
                  e.target.value
                )
              }
            >

              <option>
                Within 1 km
              </option>

              <option>
                Within 2 km
              </option>

              <option>
                Within 5 km
              </option>

            </select>

          </div>


          <div className="filter-group">

            <label>
              Sort
            </label>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value
                )
              }
            >

              <option>
                Nearest
              </option>

              <option>
                Highest Priority
              </option>

              <option>
                Newest
              </option>

            </select>

          </div>

        </section>


        {/* ===================================================
            OFFLINE NOTICE
        =================================================== */}

        {!availability && (

          <div className="offline-notice">

            <span className="offline-icon">
              ●
            </span>

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

            {filteredRequests.map(
              (request) => (

                <article
                  className="request-card"
                  key={request.id}
                  onClick={() =>
                    openRequestDetails(
                      request
                    )
                  }
                >

                  <div className="request-card-main">

                    <div className="request-card-top">

                      <span
                        className={
                          `priority-badge priority-${request.priority.toLowerCase()}`
                        }
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
                        {request.skills[0] ||
                          'General Assistance'}
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
                        openRejectModal(
                          request
                        )
                      }
                    >
                      Reject
                    </button>

                  </div>

                </article>

              )
            )}

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
                className={
                  `priority-badge priority-${selectedRequest.priority.toLowerCase()}`
                }
              >
                {selectedRequest.priority}
              </span>

            </div>


            <div className="details-id">
              {selectedRequest.id}
            </div>


            <div className="details-info-grid">

              <div>

                <span>
                  Distance
                </span>

                <strong>
                  📍 {selectedRequest.distance} km away
                </strong>

              </div>


              <div>

                <span>
                  Requested
                </span>

                <strong>
                  🕐 {selectedRequest.time}
                </strong>

              </div>

            </div>


            <div className="details-section">

              <h3>
                Description
              </h3>

              <p>
                {selectedRequest.description}
              </p>

            </div>


            <div className="details-section">

              <h3>
                Required assistance
              </h3>


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

              <h3>
                Location
              </h3>


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

                <span>
                  ⏳
                </span>

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
                    {acceptResult.message ||
                      'Request no longer available.'}
                  </strong>

                  <p>
                    {acceptResult.description ||
                      'This request has already been accepted by another volunteer.'}
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
                      !availability ||
                      accepting
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

      {isRejectModalOpen &&
        rejectRequest && (

          <div
            className="details-overlay"
            onMouseDown={
              closeRejectModal
            }
          >

            <section
              className="reject-modal"
              onMouseDown={(e) =>
                e.stopPropagation()
              }
            >

              <button
                className="details-close"
                onClick={
                  closeRejectModal
                }
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
                      className={
                        `reason-option ${
                          selectedReason === reason
                            ? 'selected'
                            : ''
                        }`
                      }
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

                  setNote(
                    e.target.value
                  )

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
                  onClick={
                    closeRejectModal
                  }
                >
                  Cancel
                </button>


                <button
                  className="confirm-reject"
                  onClick={
                    confirmRejection
                  }
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