import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import img1 from './Homeimg/about-story-bg.png';
import img2 from './Homeimg/logo-white.png';
import img3 from './Homeimg/about-story-bg.png';
import img4 from './Homeimg/logo-white.png';
import img5 from './Homeimg/logo-white.png';
import img6 from './Homeimg/about-story-bg.png';
import img7 from './Homeimg/hero_area_pattern_4 (1).png';
import img8 from './Homeimg/logo-white.png';

const testimonials = [
    {
        name: "Chirag",
        handle: "@tweetsbychirag",
        message: "Great experience, fantastic support team! Highly recommended.",
        image: img1,
    },
    {
        name: "Rahul",
        handle: "@rahulspeaks",
        message: "Great experience, fantastic support team! Highly recommended.",
        image: img2,
    },
    {
        name: "Sonia",
        handle: "@soniatweets",
        message: "Super impressed with the service. Thank you for the quick resolution.",
        image: img3,
    },
    {
        name: "Priya",
        handle: "@priyathinks",
        message: "This is the best customer service I have experienced so far. Keep it up!",
        image: img4,
    },
    {
        name: "Vikram",
        handle: "@vikramchats",
        message: "Professional and responsive. Couldn't ask for better assistance!",
        image: img5,
    },
    {
        name: "Aditi",
        handle: "@aditishares",
        message: "Absolutely delightful experience! Will recommend to others.",
        image: img6,
    },
    {
        name: "Rohan",
        handle: "@rohanspeaks",
        message: "Efficient and reliable service, very happy with the outcome.",
        image: img7,
    },
    {
        name: "Neha",
        handle: "@neha_tweets",
        message: "Such a smooth process. Hats off to the team!",
        image: img8,
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
