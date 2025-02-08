import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { BsTwitterX } from "react-icons/bs";
import img from './logoimg/logo-white.png'

const Footer = () => {
  return (
    <footer className="footer-bg text-dark pt-5 pb-3" id="Footer">
      <div className="container">
        <div className="row mx-0 mx-md-5">
          {/* Company Section */}
          <div className="col-12 col-md-3 mb-4">
            <Link to="#" className="text-white text-decoration-none">
              <img src="src/assets/logo7-removebg-preview.png" alt="Logo" className="img-fluid " />
            </Link>
            <p className="mb-1 mt-3">
              <Link to="#" className="text-white text-decoration-none d-block">
                <i className="bi bi-geo-alt-fill"></i> 2nd Floor, Saikripa Building, <br />
                Trimurti Chowk, Pune-46
              </Link>
            </p>
            <p className="mb-1">
              <Link to="tel:1-702-800-2690" className="text-white text-decoration-none d-block">
                <i className="bi bi-telephone-fill"></i> 1-702-800-2690 (Support)
              </Link>
            </p>
            <p className="mb-3">
              <Link to="mailto:support@courselog.com" className="text-white text-decoration-none d-block">
                <i className="bi bi-envelope-fill"></i> support@courselog.com
              </Link>
           
            </p>
          
          </div>

          {/* Platform Section */}
          <div className="col-6 col-md-3 mb-4 ps-lg-5">
            <h5 className="text-white mb-3">Support</h5>
            <ul className="list-unstyled">
              <li><Link to="/FAQ" className="text-white text-decoration-none mt-2">Startup Program</Link></li>
              <li><Link to="/ContactUs" className="text-white text-decoration-none">Ideas </Link></li>
              <li><Link to="/Login" className="text-white text-decoration-none">About Us</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-6 col-md-3 mb-4 ps-lg-5">
            <h5 className="text-white mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/AboutUs" className="text-white text-decoration-none mt-2">About Us</Link></li>
              <li><Link to="/StartupCourse" className="text-white text-decoration-none mt-2">Pricing</Link></li>
              <li><Link to="/Blog" className="text-white text-decoration-none mt-2  ">Blog</Link></li>
              
            </ul>
          </div>

          {/* Resources Section */}
          <div className="col-6 col-md-3 mb-4 ps-lg-5">
           
          <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.6199322736065!2d73.85061839999999!3d18.455557900000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eba80741dcd1%3A0xd02135b384e482ec!2sFinlec%20India%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1737960979240!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="d-flex justify-content-center justify-content-md-end mt-4">
          <div className="text-white">
            <Link to="#" className="text-white text-decoration-none mx-2 mt-2">Privacy Policy</Link> |
            <Link to="#" className="text-white text-decoration-none mx-2">Terms of Service</Link> |
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div className="text-white">
            © 2024 Courselog. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
