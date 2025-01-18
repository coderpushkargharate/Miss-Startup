import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';
import { MdCall } from "react-icons/md";

const Navbar = () => {
    const location = useLocation();

    // Function to check if the link is active
    const isActive = (path) => (location.pathname === path ? "active" : "");

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img src="src/assets/Logo/logo.png" alt="Courselog" />
                </Link>

                {/* Mobile Toggler */}
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
                {/* Navbar Links */}
                <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item me-5">
                            <Link className={`nav-link ${isActive("/startupcourse")}`} to="/startupcourse">
                                StartupCourse
                            </Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className={`nav-link ${isActive("/Mainideas")}`} to="/Mainideas">
                                Ideas
                            </Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className={`nav-link ${isActive("/blog")}`} to="/blog">
                                Stories
                            </Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link className={`nav-link ${isActive("/aboutus")}`} to="/aboutus">
                                About
                            </Link>
                        </li>
                    </ul>
                    {/* Contact Section */}
                    <div className="d-flex me-5 align-items-center">
                        <MdCall className="fs-5 me-2" />
                        <a
                            href="https://wa.me/9970753038"
                            className="phonenum text-decoration-none text-dark "
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            9970753038
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
