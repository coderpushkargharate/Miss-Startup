import React from "react";
import CountUp from "react-countup"; // Make sure to install react-countup
import "./AboutUs.css";
import { VscTriangleRight } from "react-icons/vsc";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

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
                {/* Row 2 */}
                <div className="row mx-1">
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
    );
};

export default AboutUs;
 