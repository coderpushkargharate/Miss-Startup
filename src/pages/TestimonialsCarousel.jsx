import React from "react";
import { Carousel } from "react-bootstrap";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      quote:
        "I always knew smokers pay a higher premium, but not to the extent of 40%.",
      name: "Karthik Rangappa",
      position: "VP - Education Services @ Zerodha",
    },
    {
      quote:
        "Now, after being consulted by one of their insurance advisors, you totally won me! Super knowledgeable!",
      name: "Harsh Shah",
      position: "",
    },
    {
      quote:
        "Ditto has made it really simple to buy term insurance in India. Excellent guidance!",
      name: "Arpit Mishra",
      position: "",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1>What Our Customers Say</h1>
        <Carousel indicators={false} controls={false} interval={3000} fade>
          {testimonials.map((item, index) => (
            <Carousel.Item key={index}>
              <div
                style={{
                  minHeight: "300px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
                  "{item.quote}"
                </p>
                <h5>{item.name}</h5>
                <p>{item.position}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
