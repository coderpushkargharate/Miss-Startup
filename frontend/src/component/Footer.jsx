import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-success text-dark pt-5 pb-3">
      <div className="container ">
        <div className="row mx-5">
          {/* Company Section */}
          <div className="col-6 col-md-3 mb-4">
            {/* <h5 className="text-uppercase mb-3">Company</h5> */}
            <img src="src/assets/Logo/logo-white.png" alt="" className="img-fluid w-75" />

          
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill"></i> 500 Treat Ave, Suite 200<br />
              San Francisco, CA 94110
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill"></i> 1-702-800-2690 (Support)
            </p>
            <p className="mb-3">
              <i className="bi bi-envelope-fill"></i> support@courselog.com
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-white"><i className=""><BsTwitterX /></i></a>
            </div>

          </div>

          {/* Service Section */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Platform</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Browse library</a></li>
              <li><a href="#" className="text-white text-decoration-none">Role IQ</a></li>
              <li><a href="#" className="text-white text-decoration-none">Skill IQ</a></li>
              <li><a href="#" className="text-white text-decoration-none">Partner Program</a></li>
              <li><a href="#" className="text-white text-decoration-none">Authors</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Career</a></li>
              
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="col-6 col-md-3 mb-4">
          <h5 className="text-uppercase mb-3">Resources</h5>
          <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Security</a></li>
              <li><a href="#" className="text-white text-decoration-none">Media Kit</a></li>
              <li><a href="#" className="text-white text-decoration-none">Library</a></li>
              <li><a href="#" className="text-white text-decoration-none">Guides</a></li>
              <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="d-flex justify-content-end mt-4">
          
          <div className="text-white">
            <a href="#" className="text-white text-decoration-none mx-2">Privacy Policy</a> |
            <a href="#" className="text-white text-decoration-none mx-2">Terms of Service</a>
          </div>
          <div className="text-white">
            © 2024 Courselog. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
