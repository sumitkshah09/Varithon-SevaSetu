import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/VolunteerMap.css";

const REQUESTS = [
  {
    id: "SOS-104",
    type: "Medical Assistance",
    priority: "HIGH",
    distance: 1.2,
    description: "Warkari needs immediate medical assistance.",
    location: "Wari Camp",
  },
  {
    id: "SOS-115",
    type: "Shelter Assistance",
    priority: "CRITICAL",
    distance: 3.1,
    description: "Family needs immediate temporary shelter support.",
    location: "Palkhi Marg",
  },
  {
    id: "SOS-108",
    type: "Water Assistance",
    priority: "MEDIUM",
    distance: 1.8,
    description: "Group of Warkaris needs drinking water nearby.",
    location: "Seva Camp",
  },
  {
    id: "SOS-111",
    type: "Navigation Help",
    priority: "NORMAL",
    distance: 2.4,
    description: "An elderly Warkari needs help finding the main route.",
    location: "Main Route",
  },
];

const VOLUNTEERS = [
  {
    id: "VOL-01",
    name: "Volunteer",
    status: "Available",
  },
  {
    id: "VOL-02",
    name: "Volunteer",
    status: "Available",
  },
  {
    id: "VOL-03",
    name: "Volunteer",
    status: "Available",
  },
];

const SERVICES = [
  {
    id: "medical-01",
    type: "Medical",
    icon: "🏥",
    location: "Medical Camp",
  },
  {
    id: "food-01",
    type: "Food",
    icon: "🍱",
    location: "Food Seva Centre",
  },
  {
    id: "water-01",
    type: "Water",
    icon: "💧",
    location: "Water Station",
  },
  {
    id: "toilets-01",
    type: "Toilets",
    icon: "🚻",
    location: "Public Toilets",
  },
  {
    id: "shelter-01",
    type: "Shelter",
    icon: "🏠",
    location: "Shelter Centre",
  },
];

const PRIORITY_CLASS = {
  CRITICAL: "critical",
  HIGH: "high",
  MEDIUM: "medium",
  NORMAL: "normal",
};

export default function VolunteerMap() {
  const navigate = useNavigate();

  const [activeFilters, setActiveFilters] = useState({
    requests: true,
    volunteers: true,
    services: true,
  });

  const [distance, setDistance] = useState(5);

  const [selectedRequest, setSelectedRequest] =
    useState(null);

  const [showRequestDetails, setShowRequestDetails] =
    useState(false);

  const [isAvailable, setIsAvailable] = useState(true);

  const toggleFilter = (filter) => {
    setActiveFilters((current) => ({
      ...current,
      [filter]: !current[filter],
    }));
  };

  const visibleRequests = REQUESTS.filter(
    (request) => request.distance <= distance
  );

  const openRequestDetails = () => {
    if (!selectedRequest) return;

    setShowRequestDetails(true);
  };

  const closeRequestDetails = () => {
    setShowRequestDetails(false);
  };

  return (
    <div className="volunteer-map-page">

      {/* =========================================
          HEADER
          ========================================= */}

      <header className="volunteer-header">

        <div className="volunteer-brand">

          <span className="volunteer-brand-mark">
            S
          </span>

          <span>
            SevaSetu
          </span>

        </div>


        <nav className="volunteer-nav">

          <button
            onClick={() =>
              navigate("/volunteer-dashboard")
            }
          >
            Dashboard
          </button>


          <button
            onClick={() =>
              navigate("/volunteer-requests")
            }
          >
            Requests
          </button>


          <button
            onClick={() =>
              navigate("/volunteer-dashboard")
            }
          >
            My Tasks
          </button>


          <button className="active">
            Map
          </button>


          <button>
            Resources
          </button>

        </nav>


        <div className="volunteer-header-actions">

          <button
            type="button"
            className="notification-button"
          >
            🔔
            <span className="notification-dot"></span>
          </button>


          <div className="header-availability">

            <span
              className={
                isAvailable
                  ? "availability-dot available"
                  : "availability-dot offline"
              }
            />

            {isAvailable
              ? "Available"
              : "Offline"}

          </div>


          <button
            type="button"
            className="volunteer-profile-button"
          >

            <span className="volunteer-avatar">
              V
            </span>

            <span className="profile-name">
              Volunteer
            </span>

          </button>

        </div>

      </header>


      {/* =========================================
          MAIN
          ========================================= */}

      <main className="volunteer-map-main">


        {/* PAGE HEADING */}

        <section className="map-page-heading">

          <div>

            <p className="dashboard-label">
              VOLUNTEER COMMAND CENTER
            </p>

            <h1>
              Situational Map
            </h1>

            <p>
              See nearby seva requests, volunteers and
              essential services.
            </p>

          </div>


          <div className="map-availability-card">

            <span
              className={
                isAvailable
                  ? "map-availability-dot available"
                  : "map-availability-dot offline"
              }
            />

            <div>

              <strong>
                CURRENT VOLUNTEER
              </strong>

              <span>
                {isAvailable
                  ? "🟢 You"
                  : "⚪ You"}
              </span>

            </div>

          </div>

        </section>


        {/* =========================================
            MAP AREA
            ========================================= */}

        <section className="situational-map-layout">


          {/* LEFT FILTER PANEL */}

          <aside className="map-filter-panel">

            <div className="filter-heading">

              <h2>
                Map Filters
              </h2>

              <p>
                Choose what you want to see.
              </p>

            </div>


            {/* REQUEST FILTER */}

            <div className="filter-group">

              <button
                type="button"
                className={
                  activeFilters.requests
                    ? "filter-button selected"
                    : "filter-button"
                }
                onClick={() =>
                  toggleFilter("requests")
                }
              >

                <span className="filter-button-left">

                  <span className="filter-icon">
                    🚨
                  </span>

                  Requests

                </span>

                <span className="filter-check">
                  {activeFilters.requests
                    ? "✓"
                    : ""}
                </span>

              </button>


              {activeFilters.requests && (

                <div className="filter-legend">

                  <div>
                    <span className="legend-dot critical-dot"></span>
                    Critical
                  </div>

                  <div>
                    <span className="legend-dot high-dot"></span>
                    High
                  </div>

                  <div>
                    <span className="legend-dot medium-dot"></span>
                    Medium
                  </div>

                  <div>
                    <span className="legend-dot normal-dot"></span>
                    Normal
                  </div>

                </div>

              )}

            </div>


            {/* VOLUNTEER FILTER */}

            <div className="filter-group">

              <button
                type="button"
                className={
                  activeFilters.volunteers
                    ? "filter-button selected"
                    : "filter-button"
                }
                onClick={() =>
                  toggleFilter("volunteers")
                }
              >

                <span className="filter-button-left">

                  <span className="filter-icon">
                    🤝
                  </span>

                  Volunteers

                </span>

                <span className="filter-check">
                  {activeFilters.volunteers
                    ? "✓"
                    : ""}
                </span>

              </button>


              {activeFilters.volunteers && (

                <div className="filter-legend">

                  <div>
                    <span className="legend-dot available-dot"></span>
                    Available
                  </div>

                </div>

              )}

            </div>


            {/* SERVICES FILTER */}

            <div className="filter-group">

              <button
                type="button"
                className={
                  activeFilters.services
                    ? "filter-button selected"
                    : "filter-button"
                }
                onClick={() =>
                  toggleFilter("services")
                }
              >

                <span className="filter-button-left">

                  <span className="filter-icon">
                    🏥
                  </span>

                  Services

                </span>

                <span className="filter-check">
                  {activeFilters.services
                    ? "✓"
                    : ""}
                </span>

              </button>


              {activeFilters.services && (

                <div className="service-filter-list">

                  {SERVICES.map((service) => (

                    <div
                      className="service-filter-item"
                      key={service.id}
                    >

                      <span>
                        {service.icon}
                      </span>

                      {service.type}

                    </div>

                  ))}

                </div>

              )}

            </div>


            {/* DISTANCE */}

            <div className="distance-filter">

              <div className="distance-filter-heading">

                <strong>
                  Distance
                </strong>

                <span>
                  {distance} km
                </span>

              </div>


              <div className="distance-options">

                {[1, 2, 5].map((value) => (

                  <button
                    type="button"
                    key={value}
                    className={
                      distance === value
                        ? "distance-option active"
                        : "distance-option"
                    }
                    onClick={() =>
                      setDistance(value)
                    }
                  >
                    {value} km
                  </button>

                ))}

              </div>

            </div>

          </aside>


          {/* =======================================
              MAP
              ======================================= */}

          <div className="map-container">


            {/* MAP BACKGROUND */}

            <div className="map-surface">

              <div className="map-road road-one"></div>
              <div className="map-road road-two"></div>
              <div className="map-road road-three"></div>
              <div className="map-road road-four"></div>
              <div className="map-road road-five"></div>


              <div className="map-area-label label-one">
                Wari Route
              </div>

              <div className="map-area-label label-two">
                Seva Camp
              </div>

              <div className="map-area-label label-three">
                Palkhi Marg
              </div>

              <div className="map-area-label label-four">
                Main Route
              </div>


              {/* =================================
                  CURRENT VOLUNTEER
                  ================================= */}

              <div className="map-marker volunteer-marker marker-you">

                <span>
                  🟢
                </span>

                <div className="marker-tooltip">
                  <strong>
                    You
                  </strong>

                  <small>
                    Current Volunteer
                  </small>
                </div>

              </div>


              {/* =================================
                  REQUEST MARKERS
                  ================================= */}

              {activeFilters.requests &&
                visibleRequests.map((request, index) => (

                  <button
                    type="button"
                    key={request.id}
                    className={`map-marker request-marker ${PRIORITY_CLASS[request.priority]}`}
                    style={{
                      left: `${22 + index * 15}%`,
                      top: `${27 + (index % 3) * 18}%`,
                    }}
                    onClick={() =>
                      setSelectedRequest(request)
                    }
                    aria-label={`View ${request.id}`}
                  >

                    <span>
                      {request.priority === "MEDIUM"
                        ? "🟡"
                        : request.priority === "NORMAL"
                          ? "🔵"
                          : "🔴"}
                    </span>

                  </button>

                ))}


              {/* =================================
                  OTHER VOLUNTEERS
                  ================================= */}

              {activeFilters.volunteers && (

                <>
                  <div className="map-marker other-volunteer marker-volunteer-one">

                    <span>
                      🟢
                    </span>

                  </div>

                  <div className="map-marker other-volunteer marker-volunteer-two">

                    <span>
                      🟢
                    </span>

                  </div>

                  <div className="map-marker other-volunteer marker-volunteer-three">

                    <span>
                      🟢
                    </span>

                  </div>
                </>

              )}


              {/* =================================
                  SERVICES
                  ================================= */}

              {activeFilters.services && (

                <>
                  <div className="map-marker service-marker service-medical">
                    🏥
                  </div>

                  <div className="map-marker service-marker service-food">
                    🍱
                  </div>

                  <div className="map-marker service-marker service-water">
                    💧
                  </div>

                  <div className="map-marker service-marker service-toilets">
                    🚻
                  </div>

                  <div className="map-marker service-marker service-shelter">
                    🏠
                  </div>
                </>

              )}


              {/* MAP CONTROLS */}

              <div className="map-controls">

                <button type="button">
                  +
                </button>

                <button type="button">
                  −
                </button>

              </div>


              <button
                type="button"
                className="locate-button"
              >
                ◎
                <span>
                  My Location
                </span>
              </button>


              {/* REQUEST PREVIEW */}

              {selectedRequest && (

                <div className="request-map-preview">

                  <button
                    type="button"
                    className="preview-close"
                    onClick={() =>
                      setSelectedRequest(null)
                    }
                  >
                    ×
                  </button>


                  <span
                    className={`priority-badge ${selectedRequest.priority.toLowerCase()}`}
                  >
                    {selectedRequest.priority}
                  </span>


                  <h3>
                    {selectedRequest.type}
                  </h3>


                  <p>
                    {selectedRequest.distance} km
                  </p>


                  <span className="preview-id">
                    {selectedRequest.id}
                  </span>


                  <button
                    type="button"
                    className="view-request-button"
                    onClick={openRequestDetails}
                  >
                    View Request
                  </button>

                </div>

              )}

            </div>

          </div>

        </section>


        {/* =========================================
            LEGEND
            ========================================= */}

        <section className="map-bottom-panel">


          <div className="legend-section">

            <h3>
              SOS REQUESTS
            </h3>

            <div className="legend-items">

              <span>
                <i className="legend-dot critical-dot"></i>
                🔴 Critical
              </span>

              <span>
                <i className="legend-dot high-dot"></i>
                🔴 High
              </span>

              <span>
                <i className="legend-dot medium-dot"></i>
                🟡 Medium
              </span>

              <span>
                <i className="legend-dot normal-dot"></i>
                🔵 Normal
              </span>

            </div>

          </div>


          <div className="legend-section">

            <h3>
              OTHER VOLUNTEERS
            </h3>

            <div className="legend-items">

              <span>
                <i className="legend-dot available-dot"></i>
                🟢 Available
              </span>

            </div>

          </div>


          <div className="legend-section">

            <h3>
              ESSENTIAL SERVICES
            </h3>

            <div className="service-legend">

              <span>🏥 Medical</span>
              <span>🍱 Food</span>
              <span>💧 Water</span>
              <span>🚻 Toilets</span>
              <span>🏠 Shelter</span>

            </div>

          </div>

        </section>

      </main>


      {/* =========================================
          REQUEST DETAILS
          ========================================= */}

      {showRequestDetails && selectedRequest && (

        <div
          className="map-modal-backdrop"
          onClick={closeRequestDetails}
        >

          <div
            className="map-request-details"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="map-modal-close"
              onClick={closeRequestDetails}
            >
              ×
            </button>


            <p className="dashboard-label">
              SOS REQUEST
            </p>


            <div className="request-detail-title">

              <h2>
                {selectedRequest.type}
              </h2>

              <span
                className={`priority-badge ${selectedRequest.priority.toLowerCase()}`}
              >
                {selectedRequest.priority}
              </span>

            </div>


            <div className="request-detail-id">
              {selectedRequest.id}
            </div>


            <p className="request-detail-description">
              {selectedRequest.description}
            </p>


            <div className="request-detail-info">

              <div>
                <span>
                  Distance
                </span>

                <strong>
                  📍 {selectedRequest.distance} km
                </strong>
              </div>


              <div>
                <span>
                  Location
                </span>

                <strong>
                  {selectedRequest.location}
                </strong>
              </div>


              <div>
                <span>
                  Priority
                </span>

                <strong>
                  {selectedRequest.priority}
                </strong>
              </div>


              <div>
                <span>
                  Status
                </span>

                <strong className="request-status">
                  🟢 Open
                </strong>
              </div>

            </div>


            <div className="request-detail-actions">

              <button
                type="button"
                className="secondary-map-button"
                onClick={closeRequestDetails}
              >
                Close
              </button>


              <button
                type="button"
                className="primary-map-button"
                onClick={() =>
                  navigate("/volunteer-requests")
                }
              >
                Open Request Center
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}