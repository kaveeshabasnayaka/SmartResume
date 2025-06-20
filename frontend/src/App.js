import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import WelcomePage from "./pages/WelcomePage";
import TemplateSelectionPage from "./pages/TemplateSelectionPage";
import TemplateForm from "./pages/TemplateForm";
import TemplatePreview from "./pages/TemplatePreview";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <WelcomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/templates"
          element={
            <ProtectedRoute>
              <TemplateSelectionPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/template/:id"
          element={
            <ProtectedRoute>
              <TemplateForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/preview"
          element={
            <ProtectedRoute>
              <TemplatePreview />
            </ProtectedRoute>
          }
        />

        {/* Catch-all Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
