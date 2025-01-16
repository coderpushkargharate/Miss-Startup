import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';  // Assuming you add custom CSS in this file

const Navbar = () => {
  const location = useLocation();

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm ">
      <div className="container">
        {/* Logo on the Left */}
        <Link className="navbar-brand" to="/">
          <img
            src="src/assets/Logo/logo.png" // Replace with your logo path
            alt="Courselog"
            height="50"
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
          <ul className="navbar-nav ">
            {/* Home Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className={`nav-link dropdown-toggle me-4 ${isActive("/")}`}
                to="#"
                id="homeDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                StartupCourse
              </Link>
              <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                <li><Link className="dropdown-item" to="/">Home 1</Link></li>
                <li><Link className="dropdown-item" to="/home2">Home 2</Link></li>
              </ul>
            </li>

            {/* Pages Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className={`nav-link dropdown-toggle me-4 ${isActive("/page1") || isActive("/page2")}`}
                to="#"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Ideas 
              </Link>
              <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                <li><Link className="dropdown-item" to="/mainideas">Page 1</Link></li>
                <li><Link className="dropdown-item" to="/dashboard">Page 2</Link></li>
              </ul>
            </li>

            {/* Blog Link */}
            <li className="nav-item me-5">
              <Link className={`nav-link ${isActive("/blog")}`} to="/blog">
              Stories
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
