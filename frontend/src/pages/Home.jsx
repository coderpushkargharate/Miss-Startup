import React from "react";
import "../pages/home.css";
import { FaSearch } from "react-icons/fa";
import Ideas from "./Ideas";
import StrengthInNumbers from "./StrengthInNumbers";
import PricingSection from "./PricingSection";
// import Testimonials from "./TestimonialsCarousel";
const Home = () => {
  const handleSearch = () => {
    const query = document.querySelector('.form-control').value;
    console.log("Searching for:", query); // You can replace this with actual search logic
  };

  return (
    <>
      <div className="hero-section d-flex mt-5" style={{ height: "100vh", background: "#f8f9fa" }}>
        <div className="container position-relative mt-5">
          <div className="row align-items-center mt-5">
            {/* Left Section - Image */}
            <div className="col-lg-6 text-center mt-5">
              <img
                src="src/assets/homeimg/hero_aera.png"
                alt="Learning"
                className="img-fluid ps-5"  
                style={{ borderRadius: "15px" }}
              />
            </div>
            {/* Right Section - Text */}
            <div className="col-lg-6 text-md-start text-center herotext  ps-lg-5 ">
              <h5 className="text-danger mb-3">The Leader in Online Learning</h5>
              <h1 className="fw-bold">
                Learn the Skills you <br /> Need to Succeed
              </h1>
              <p className="text-muted mt-3">
                Solve tasks and check the results right away. Courses <br /> so easy it is impossible not to understand.
              </p>
              <div className="search-bar mt-4">
                <div className="input-group ">
                  <input
                    type="text"
                    className="form-control py-3"
                    placeholder="Search for courses"
                  />
                  <button className="btn btn-danger px-4" onClick={handleSearch}>
                  <FaSearch />
                  </button>
                </div>
                <div className="mt-3 text-muted">
                  <p>Position</p>
                </div>
              </div>
            </div>
            <div className="position-absolute imganimation mt-5">
              <img src="src/assets/homeimg/hero_area_pattern_4 (1).png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <Ideas/>
      <StrengthInNumbers/>
      <PricingSection/>
      {/* <Testimonials/> */}
    </>
  );
};

export default Home;
