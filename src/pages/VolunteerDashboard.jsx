import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/VolunteerDashboard.css";

const INITIAL_REQUESTS = [
  {
    id: "SOS-104",
    priority: "HIGH",
    type: "Medical Assistance",
    description: "Warkari needs immediate medical assistance.",
    distance: 1.2,
    time: "2 min ago",
    skill: "First Aid preferred",
    location: "Wari Camp, Pune",
  },
  {
    id: "SOS-108",
    priority: "MEDIUM",
    type: "Water Assistance",
    description: "Group of Warkaris needs drinking water nearby.",
    distance: 1.8,
    time: "5 min ago",
    skill: "General assistance",
    location: "Palkhi Marg, Pune",
  },
];

const INITIAL_COMPLETED_TASKS = [
  {
    id: "SOS-101",
    priority: "LOW",
    type: "Water Assistance",
    description: "Water assistance request completed successfully.",
    distance: 0.8,
    skill: "General assistance",
    location: "Wari Route, Pune",
    status: "completed",
  },
];

const STATUS_META = {
  accepted: {
    label: "Accepted",
    icon: "🟢",
    className: "status-accepted",
  },

  on_the_way: {
    label: "On the Way",
    icon: "🟡",
    className: "status-on-the-way",
  },

  arrived: {
    label: "Arrived",
    icon: "🔵",
    className: "status-arrived",
  },

  providing_help: {
    label: "Providing Help",
    icon: "🟠",
    className: "status-helping",
  },

  completed: {
    label: "Resolved",
    icon: "✅",
    className: "status-completed",
  },
};

function TaskCard({
  task,
  onViewTask,
  onNavigate,
}) {
  const status =
    STATUS_META[task.status] ||
    STATUS_META.accepted;

  return (
    <article className="task-card">

      <div className="task-card-top">

        <div>
          <p className="task-category">
            {task.type}
          </p>

          <span
            className={`priority-badge ${task.priority.toLowerCase()}`}
          >
            {task.priority}
          </span>
        </div>

        <span className="task-id">
          {task.id}
        </span>

      </div>


      <div className="task-status-row">

        <span className="task-status-label">
          Status:
        </span>

        <span
          className={`task-status ${status.className}`}
        >
          {status.icon} {status.label}
        </span>

      </div>


      <div className="task-distance">
        📍 {task.distance} km away
      </div>


      <div className="task-actions">

        <button
          type="button"
          className="task-button task-button-primary"
          onClick={() => onViewTask(task)}
        >
          View Task
        </button>

        <button
          type="button"
          className="task-button task-button-secondary"
          onClick={() => onNavigate(task)}
        >
          Open Navigation
        </button>

      </div>

    </article>
  );
}


export default function VolunteerDashboard() {

  const navigate = useNavigate();

  const [isAvailable, setIsAvailable] =
    useState(true);

  const [requests, setRequests] =
    useState(INITIAL_REQUESTS);

  const [activeTasks, setActiveTasks] =
    useState([
      {
        id: "SOS-104",
        priority: "HIGH",
        type: "Medical Assistance",
        description:
          "Warkari needs immediate medical assistance.",
        distance: 1.2,
        location: "Wari Camp, Pune",
        status: "accepted",
        skill: "First Aid preferred",
      },
      {
        id: "SOS-105",
        priority: "MEDIUM",
        type: "Food Assistance",
        description:
          "Food and water assistance requested by a Warkari.",
        distance: 2.1,
        location: "Seva Camp, Pune",
        status: "on_the_way",
        skill: "Food distribution",
      },
    ]);

  const [completedTasks] =
    useState(INITIAL_COMPLETED_TASKS);

  const [taskTab, setTaskTab] =
    useState("active");

  const [selectedTask, setSelectedTask] =
    useState(null);

  const [selectedRequest, setSelectedRequest] =
    useState(null);


  const displayedTasks = useMemo(() => {
    return taskTab === "active"
      ? activeTasks
      : completedTasks;
  }, [
    taskTab,
    activeTasks,
    completedTasks,
  ]);


  const acceptRequest = (request) => {

    if (!isAvailable) return;

    const newTask = {
      ...request,
      status: "accepted",
    };

    setActiveTasks((current) => [
      ...current,
      newTask,
    ]);

    setRequests((current) =>
      current.filter(
        (item) => item.id !== request.id
      )
    );

    setSelectedRequest(null);

    setTaskTab("active");

    setTimeout(() => {
      document
        .getElementById("my-tasks")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };


  const rejectRequest = (request) => {

    setRequests((current) =>
      current.filter(
        (item) => item.id !== request.id
      )
    );

    setSelectedRequest(null);
  };


  const openNavigation = (task) => {

    const destination = encodeURIComponent(
      task.location || task.type
    );

    window.open(
      `https://www.google.com/maps/search/?api=1&query=${destination}`,
      "_blank",
      "noopener,noreferrer"
    );
  };


  const scrollToTasks = () => {

    document
      .getElementById("my-tasks")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };


  return (
    <div className="volunteer-dashboard">


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
            className="active"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
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
            onClick={scrollToTasks}
          >
            My Tasks
          </button>


          <button
            onClick={() =>
              navigate("/volunteer-map")
            }
          >
            Map
          </button>


          <button
            onClick={() =>
              navigate("/volunteer-resources")
            }
          >
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

      <main className="volunteer-main">


        {/* =======================================
            WELCOME
            ======================================= */}

        <section className="volunteer-welcome">

          <div>

            <p className="dashboard-label">
              VOLUNTEER COMMAND CENTER
            </p>

            <h1>
              Welcome back, Volunteer 🤝
            </h1>

            <p>
              Your seva can make someone's journey
              safer today.
            </p>

          </div>


          <div className="availability-card">

            <div className="availability-card-info">

              <span
                className={
                  isAvailable
                    ? "availability-large-dot available"
                    : "availability-large-dot offline"
                }
              />

              <div>

                <strong>
                  {isAvailable
                    ? "You're available"
                    : "You're offline"}
                </strong>

                <span>
                  {isAvailable
                    ? "Receiving nearby requests"
                    : "You're not receiving new requests"}
                </span>

              </div>

            </div>


            <button
              type="button"
              className="availability-toggle"
              onClick={() =>
                setIsAvailable(
                  (current) => !current
                )
              }
            >
              {isAvailable
                ? "Go offline"
                : "Go available"}
            </button>

          </div>

        </section>


        {/* =======================================
            STATISTICS
            ======================================= */}

        <section className="volunteer-stats">

          <div className="stat-card">

            <span className="stat-icon">
              🚨
            </span>

            <div>
              <span>Active Requests</span>
              <strong>
                {activeTasks.length}
              </strong>
            </div>

          </div>


          <div className="stat-card">

            <span className="stat-icon">
              ✓
            </span>

            <div>
              <span>Requests Resolved</span>
              <strong>
                {completedTasks.length}
              </strong>
            </div>

          </div>


          <div className="stat-card">

            <span className="stat-icon">
              🤝
            </span>

            <div>
              <span>Volunteers Nearby</span>
              <strong>24</strong>
            </div>

          </div>


          <div className="stat-card">

            <span className="stat-icon">
              ◷
            </span>

            <div>
              <span>Seva Hours</span>
              <strong>32h</strong>
            </div>

          </div>

        </section>


        {/* =======================================
            NEARBY SEVA REQUESTS
            ======================================= */}

        <section className="dashboard-section">

          <div className="section-heading">

            <div>

              <div className="section-title-row">

                <h2>
                  Nearby seva requests
                </h2>

                <span className="live-status">
                  <span className="live-dot"></span>
                  Live updates
                </span>

              </div>

              <p>
                Help people nearby who currently
                need assistance.
              </p>

            </div>


            <span className="request-count">
              {requests.length} nearby
            </span>

          </div>


          <div className="requests-list">

            {requests.length === 0 ? (

              <div className="requests-empty-state">

                <div className="empty-request-icon">
                  ✓
                </div>

                <h3>
                  No nearby seva requests right now.
                </h3>

                <p>
                  New requests will appear here
                  automatically.
                </p>

              </div>

            ) : (

              requests.map((request) => (

                <article
                  className="seva-request-card"
                  key={request.id}
                >

                  <div className="request-card-header">

                    <div>

                      <span
                        className={`priority-badge ${request.priority.toLowerCase()}`}
                      >
                        {request.priority}
                      </span>

                      <span className="request-id">
                        {request.id}
                      </span>

                    </div>

                  </div>


                  <h3>
                    {request.type}
                  </h3>


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
                      🩺 {request.skill}
                    </span>

                  </div>


                  <div className="request-card-actions">

                    <button
                      type="button"
                      className="view-details-button"
                      onClick={() =>
                        setSelectedRequest(request)
                      }
                    >
                      View Details
                    </button>


                    <button
                      type="button"
                      className="reject-button"
                      onClick={() =>
                        rejectRequest(request)
                      }
                    >
                      Reject
                    </button>


                    <button
                      type="button"
                      className="accept-button"
                      disabled={!isAvailable}
                      onClick={() =>
                        acceptRequest(request)
                      }
                    >
                      Accept Request
                    </button>

                  </div>

                </article>

              ))

            )}

          </div>

        </section>


        {/* =======================================
            MY TASKS
            ======================================= */}

        <section
          id="my-tasks"
          className="dashboard-section my-tasks-section"
        >

          <div className="section-heading">

            <div>

              <h2>
                My Tasks
              </h2>

              <p>
                Track your active seva assignments
                and completed requests.
              </p>

            </div>


            <span className="request-count">
              {displayedTasks.length}{" "}
              {taskTab === "active"
                ? "active"
                : "completed"}
            </span>

          </div>


          {/* Tabs */}

          <div className="task-tabs">

            <button
              type="button"
              className={
                taskTab === "active"
                  ? "task-tab task-tab-active"
                  : "task-tab"
              }
              onClick={() => {
                setTaskTab("active");
                setSelectedTask(null);
              }}
            >
              Active
            </button>


            <button
              type="button"
              className={
                taskTab === "completed"
                  ? "task-tab task-tab-active"
                  : "task-tab"
              }
              onClick={() => {
                setTaskTab("completed");
                setSelectedTask(null);
              }}
            >
              Completed
            </button>

          </div>


          {/* Task cards */}

          <div className="tasks-list">

            {displayedTasks.length === 0 ? (

              <div className="empty-task-state">

                <div className="empty-icon">
                  🤝
                </div>

                <h3>
                  No{" "}
                  {taskTab === "active"
                    ? "active"
                    : "completed"}{" "}
                  tasks
                </h3>

                <p>
                  Your{" "}
                  {taskTab === "active"
                    ? "active"
                    : "completed"}{" "}
                  seva assignments will appear here.
                </p>

              </div>

            ) : (

              displayedTasks.map((task) => (

                <TaskCard
                  key={task.id}
                  task={task}
                  onViewTask={(selected) =>
                    setSelectedTask(selected)
                  }
                  onNavigate={openNavigation}
                />

              ))

            )}

          </div>


          {/* =====================================
              TASK DETAILS
              ===================================== */}

          {selectedTask && (

            <div className="task-detail">

              <div className="task-detail-header">

                <div>

                  <p className="dashboard-label">
                    TASK DETAILS
                  </p>

                  <h3>
                    {selectedTask.type}
                  </h3>

                </div>


                <button
                  type="button"
                  className="task-detail-close"
                  onClick={() =>
                    setSelectedTask(null)
                  }
                >
                  ×
                </button>

              </div>


              <div className="task-detail-grid">

                <div>
                  <span>SOS ID</span>
                  <strong>
                    {selectedTask.id}
                  </strong>
                </div>


                <div>
                  <span>Priority</span>
                  <strong>
                    {selectedTask.priority}
                  </strong>
                </div>


                <div>
                  <span>Status</span>
                  <strong>
                    {STATUS_META[
                      selectedTask.status
                    ]?.icon}{" "}
                    {STATUS_META[
                      selectedTask.status
                    ]?.label}
                  </strong>
                </div>


                <div>
                  <span>Distance</span>
                  <strong>
                    {selectedTask.distance} km away
                  </strong>
                </div>

              </div>


              <div className="task-detail-location">

                <span>
                  📍 Location
                </span>

                <strong>
                  {selectedTask.location}
                </strong>

              </div>


              <p className="task-detail-description">
                {selectedTask.description}
              </p>


              <button
                type="button"
                className="task-button task-button-secondary"
                onClick={() =>
                  openNavigation(selectedTask)
                }
              >
                Open Navigation
              </button>

            </div>

          )}

        </section>


      </main>


      {/* =========================================
          REQUEST DETAILS
          ========================================= */}

      {selectedRequest && (

        <div
          className="modal-backdrop"
          onClick={() =>
            setSelectedRequest(null)
          }
        >

          <div
            className="request-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="modal-close"
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


            <h2>
              {selectedRequest.type}
            </h2>


            <p className="modal-description">
              {selectedRequest.description}
            </p>


            <div className="modal-details">

              <div>
                <span>Request ID</span>
                <strong>
                  {selectedRequest.id}
                </strong>
              </div>


              <div>
                <span>Distance</span>
                <strong>
                  {selectedRequest.distance} km away
                </strong>
              </div>


              <div>
                <span>Requested</span>
                <strong>
                  {selectedRequest.time}
                </strong>
              </div>


              <div>
                <span>Required skill</span>
                <strong>
                  {selectedRequest.skill}
                </strong>
              </div>

            </div>


            <div className="modal-actions">

              <button
                type="button"
                className="reject-button"
                onClick={() =>
                  rejectRequest(selectedRequest)
                }
              >
                Reject
              </button>


              <button
                type="button"
                className="accept-button"
                disabled={!isAvailable}
                onClick={() =>
                  acceptRequest(selectedRequest)
                }
              >
                Accept Request
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}