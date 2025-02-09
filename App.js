import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LeaveApplication from "./pages/LeaveApplication"; // Import the Leave Application page
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminDashboard from "./pages/AdminDashboard"; // Admin view

const App = () => {
  const [role, setRole] = useState("employee"); // "admin" or "employee"
  return (
    <Router>
      <Navbar /> {/* Navbar is rendered outside Routes */}
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/" element={role === "admin" ? <AdminDashboard /> : <AdminDashboard />} />
        <Route path="/apply-leave" element={<LeaveApplication />} />
      </Routes>
      {/* Footer appears on all pages */}
      <Footer />
    </Router>
  );
};

export default App;
