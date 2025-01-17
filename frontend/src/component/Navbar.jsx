import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';  // Assuming you add custom CSS in this file

const Navbar = () => {
  const location = useLocation();

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar navbar-expand-lg  navbar-light bg-white shadow-sm fixed-top">
      <div className="container ">
        {/* Logo on the Left */}
        <Link className="navbar-brand" to="/">
          <img
            src="src/assets/Logo/logo.png" // Replace with your logo path
            alt="Courselog"
          />
        </Link>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links on the Right */}
        <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
          <ul className="navbar-nav">
            {/* Home Dropdown */}
            {/* Pages Dropdown */}
            {/* About Link */}
            <li className="nav-item me-5">
              <Link className={`nav-link ${isActive("/startupcourse")}`} to="/startupcourse">
                StartupCourse
              </Link>
            </li>

            {/* Pages Dropdown */}
            {/* About Link */}
            <li className="nav-item me-5">
              <Link className={`nav-link ${isActive("/Mainideas")}`} to="/Mainideas">
                Ideas
              </Link>
            </li>

            {/* Blog Link */}
            <li className="nav-item me-5">
              <Link className={`nav-link ${isActive("/blog")}`} to="/blog">
                Stories
              </Link>
            </li>

            {/* About Link */}
            <li className="nav-item me-5">
              <Link className={`nav-link ${isActive("/Aboutus")}`} to="/aboutus">
                About
              </Link>
            </li>

            {/* Login Link */}
            <li className="nav-item me-5">
              <Link className={`nav-link ${isActive("/login")}`} to="/login">
                <button>Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
