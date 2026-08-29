import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
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

      </Routes>
    </LanguageProvider>
  );
}