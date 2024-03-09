// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import PatientRegistration from "./pages/PatientRegistration.jsx";
import DoctorRegistration from "./pages/DoctorRegistration.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/patient-register" element={<PatientRegistration />} />
        <Route path="/doctor-register" element={<DoctorRegistration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient-register" element={<PatientRegistration />} />
        <Route path="/doctor-register" element={<DoctorRegistration />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
