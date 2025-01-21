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



                {/* Cards Section */}
                <div className="container-fluid my-5">
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

                        {/* Row 3 */}
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Be obsessed with customer</h5>
                                        <p className="card-text">
                                            icon1 We trust you to help us gain and retain the trust of
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Speed matters</h5>
                                        <p className="card-text">
                                            You either help the team move ahead fast, or you slow it down.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Respect everyone and everything</h5>
                                        <p className="card-text">
                                            Respect your work, your team, your co-workers and our customers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                                <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Be Humble</h5>
                                        <p className="card-text">
                                            If you are the smartest one in the room, bring up others to speed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="container fluid position-relative" id="Great-Place" mt-5>
                        <h2 className="Great-Placeh2 mt-5 py-3">We are a Great Place to Work!</h2>
                        <p className="Great-Placep w-75">
                            “A great place to work isn't just about the physical environment—it's a culture that fosters growth, collaboration, and fulfilment.
                            It's where every individual is valued, innovation thrives, success is shared, where passion meets purpose and every day is an opportunity to make a difference.” Join us in building Raise.</p>
                            <div className=" cardred">
                                card
                            </div>
                    </div>
                </div>







            </div>


        </>
    );
};

export default AboutUs;
