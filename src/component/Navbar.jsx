import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img
            src="https://via.placeholder.com/120x40" // Replace with your logo
            alt="Courselog"
            height="40"
          />
        </a>

        {/* Toggle Button */}
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

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Dropdown - All Categories */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="categoriesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                <li><a className="dropdown-item" href="#">Category 1</a></li>
                <li><a className="dropdown-item" href="#">Category 2</a></li>
              </ul>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-auto">
            <input
              className="form-control me-2 search-bar"
              type="search"
              placeholder="Search for courses"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          <ul className="navbar-nav">
            {/* Dropdown - Home */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="homeDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </a>
              <ul className="dropdown-menu" aria-labelledby="homeDropdown">
                <li><a className="dropdown-item" href="#">Home 1</a></li>
                <li><a className="dropdown-item" href="#">Home 2</a></li>
              </ul>
            </li>

            {/* Dropdown - Pages */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="pagesDropdown">
                <li><a className="dropdown-item" href="#">Page 1</a></li>
                <li><a className="dropdown-item" href="#">Page 2</a></li>
              </ul>
            </li>

            {/* Blog */}
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>

            {/* Try for Free Button */}
            <li className="nav-item">
              <a href="#" className="btn btn-try-free mx-3">
                Try for free →
              </a>
            </li>

            {/* User Icon */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="bi bi-person-circle"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
