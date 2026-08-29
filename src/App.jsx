import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RoleSelection from "./pages/RoleSelection";
import Organisers from "./pages/Organisers";
import OrganizerDashboard from "./pages/OrganizerDashboard";

import VolunteerLogin from "./pages/VolunteerLogin";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import VolunteerRequests from "./pages/VolunteerRequests";
import VolunteerMap from "./pages/VolunteerMap";
import VolunteerProfile from "./pages/VolunteerProfile";

export default function App() {
  return (
    <Routes>

      {/* =========================================
          MAIN / COMMON PAGES
          ========================================= */}

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/role-selection"
        element={<RoleSelection />}
      />


      {/* =========================================
          ORGANISER
          ========================================= */}

      <Route
        path="/organisers"
        element={<Organisers />}
      />

      <Route
        path="/organizer-dashboard"
        element={<OrganizerDashboard />}
      />


      {/* =========================================
          VOLUNTEER
          ========================================= */}

      <Route
        path="/volunteer-login"
        element={<VolunteerLogin />}
      />

      <Route
        path="/volunteer-dashboard"
        element={<VolunteerDashboard />}
      />

      <Route
        path="/volunteer-requests"
        element={<VolunteerRequests />}
      />

      <Route
        path="/volunteer-map"
        element={<VolunteerMap />}
      />

      <Route
        path="/volunteer-profile"
        element={<VolunteerProfile />}
      />

    </Routes>
  );
}