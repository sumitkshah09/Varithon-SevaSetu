import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import VolunteerDashboard from "./pages/VolunteerDashboard";
import VolunteerRequests from "./pages/VolunteerRequests";
import RoleSelection from "./pages/RoleSelection";

import { LanguageProvider } from "./language/languageContext";

export default function App() {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
}