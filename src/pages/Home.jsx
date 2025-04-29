import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="logo-row">
        <img
          src="/a4ht-logo.png"
          alt="AI for Humanity Tech Logo"
          className="logo"
        />
        <img src="/msu-logo.png" alt="MSU Logo" className="logo" />
      </div>

      <h1 className="main-heading">
        Welcome to the
        <br />
        Student Volunteer Portal
      </h1>

      <p className="tagline">
        Connecting MSU students with nonprofit opportunities.
      </p>

      <div className="button-row">
        <button className="main-button" onClick={() => navigate("/login")}>
          Log In
        </button>
        <button className="main-button" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}
