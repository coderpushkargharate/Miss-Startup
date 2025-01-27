import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
    {
        name: "Chirag",
        handle: "@tweetsbychirag",
        message: "Great experience, fantastic support team! Highly recommended.",
        image: "./src/assets/homeimg/course_image7.jpg",
    },
    {
        name: "Rahul",
        handle: "@rahulspeaks",
        message: "Great experience, fantastic support team! Highly recommended.",
        image: "./src/assets/homeimg/course_image8.jpg",
    },
    {
        name: "Sonia",
        handle: "@soniatweets",
        message: "Super impressed with the service. Thank you for the quick resolution.",
        image: "./src/assets/homeimg/course_image9.jpg",
    },
    {
        name: "Priya",
        handle: "@priyathinks",
        message: "This is the best customer service I have experienced so far. Keep it up!",
        image: "./src/assets/homeimg/course_image7.jpg",
    },
    {
        name: "Vikram",
        handle: "@vikramchats",
        message: "Professional and responsive. Couldn't ask for better assistance!",
        image: "./src/assets/homeimg/course_image8.jpg",
    },
    {
        name: "Aditi",
        handle: "@aditishares",
        message: "Absolutely delightful experience! Will recommend to others.",
        image: "./src/assets/homeimg/course_image9.jpg",
    },
    {
        name: "Rohan",
        handle: "@rohanspeaks",
        message: "Efficient and reliable service, very happy with the outcome.",
        image: "./src/assets/homeimg/course_image7.jpg",
    },
    {
        name: "Neha",
        handle: "@neha_tweets",
        message: "Such a smooth process. Hats off to the team!",
        image: "./src/assets/homeimg/course_image9.jpg",

    },
    
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonialsToShow, setTestimonialsToShow] = useState(4);

    const updateItemsToShow = () => {
        if (window.innerWidth < 798) {
            setTestimonialsToShow(1);
        } else if (window.innerWidth < 1024) {
            setTestimonialsToShow(2);
        } else {
            setTestimonialsToShow(4);
        }
    };

    useEffect(() => {
        updateItemsToShow();
        window.addEventListener("resize", updateItemsToShow);
        return () => window.removeEventListener("resize", updateItemsToShow);
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + testimonialsToShow) % testimonials.length);
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
            <div className="container px-2 testimonials-carousel">
                <div className="testimonials-carousel-inner">
                    {visibleTestimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="card-header pb-3">
                                <img
                                    src={testimonial.image}
                                    alt={`${testimonial.name}'s profile`}
                                    className="profile-image"
                                />
                                <span className="close-icon">✖</span>
                            </div>
                            <h3 className="card-name">{testimonial.name}</h3>
                            <p className="card-handle">{testimonial.handle}</p>
                            <p className="card-message">{testimonial.message}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="carousel-dots">
                {Array.from({ length: Math.ceil(testimonials.length / testimonialsToShow) }).map((_, index) => (
                    <span
                        key={index}
                        className={`carousel-dot ${index === Math.floor(currentIndex / testimonialsToShow) ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
