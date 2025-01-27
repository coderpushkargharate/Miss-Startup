import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer-bg text-dark pt-5 pb-3" id="Footer">
      <div className="container">
        <div className="row mx-0 mx-md-5">
          {/* Company Section */}
          <div className="col-12 col-md-3 mb-4 ">
            <a href="#" className="text-white text-decoration-none">
              <img src="src/assets/Logo/logo-white.png" alt="" className="img-fluid w-75" />
            </a>
            <p className="mb-1 mt-3">
              <a href="#" className="text-white text-decoration-none d-block">
                <i className="bi bi-geo-alt-fill"></i> 500 Treat Ave, Suite 200<br />
                San Francisco, CA 94110
              </a>
            </p>
            <p className="mb-1">
              <a href="tel:1-702-800-2690" className="text-white text-decoration-none d-block">
                <i className="bi bi-telephone-fill"></i> 1-702-800-2690 (Support)
              </a>
            </p>
            <p className="mb-3">
              <a href="mailto:support@courselog.com" className="text-white text-decoration-none d-block">
                <i className="bi bi-envelope-fill"></i> support@courselog.com
              </a>
            </p>
            <div className="d-flex gap-3" id="socialmediaimg">
              <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="text-white"><i><BsTwitterX /></i></a>
            </div>
          </div>

          {/* Platform Section */}
          <div className="col-6 col-md-3 mb-4 ps-lg-5">
            <h5 className="text-uppercase mb-3">Platform</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Browse library</a></li>
              <li><a href="#" className="text-white text-decoration-none">Role IQ</a></li>
              <li><a href="#" className="text-white text-decoration-none">Skill IQ</a></li>
              <li><a href="#" className="text-white text-decoration-none">Partner Program</a></li>
              <li><a href="/FAQ" className="text-white text-decoration-none">Faq</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-6 col-md-3 mb-4 ps-lg-5">
            <h5 className="text-uppercase mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="/AboutUs " className="text-white text-decoration-none">About Us</a></li>
              <li><a href="/StartupCourse" className="text-white text-decoration-none">Pricing</a></li>
              <li><a href="/Blog" className="text-white text-decoration-none">Blog</a></li>
              <li><a href="/ContactUs" className="text-white text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">Career</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="col-6 col-md-3 mb-4 ps-lg-5">
            <h5 className="text-uppercase mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Security</a></li>
              <li><a href="#" className="text-white text-decoration-none">Media Kit</a></li>
              <li><a href="#" className="text-white text-decoration-none">Library</a></li>
              <li><a href="#" className="text-white text-decoration-none">Guides</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */} 
        <div className="d-flex justify-content-center justify-content-md-end mt-4">
          <div className="text-white">
            <a href="#" className="text-white text-decoration-none mx-2">Privacy Policy</a> |
            <a href="#" className="text-white text-decoration-none mx-2">Terms of Service</a> |
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
