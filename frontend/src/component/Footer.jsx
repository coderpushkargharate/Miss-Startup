import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer-bg text-dark pt-5 pb-3" id="Footer">
      <div className="container">
        <div className="row mx-0 mx-md-5">
          {/* Company Section */}
          <div className="col-12 col-md-3 mb-4">
            <Link to="#" className="text-white text-decoration-none">
              <img src="src/assets/Logo/logo-white.png" alt="" className="img-fluid w-75" />
            </Link>
            <p className="mb-1 mt-3">
              <Link to="#" className="text-white text-decoration-none d-block">
                <i className="bi bi-geo-alt-fill"></i> 500 Treat Ave, Suite 200<br />
                San Francisco, CA 94110
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
            <div className="d-flex gap-3" id="socialmediaimg">
              <Link to="#" className="text-white"><i className="bi bi-facebook"></i></Link>
              <Link to="#" className="text-white"><i className="bi bi-instagram"></i></Link>
              <Link to="#" className="text-white"><i className="bi bi-linkedin"></i></Link>
              <Link to="#" className="text-white"><i><BsTwitterX /></i></Link>
            </div>
          </div>

          {/* Platform Section */}
          <div className="col-6 col-md-3 mb-4 ps-lg-5">
            <h5 className="text-uppercase mb-3">Platform</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white text-decoration-none">Browse library</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Role IQ</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Skill IQ</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Partner Program</Link></li>
              <li><Link to="/FAQ" className="text-white text-decoration-none">Faq</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-6 col-md-3 mb-4 ps-lg-5">
            <h5 className="text-uppercase mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/AboutUs" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Pricing</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Blog</Link></li>
              <li><Link to="/ContactUs" className="text-white text-decoration-none">Contact Us</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Career</Link></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="col-6 col-md-3 mb-4 ps-lg-5">
            <h5 className="text-uppercase mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-white text-decoration-none">Security</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Media Kit</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Library</Link></li>
              <li><Link to="#" className="text-white text-decoration-none">Guides</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="d-flex justify-content-center justify-content-md-end mt-4">
          <div className="text-white">
            <Link to="#" className="text-white text-decoration-none mx-2">Privacy Policy</Link> |
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
