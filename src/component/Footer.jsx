import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Company Section */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About</a></li>
              <li><a href="#" className="text-white text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-white text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Platform Section */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Platform</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Browse Library</a></li>
              <li><a href="#" className="text-white text-decoration-none">Role IQ</a></li>
              <li><a href="#" className="text-white text-decoration-none">Skill IQ</a></li>
              <li><a href="#" className="text-white text-decoration-none">Partner Program</a></li>
              <li><a href="#" className="text-white text-decoration-none">Authors</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Library</a></li>
              <li><a href="#" className="text-white text-decoration-none">Guides</a></li>
              <li><a href="#" className="text-white text-decoration-none">Tutorials</a></li>
              <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="col-6 col-md-3 mb-4">
            <h5 className="text-uppercase mb-3">Get in touch</h5>
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
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="d-flex justify-content-between mt-4">
          <div>
            <img src="logo.png" alt="Courselog Logo" height="30" />
          </div>
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
