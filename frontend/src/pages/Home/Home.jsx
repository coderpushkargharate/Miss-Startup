import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Home/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Ideas from "./Ideas";
import OurMission from "./OurMission";
import Testimonials from "./Testimonials";
import CounterSection from "./CounterSection";
import img1 from "./Homeimg/homemade_cakes_4-removebg-preview.png";
import img2 from "./Homeimg/hero_area_pattern_4 (1).png";

const Home = () => {
  const [formData, setFormData] = useState({
    childName: "",
    mobileNumber: "",
    email: "",
    state: "",
    sessionMode: "Online",
  });
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendOtp = () => {
    if (formData.mobileNumber.length === 10) {
      setOtpSent(true);
      alert("OTP sent to your mobile number!");
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.childName || !formData.mobileNumber || !formData.email || !formData.state) {
      alert("Please fill all required fields.");
      return;
    }

    if (!otpSent || otp !== "1234") {
      alert("Please enter the correct OTP.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/sessions", formData);
      if (response.status === 200) {
        alert("Thank you for submitting your details.");
        setFormData({
          childName: "",
          mobileNumber: "",
          email: "",
          state: "",
          sessionMode: "Online",
        });
        setOtp("");
        setOtpSent(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to schedule session. Please try again later.");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      once: true, // Whether animation should happen only once
      offset: 200, // Offset (in pixels) from the original trigger point
    });
  }, []);

  return (
    <>
      <div className="hero-section d-flex mt-4">
        <div className="container position-relative mt-5">
          <div className="row align-items-center mt-3">
            <div className="col-lg-6 mt-lg-5 ps-lg-5 heroimg text-center">
              <img
                src={img1}
                alt="Learning"
                className="img-fluid ps-lg-5 ms-lg-5"
                style={{ borderRadius: "15px" }}
              />
            </div>
            <div className="col-lg-6 text-md-start text-center herotext mt-lg-5 ps-lg-5">
              <form
                className="form-container mt-5 mt-lg-1"
                onSubmit={handleSubmit}
                data-aos="fade-up"
              >
                <h2>Book your Free Session</h2>
                <p>Learn from India’s best teachers</p>

                <div className="session-mode">
                  <label>
                    <input
                      type="radio"
                      name="sessionMode"
                      value="Online"
                      checked={formData.sessionMode === "Online"}
                      onChange={handleInputChange}
                    />
                    Online
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="sessionMode"
                      value="Offline"
                      checked={formData.sessionMode === "Offline"}
                      onChange={handleInputChange}
                    />
                    Offline
                  </label>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="childName"
                    placeholder="Enter Name of your Child"
                    value={formData.childName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Enter your Mobile Number"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="send-otp-button"
                  >
                    Send OTP
                  </button>
                </div>

                {otpSent && (
                  <div className="form-group">
                    <input
                      type="text"
                      name="otp"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                  </div>
                )}

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">State</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                  </select>
                </div>

                <button type="submit" className="submit-button px-2 py-1">
                  Schedule a Free Class
                </button>
              </form>
            </div>
            <div className="position-absolute imganimation mt-5">
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <OurMission />
      <Ideas />
      <CounterSection />
      <Testimonials />
    </>
  );
};

export default Home;
