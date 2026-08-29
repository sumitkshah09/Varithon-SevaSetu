import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import RoleSelection from "./pages/RoleSelection";

export default function App() {

  return (
    
      <Routes>

        <Route path="/" element={<Home />} />

      <Route
        path="/role-selection"
        element={<RoleSelection />}
      />

      <Route
        path="/volunteer-dashboard"
        element={<VolunteerDashboard />}
      />

      <Route
        path="/volunteer-requests"
        element={<VolunteerRequests />}
      />


      </Routes>
    
  );
}