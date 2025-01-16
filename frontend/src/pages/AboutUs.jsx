import React from "react";
import "./AboutUs.css";
import { VscTriangleRight } from "react-icons/vsc";

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <header className="about-us-header ">
                <h1 className="pt-5 ps-5">About Us</h1>
                {/* <p>Learn more about our company, mission, and values</p> */}
            </header>

            <div className="row mt-5">

                <div className="col-6 d-flex flex-column">
                    <div className="col-12 py-3 fs-5" id="ourstudy">our study</div>
                    <h2 className="Our-mission">Our Mission is to Provide a World‑class Education.</h2>
                    <p className="Our-mission-p">
                        Online courses designed for creatives and made for everyone. Take a course on Code, Design, or Project.
                    </p>
                </div>
                <div className="col-6 position-relative" id="about-storyimg">
                    <VscTriangleRight className="logo" />
                    {/* <img src="src/assets/AboutUsimg/about-story-bg.png" alt="About Story Background" /> */}
                </div>

            </div>



            <section className="about-us-values mt-5">
                <h2>Our Values</h2>
                <ul>
                    <li>
                        <strong>Integrity:</strong> We operate with honesty and transparency.
                    </li>
                    <li>
                        <strong>Innovation:</strong> We embrace change and continuously
                        improve our products and services.
                    </li>
                    <li>
                        <strong>Customer-Centric:</strong> We are committed to exceeding
                        customer expectations.
                    </li>
                    <li>
                        <strong>Excellence:</strong> We strive for the highest standards in
                        everything we do.
                    </li>
                </ul>
            </section>

            <section className="about-us-team">
                <h2>Our Team</h2>
                <p>
                    Our team consists of dedicated professionals with a diverse set of
                    skills. We work together to deliver exceptional results for our
                    clients. Meet some of the key members:
                </p>
                <div className="team-members">
                    <div className="team-member">
                        <img src="path_to_image" alt="Team Member 1" />
                        <h3>John Doe</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div className="team-member">
                        <img src="path_to_image" alt="Team Member 2" />
                        <h3>Jane Smith</h3>
                        <p>Chief Technology Officer</p>
                    </div>
                    <div className="team-member">
                        <img src="path_to_image" alt="Team Member 3" />
                        <h3>Samuel Lee</h3>
                        <p>Head of Marketing</p>
                    </div>
                </div>
            </section>

            <section className="about-us-contact">
                <h2>Get in Touch</h2>
                <p>
                    If you have any questions or would like to learn more about what we
                    do, feel free to contact us.
                </p>
                <button className="contact-btn">Contact Us</button>
            </section>
        </div>
    );
};

export default AboutUs;
