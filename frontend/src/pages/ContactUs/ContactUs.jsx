import React, { useState } from 'react';
import '../ContactUs/ContactUs.css';
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";


function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);

        // Reset form
        setFormData({
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <div className="container-fluid" id="ContactUs">
                <div className="contact-header">
                    <h1 className='contact-headerh2'>Contact Us</h1>
                    <p className='contact-headerp'>Start the conversation to established good <br /> relationship and business.</p>
                </div>
                <div className="container-fluid" >
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img
                                    src="src/assets/ContactUs/img4.png"
                                    alt="Contact Us"
                                    id="ContactUsimg"
                                />
                            </div>
                            <div className="col-6">
                                <div className="contact-form">
                                    <h2>Send us a message</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                                        tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                    </p>
                                    <form onSubmit={handleSubmit}>
                                        <div style={{ display: "flex", gap: "20px", margin: "20px", }}>
                                            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                                <h5>Name</h5>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="What's your name?"
                                                    required
                                                    className='inbtn'
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
                                                    className='inbtn'
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
                                                    className='inbtn'
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
                                                    className='inbtn'
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
                                                className='inbtn '   
                                            />
                                        </div>
                                        <button type="submit " className="ms-3">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>


                        {/* Map Section */}
                        <div className="row mt-5 py-5">
                            <div className="12">
                                <div>
                                    <img src="src/assets/ContactUs/2983550.jpg" alt="" id="Map" />
                                </div>
                            </div>
                        </div>





                        {/* Get in touch Section */}

                        <div className="container-fluid Get-in-touch">
                            <div className="container text-center my-4 mt-4 mb-5 ">
                                <button className='Get-in-touch mb-5' >Get in touch</button>
                                <div className="row">
                                    {/* Card 1 */}
                                    <div className="col-md-4">
                                        <div className="card">

                                            <div className="card-body">
                                                <a href="#" className="btn ">
                                                    <IoLocationOutline style={{ fontSize: "30px", color: " #30BD9B",marginTop:"8px"}} />
                                                </a>
                                                <h5 className="card-title mt-5">Head Office</h5>
                                                <p className="card-text">
                                                    Jln Cempaka Wangi No 22 <br />
                                                    Jakarta - Indonesia
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="col-md-4">
                                        <div className="card">

                                            <div className="card-body">
                                                <a href="#" className="btn ">
                                                    <FaPhoneAlt style={{ fontSize: "30px", color: " #30BD9B",marginTop:"8px" }} />
                                                </a>
                                                <h5 className="card-title mt-5">Let's Talk</h5>
                                                <p className="card-text">
                                                    Phone : +6221.2002.2012 <br />
                                                    Fax : +6221.2002.2013
                                                </p>

                                            </div>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="col-md-4">
                                        <div className="card">

                                            <div className="card-body">
                                                <a href="#" className="btn ">
                                                    <CiMail style={{ fontSize: "30px", color: " #30BD9B",marginTop:"8px" }} />
                                                </a>
                                                <h5 className="card-title mt-5">Email Support</h5>
                                                <p className="card-text">
                                                    support@yourdomain.tld <br />
                                                    hello@yourdomain.tld
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>




                        {/* MailId Section  */}
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
                </div>
            </div>
        </>
    );
}

export default ContactUs;
