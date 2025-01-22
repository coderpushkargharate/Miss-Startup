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



                {/* Mission Section */}
                <div className="row mt-5 py-5 mb-5">
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
                    <div className="container py-5">
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
                        
                    </div>
                </div>




                {/* Our Vision Section */}


                <div className="container-fluid  " id="OurVision">
                    <div className="container" >
                        <div className="row " >
                            <div className="col-6">
                                <img src="src/assets/AboutUsimg/post79-edx-about-us-vision.webp" alt=""  id="OurVisionimg"/>
                            </div>
                            <div className="col-6">
                                <h2 className="OurVisionh2">Our Vision</h2>
                                <p className="OurVisionp">2U believes in the power of high-quality online education to create a better future for all.
                                    Through edX, our online learning platform, we see a world where learners everywhere have access to…</p>
                                <ul className="OurVisionul">
                                    <li>Expert-led educational experiences.</li>
                                    <li>Flexible pathways to personal and professional achievement.</li>
                                    <li>Educational opportunities at every investment level.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delivering world-class section */}


                {/* Cards Section */}
                <div className="container-fluid my-5 p-5">
                    <div className="container">
                        <h2 className="text-center mb-4">Our Values and Culture</h2>
                        <p className="text-center mb-5">
                            People and culture are the most important aspects of our business.
                            We are looking for team members just like us, in simple words - good people to work with
                            who demonstrate the following personality traits:
                        </p>

                        {/* Row 1 */}
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Ownership Mindset</h5>
                                        <p className="card-text">
                                            Take accountability for the quality and success of the outcome
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Quality over quantity</h5>
                                        <p className="card-text">
                                            It is fine if you pick up a few things to do, but do them exceedingly well.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Less words, more action</h5>
                                        <p className="card-text">
                                            Believe in something? show it by doing things. Not just by talking about it.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Entrepreneurial Mindset</h5>
                                        <p className="card-text">Be disciplined and have skin in the game.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
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
                        </div>


                    </div>


                </div>







            </div>


        </>
    );
};

export default AboutUs;
