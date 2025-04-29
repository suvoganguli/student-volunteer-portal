import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* Home with logos and welcome */}
        <Route path="/login" element={<Login />} /> {/* Login form */}
        <Route path="/signup" element={<Signup />} /> {/* Signup form */}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* Main user area */}
        <Route path="/profile" element={<Profile />} />{" "}
        {/* Extended Profile form */}
        <Route path="*" element={<h2>404 – Page Not Found</h2>} />{" "}
        {/* Fallback */}
      </Routes>
    </Router>
  );
}

export default App;
