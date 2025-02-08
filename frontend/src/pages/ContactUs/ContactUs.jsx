import React, { useState } from 'react';
import '../ContactUs/ContactUs.css';
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import img1 from './ContactUsimg/img4.png';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Reset error on form submit

        const { name, phone, email, subject, message } = formData;

        // Basic form validation
        if (!name || !phone || !email || !subject || !message) {
            setError("All fields are required.");
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Phone number validation (basic)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phone)) {
            setError("Please enter a valid 10-digit phone number.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log("Form submitted successfully");
                alert("Your message has been sent!");

                // Reset form after successful submission
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            } else {
                setError("Failed to send your message. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="container-fluid" id="ContactUs">
            <div className="contact-header">
                <h1 className="contact-headerh2">Contact Us</h1>
                <p className="contact-headerp">
                    Start the conversation to establish a good <br /> relationship and business.
                </p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={img1} alt="Contact Us" id="ContactUsimg" />
                    </div>

                    <div className="col-lg-6">
                        <div className="contact-form">
                            <h2>Send us a message</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>

                            {error && <div className="alert alert-danger">{error}</div>}

                            <form onSubmit={handleSubmit}>
                                <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                        <h5>Name</h5>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="What's your name?"
                                            required
                                            className="inbtn"
                                        />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                        <h5>Phone</h5>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Contact Number"
                                            required
                                            className="inbtn"
                                        />
                                    </div>
                                </div>

                                <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                        <h5>Email</h5>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Drop us your email"
                                            required
                                            className="inbtn"
                                        />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                        <h5>Subject</h5>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="What's the scoop?"
                                            required
                                            className="inbtn"
                                        />
                                    </div>
                                </div>

                                <div className="form-group px-3">
                                    <h5>Message</h5>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="What's on your mind?"
                                        required
                                        className="inbtn"
                                    />
                                </div>

                                <button type="submit" className="ms-3">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="row mt-5 py-5">
                    <div className="col-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=..."
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Get in Touch Section */}
                <div className="container-fluid Get-in-touch">
                    <div className="container text-center my-4 mt-4 mb-5">
                        <button className="Get-in-touch mb-5">Get in touch</button>
                        <div className="row">
                            {[{ icon: <IoLocationOutline />, title: "Head Office", text: "Jln Cempaka Wangi No 22\nJakarta - Indonesia" },
                              { icon: <FaPhoneAlt />, title: "Let's Talk", text: "Phone: +6221.2002.2012\nFax: +6221.2002.2013" },
                              { icon: <CiMail />, title: "Email Support", text: "hello@yourdomain.tld" }]
                                .map((card, index) => (
                                    <div className="col-md-4" key={index}>
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <a href="#" className="btn">{card.icon}</a>
                                                <h5 className="card-title mt-5">{card.title}</h5>
                                                <p className="card-text">{card.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                {/* Mail ID Section */}
                <div className="container-fluid py-5 position-relative">
                    <div className="container mailid">
                        <div className="d-flex justify-content-around flex-wrap">
                            <div className="">
                                <h2>Seize the digital spotlight and boost your <br /> business with Digancy.</h2>
                            </div>
                            <div className="d-flex">
                                <div className="me-3">
                                    <span style={{
                                        backgroundColor: "#30BD9B",
                                        borderRadius: "50%",
                                        padding: "15px",
                                        display: "inline-block"
                                    }}>
                                        <CiMail style={{ fontSize: "30px", color: "#ffffff" }} />
                                    </span>
                                </div>
                                <div>
                                    <p>CUSTOMER SUPPORT</p>
                                    <span style={{ fontSize: "20px", color: "#30BD9B" }}> hello@yourdomain.tld</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
