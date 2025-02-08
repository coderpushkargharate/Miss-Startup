import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { MdCall } from "react-icons/md";
import img1 from './logoimg/logo.png';

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
                    <img src="src/assets/logo7-removebg-preview.png" alt="Courselog" className="Logoimg" />
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
                                Startup Programs
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
                        {/* <li className="nav-item me-5">
                            <Link
                                className={`nav-link ${isActive("/blog")}`}
                                to="/blog"
                                onClick={closeNavbar}
                            >
                                Stories
                            </Link>
                        </li> */}
                        <li className="nav-item me-5">
                            <Link
                                className={`nav-link ${isActive("/aboutus")}`}
                                to="/aboutus"
                                onClick={closeNavbar}
                            >
                                About Us
                            </Link>
                        </li>
                    </ul>
                    {/* Contact Section */}
                    <div className="d-flex me-5 align-items-center phonenummain">
                        <MdCall className="fs-5 me-2" />
                        <a
                            href="https://wa.me/9420839096"
                            className="phonenum text-decoration-none text-dark"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Call Us: 9420839096
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
