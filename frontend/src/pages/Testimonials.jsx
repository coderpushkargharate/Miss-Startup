import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
    {
        name: "Chirag",
        handle: "@tweetsbychirag",
        message: "Thanks for detail explanation and reaching out on behalf of me. You made me your lifetime customer. #CustomerService at its best."
    },
    {
        name: "Chirag",
        handle: "@tweetsbychirag",
        message: "Thanks for detail explanation and reaching out on behalf of me. You made me your lifetime customer. #CustomerService at its best."
    },
    {
        name: "Chirag",
        handle: "@tweetsbychirag",
        message: "Thanks for detail explanation and reaching out on behalf of me. You made me your lifetime customer. #CustomerService at its best."
    },
    {
        name: "Chirag",
        handle: "@tweetsbychirag",
        message: "Thanks for detail explanation and reaching out on behalf of me. You made me your lifetime customer. #CustomerService at its best."
    },
    {
        name: "Chirag",
        handle: "@tweetsbychirag",
        message: "Thanks for detail explanation and reaching out on behalf of me. You made me your lifetime customer. #CustomerService at its best."
    },
    {
        name: "Chirag",
        handle: "@tweetsbychirag",
        message: "Thanks for detail explanation and reaching out on behalf of me. You made me your lifetime customer. #CustomerService at its best."
    },
    {
        name: "Chirag",
        handle: "@tweetsbychirag",
        message: "Thanks for detail explanation and reaching out on behalf of me. You made me your lifetime customer. #CustomerService at its best."
    },
    {
        name: "Chirag",
        handle: "@tweetsbychirag",
        message: "Thanks for detail explanation and reaching out on behalf of me. You made me your lifetime customer. #CustomerService at its best."
    },

    {
        name: "Chirag",
        handle: "@tweetsbychirag",
        message: "Thanks for detail explanation and reaching out on behalf of me. You made me your lifetime customer. #CustomerService at its best."
    },

];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonialsToShow, setTestimonialsToShow] = useState(3);

    const updateItemsToShow = () => {
        if (window.innerWidth < 798) {
            setTestimonialsToShow(1);
        } else if (window.innerWidth < 1024) {
            setTestimonialsToShow(2);
        } else {
            setTestimonialsToShow(3);
        }
    };

    useEffect(() => {
        updateItemsToShow();
        window.addEventListener("resize", updateItemsToShow);
        return () => window.removeEventListener("resize", updateItemsToShow);
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                (prevIndex + testimonialsToShow) % testimonials.length
            );
        }, 3000);
        return () => clearInterval(slideInterval);
    }, [testimonialsToShow]);

    const handleDotClick = (index) => {
        setCurrentIndex(index * testimonialsToShow);
    };

    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsToShow);

    return (
        <div className="testimonials-container py-5">
            <h2 className="testimonials-title pb-5">What our customers say...</h2>
            <div className="testimonials-carousel">
                <div className="testimonials-carousel-inner">
                    {visibleTestimonials.map((testimonial, index) => (
                        <div key={index} className="testimonialcard">
                            <div className="card-header pb-3">
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt="profile"
                                    className="profile-image"
                                />
                                <span className="close-icon">✖</span>
                            </div>
                            <h3 className="card-name">{testimonial.name}</h3>
                            <p className="card-handle">{testimonial.handle}</p>
                            <p className="card-message text-white ">{testimonial.message}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="carousel-dots">
                {Array.from({ length: Math.ceil(testimonials.length / testimonialsToShow) }).map((_, index) => (
                    <span
                        key={index}
                        className={`carousel-dot ${
                            index === Math.floor(currentIndex / testimonialsToShow) ? "active" : ""
                        }`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
