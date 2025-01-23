// import React from "react";
// App.js or your main component
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import CountUp from "react-countup"; // Make sure to install react-countup
import "./AboutUs.css";
import { VscTriangleRight } from "react-icons/vsc";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import { FaStickyNote } from "react-icons/fa";
import { FaDigitalTachograph } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { TiTickOutline } from "react-icons/ti";
import { CiMail } from "react-icons/ci";

const AboutUs = () => {
    const values = [
        {
            title: "Customer First",
            description: "We are about customers. You first, simple.",
            icon: "bi-people",
        },
        {
            title: "Push Boundaries",
            description:
                "We go above and beyond to solve your problems and build solutions for you.",
            icon: "bi-lightning",
        },
        {
            title: "Respect Risk",
            description:
                "We manage your hard-earned money with care and honesty.",
            icon: "bi-shield-check",
        },
        {
            title: "One Team",
            description:
                "We take care of our biggest asset – our people. We love our team.",
            icon: "bi-people-fill",
        },
        {
            title: "Be Genuine",
            description:
                "We’re open and transparent in our communication. We say it like it is, no mumbo jumbo.",
            icon: "bi-chat-dots",
        },
        {
            title: "Think Digital",
            description:
                "Technology should make your life easier. And we make that happen.",
            icon: "bi-cpu",
        },


        { value: 10, suffix: "K+", description: "Happy Customers" },
        { value: 5, suffix: "+", description: "Cities Covered" },
        { value: 50, suffix: "+", description: "Dishes Served Daily" },
        { value: 98, suffix: "%", description: "Customer Satisfaction" },
    ];


    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Animation easing style
            once: true, // Whether animation should happen only once - while scrolling down
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

    return (
        <div className="container-fluid" id="about">
            {/* Mission Section */}
            <div className="container-fluid">
                <div className="row mx-lg-5 py-lg-4">
                    <div className="col-12 ps-lg-5 col-lg-6 mt-lg-4 d-flex flex-column ">
                        <div className="col-12 py-3 fs-5 " id="ourstudy">
                            Our Journey
                        </div>
                        <h2 className="Our-mission">
                            Our Mission is to Deliver Fresh, Healthy, and Affordable Meals.
                        </h2>
                        <p className="Our-mission-p">
                            We specialize in home-cooked meals for students, professionals, and families, ensuring quality and taste in every bite.
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 mt-5  position-relative" id="Mission-storyimg">
                        <VscTriangleRight className="logo" />
                    </div>
                </div>
            </div>




            {/* Fun Fact Section */}
            <div className="container-flui text-dark py-5">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        {values.slice(-4).map((stat, index) => (
                            <div key={index} className="col-6 col-md-3 text-center mb-4">
                                <h1 className="fw-bold">
                                    <CountUp
                                        start={0}
                                        end={stat.value}
                                        duration={2.5}
                                        separator=","
                                        suffix={stat.suffix}
                                    />
                                </h1>
                                <p>{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Providingbrilliant Section */}
            <div className="container-fluid" id="Providingbrilliant">
                <div className="container">
                    <div className="row px-lg-5">
                        <div className="col-12 col-lg-6 ps-lg-5 py-5" data-aos="fade-right">
                            <button className="Providingbrilliantbutton">Why Choose us</button>
                            <h2 className="Providingbrillianth2">Providing brilliant ideas for your business.</h2>
                            <p className="Providingbrilliantp ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.                            </p>
                            <ul className="Providingbrilliantul">


                                <div className="d-flex">
                                    <div>
                                        <FaDigitalTachograph style={{ fontSize: "80px", color: "#30BD9B", paddingRight: "20px", marginTop: "-19px" }} />
                                    </div>
                                    <div>
                                        <h5>Expertise in Digital Innovation</h5>
                                        <p className="Providingbrilliantp ">  Sollicitudin mauris maecenas gravida eu interdum luctus tellus magnis augue.</p>
                                    </div>
                                </div>



                                <div className="d-flex my-2" style={{ boxShadow: "2px 2px 15px rgb(207, 196, 196)", padding: "0px 15px", borderRadius: "10px" }}><span
                                    style={{
                                        display: "inline-block",
                                        position: "relative", // Added for proper positioning of the overlay icon
                                        borderRadius: "8px", // Optional: Rounded edges
                                        padding: "10px", // Space around the icon
                                        marginLeft: "-15px",
                                    }}
                                >
                                    {/* Base Icon (FaStickyNote) */}
                                    <FaStickyNote style={{ fontSize: "70px", color: "#30BD9B", paddingRight: "20px", marginTop: "-12px" }} />

                                    {/* Overlay Icon (TiTickOutline) */}
                                    <TiTickOutline
                                        style={{
                                            fontSize: "30px",
                                            color: "white", // Changed overlay tick mark color for better contrast
                                            position: "absolute",
                                            top: "30%",
                                            left: "35%",
                                            transform: "translate(-50%, -50%)",
                                        }}
                                    />
                                </span>


                                    <div>
                                        <h5>Proven Track Record of Success</h5>
                                        <p className="Providingbrilliantp ">  Sollicitudin mauris maecenas gravida eu interdum luctus tellus magnis augue.</p>
                                    </div>
                                </div>

                                <div className="d-flex">

                                    <div>
                                        <IoIosPeople style={{ fontSize: "80px", color: "#30BD9B", paddingRight: "20px", marginTop: "-19px" }} />
                                    </div>
                                    <div>
                                        <h5>Dedicated and Experienced Team</h5>
                                        <p className="Providingbrilliantp "> Sollicitudin mauris maecenas gravida eu interdum luctus tellus magnis augue.</p>
                                    </div>
                                </div>

                            </ul>
                        </div>
                        <div className="col-12 col-lg-6 ps-lg-5" data-aos="fade-left">
                            <img
                                src="src/assets/AboutUsimg/img3.png"
                                alt=""
                                id="Providingbrilliantimg"
                                className="img-fluid w-100"
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* Our Values Section */}

            <div className="container-fluid" id="OurValues">
                <div className="container px-lg-5  py-5" >
                    <h2 className=" OurValuesh2 mb-4  text-center py-3 pb-4">Our Values</h2>
                    <div className="row g-5">
                        {values.slice(0, 6).map((value, index) => (
                            <div key={index} className="col-md-6 px-5 mb-4">
                                <div className="d-flex  ">
                                    <i
                                        className={`bi ${value.icon} fs-1 mb-3 pe-3 `}
                                        style={{ color: "#28a745" }}
                                    ></i>
                                    <div>
                                        <h5>{value.title}</h5>
                                        <p className="text-muted">{value.description}</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/*  Our Culture Cards Section */}
            <div className="container-fluid p-5" id="OurCulture">
                <div className="container">
                    <h2 className="OurCultureh2 text-center mb-4">Our Culture</h2>
                    <p className="text-center mb-5">
                        People and culture are the most important aspects of our business. We are looking for team members just like us, in simple words - good people to work with who demonstrate the following personality traits:
                    </p>
                    {/* Row 1 */}
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                            <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Passionate about the business</h5>
                                    <p className="card-text">
                                        Do it because you are passionate about it, not because it's your job.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                            <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Open culture & conversations</h5>
                                    <p className="card-text">
                                        You are among all of us, and we all are with you.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                            <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Talent and Competency</h5>
                                    <p className="card-text">
                                        We believe in skills and competency, over certifications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                            <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
                                <div className="card-body text-center">
                                    <h5 className="card-title">Talent and Competency</h5>
                                    <p className="card-text">
                                        We believe in skills and competency, over certifications.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-fluid">
                <div className="container mailid">
                    <div className="conatiner row ">

                        <div className="col-6 ">
                            <h2>Seize the digital spotlight and boost your business with Digancy.</h2>
                        </div>
                        <div className="col-6">
                            <div><p>CUSTOMER SUPPORT</p></div>
                            <div>
                                <span style={{
                                    backgroundColor: "#30BD9B",
                                    borderRadius: "50%",
                                    padding: "15px",
                                    display: "inline-block"
                                }}>
                                    <CiMail style={{ fontSize: "40px", color: "#ffffff" }} />
                                </span>
                                hello@yourdomain.tld
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AboutUs;