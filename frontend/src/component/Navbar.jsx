import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { MdCall } from "react-icons/md";

const Navbar = () => {
    const location = useLocation();
    const navbarCollapseRef = useRef(null);

    // Function to check if the link is active
    const isActive = (path) => (location.pathname === path ? "active" : "");

    // Function to close the navbar
    const closeNavbar = () => {
        if (navbarCollapseRef.current.classList.contains("show")) {
            navbarCollapseRef.current.classList.remove("show");
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
            <div className="container">
                {/* Logo */}
                <Link className="navbar-brand" to="/">
                    <img src="./src/assets/Logo/download__1_-removebg-preview.png" alt="Courselog" />
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
                <div
                    className="collapse navbar-collapse justify-content-end me-5"
                    id="navbarNav"
                    ref={navbarCollapseRef}
                >
                    {/* Close button for mobile */}
                    <span className="close-btn " onClick={closeNavbar}>
                        &times; <span className="ps-5">Finlec</span>
                    </span>

                    <ul className="navbar-nav">
                        <li className="nav-item me-5 mt-5 mt-lg-0 ">
                            <Link
                                className={`nav-link ${isActive("/startupcourse")}`}
                                to="/startupcourse"
                                onClick={closeNavbar}
                            >
                                StartupCourse
                            </Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link
                                className={`nav-link ${isActive("/Mainideas")}`}
                                to="/Mainideas"
                                onClick={closeNavbar}
                            >
                                Ideas
                            </Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link
                                className={`nav-link ${isActive("/blog")}`}
                                to="/blog"
                                onClick={closeNavbar}
                            >
                                Stories
                            </Link>
                        </li>
                        <li className="nav-item me-5">
                            <Link
                                className={`nav-link ${isActive("/aboutus")}`}
                                to="/aboutus"
                                onClick={closeNavbar}
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                    {/* Contact Section */}
                    <div className="d-flex me-5 align-items-center">
                        <MdCall className="fs-5 me-2" />
                        <a
                            href="https://wa.me/9970753038"
                            className="phonenum text-decoration-none text-dark"
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
