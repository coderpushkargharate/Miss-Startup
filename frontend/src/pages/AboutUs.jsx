import React from "react";
import CountUp from "react-countup"; // Make sure to install react-countup
import "./AboutUs.css";
// import { MdOutlineFoodBank } from "react-icons/md";
import { VscTriangleRight } from "react-icons/vsc";
const AboutUs = () => {
    const stats = [
        { value: 10, suffix: "K+", description: "Happy Customers" },
        { value: 5, suffix: "+", description: "Cities Covered" },
        { value: 50, suffix: "+", description: "Dishes Served Daily" },
        { value: 98, suffix: "%", description: "Customer Satisfaction" },
    ];

    return (
        <>
        <div className="container-fluid" id="about">
        <div className="container-fluid ">
                {/* Header Section */}
                <header className="about-us-header">
                    <h1 className="pt-5 ps-5">About Us</h1>
                </header>
            </div>
            <div className="about-us-page ">


                {/* Mission Section */}
                <div className="row mt-5">
                    <div className="col-6 d-flex flex-column mt-5">
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
                    <div className="col-6 mt-5 ms-5 position-relative" id="about-storyimg">
                        <VscTriangleRight className="logo " />
                    </div>
                </div>

                {/* Fun Fact Section */}
                <div className="container-flui text-dark py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            {stats.map((stat, index) => (
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
                        <div className="text-center mt-5">
                            <button className="btn btn-primary">Explore Our Menu</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );
};

export default AboutUs;
