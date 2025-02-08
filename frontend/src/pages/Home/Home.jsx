import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Home/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Ideas from "./Ideas";
import OurMission from "./OurMission";
import Testimonials from "./Testimonials";
import img1 from "./Homeimg/homemade_cakes_4-removebg-preview.png";
import img2 from "./Homeimg/hero_area_pattern_4 (1).png";
import { FaWhatsapp } from "react-icons/fa";
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
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);

  return (
    <>
      <div className="hero-section d-flex align-items-center">
        <div className="container position-relative mt-5">
          <div className="row align-items-center ">
            <div className="col-lg-6 text-center heroimg">
              <img
                src={img1}
                alt="Learning"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6 text-md-start  herotext mt-5">
              <p className="text-muted">Join Our Program Today!</p>
              <h2 className="fw-bold " style={{color:"orange"}}>Empowering Women to Build Their Dreams</h2>
              <p className="text-muted">From Idea to Launch – Your Journey Starts Here!</p>
              <a  href="https://wa.me/9420839096"
                            className="phonenum text-decoration-none text-dark"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                      <button className="btn px-4 py-2 d-flex align-items-center"style={{backgroundColor:"orange",fontSize:"18px",fontWeight:"bold"}}><FaWhatsapp style={{fontSize:"30px"}} className="me-2"/> WhatApp Us </button></a>
            </div>
          </div>
          <div className="position-absolute imganimation">
            <img src={img2} alt="Background Pattern" className="img-fluid" />
          </div>
        </div>
      </div>
      <Ideas />
      <OurMission />
      <Testimonials />
    </>
  );
};

export default Home;