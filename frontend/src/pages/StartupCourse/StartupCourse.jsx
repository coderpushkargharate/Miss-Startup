import React, { useState } from "react";
import "./StartupCourse.css";

const StartupCourse = () => {
  const plans = [
    {
      duration: "1 Month",
      originalPrice: 20000,
      discountedPrice: 15000,
      qrCodeUrl:
        "./src/assets/7857175a-f688-4445-b287-d1af9f4c28dd.jpg", // Replace with actual QR code URL
    },
    {
      duration: "3 Months",
      originalPrice: 60000,
      discountedPrice: 30000,
      qrCodeUrl:
        "./src/assets/7857175a-f688-4445-b287-d1af9f4c28dd.jpg", // Replace with actual QR code URL
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleJoinClick = (index) => {
    setSelectedPlan(index);
  };

  const handleCloseQR = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="startup-course mt-">
      {/* Header Section */}
      <header className="startup-header text-center pt-5 mt-5 px-3">
        <h2 className="fw-bold mt-5">From Idea to Launch – We’re Here to Guide You Every Step of the Way!</h2>
        <p className="text-muted">
          Our programs are designed to empower women entrepreneurs with the
          skills, mentorship, and support they need to succeed.
        </p>
      </header>

      {/* Main Content */}
      <div className="container py-5">
        {/* 1-Month Program */}
        <div className="row align-items-center g-4">
          <div className="col-lg-6 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QEE9as-w47NfvWoy-xZywdkqn2y_BrtREw&s"
              alt="1-Month Program"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="fw-bold">1-Month Program: Learn To Start Business</h2>
            <p className="text-muted">
            This program is designed to take you on a transformative journey from idea to action, equipping you with the tools and confidence needed to start your own business in just 4 weeks. Whether you’re exploring entrepreneurship for the first time or refining an existing idea, our step-by-step approach ensures you gain clarity and direction. You’ll learn how to identify and validate profitable business ideas that align with your skills and passions, create a compelling brand identity, and craft a unique value proposition that resonates with your audience. Next, you’ll learn the basics of marketing, discovering how to attract and engage your first customers through cost-effective strategies. Finally, you’ll develop a clear launch plan with actionable steps to bring your business to life.
            </p>
            <p className="fst-italic text-primary">
              "Ready to take the first step? Join our 1-Month Startup Program!"
            </p>
          </div>
        </div>

        {/* 3-Month Program */}
        <div className="row align-items-center g-4 mt-5">
          <div className="col-lg-6 order-lg-2 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QEE9as-w47NfvWoy-xZywdkqn2y_BrtREw&s"
              alt="3-Month Program"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6 order-lg-1">
            <h2 className="fw-bold">3-Month Program: Scale Up Your Business</h2>
            <p className="text-muted">
            This comprehensive program is designed to take your business to the next level by covering every stage of growth. Over 3 months, you’ll gain hands-on knowledge and practical skills to start, market, and scale your venture effectively. The program begins with foundational training on launching a business, including idea validation and branding. You’ll then dive into advanced marketing strategies to attract and retain customers, followed by scaling techniques to grow your business sustainably. As part of the experience, you’ll benefit from guest lectures by successful entrepreneurs who will share their real-world insights and lessons learned. Additionally, you’ll have the unique opportunity to visit a thriving startup, gaining firsthand exposure to how successful businesses operate. By the end of the program, you’ll be equipped with a clear growth plan, actionable strategies, and a network of mentors and peers to support your journey toward long-term success.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <section className="pricing-section bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Choose Your Plan</h2>
          <div className="row justify-content-center g-4">
            {/* 1-Month Plan */}
            <div className="col-md-6 col-lg-4">
              <div className="card shadow-sm border-0 p-4 text-center">
                <h3 className="fw-bold">{plans[0].duration}</h3>
                <p className="text-muted">Learn To Start Business</p>
                <div className="pricing mt-3">
                  <span className="fs-4 fw-bold text-success">₹{plans[0].discountedPrice}</span>
                  <span className="fs-5 text-muted text-decoration-line-through ms-2">
                    ₹{plans[0].originalPrice}
                  </span>
                  <span className="fs-6 text-success bg-white px-2 py-1 rounded ms-2">
                    {Math.round(
                      ((plans[0].originalPrice - plans[0].discountedPrice) /
                        plans[0].originalPrice) *
                        100
                    )}
                    % OFF
                  </span>
                </div>
                <button
                  className="btn btn-primary mt-4 w-100"
                  onClick={() => handleJoinClick(0)}
                >
                  Join Now
                </button>
              </div>
            </div>

            {/* 3-Month Plan */}
            <div className="col-md-6 col-lg-4">
              <div className="card shadow-sm border-0 p-4 text-center">
                <h3 className="fw-bold">{plans[1].duration}</h3>
                <p className="text-muted">Scale Up Your Business</p>
                <div className="pricing mt-3">
                  <span className="fs-4 fw-bold text-success">₹{plans[1].discountedPrice}</span>
                  <span className="fs-5 text-muted text-decoration-line-through ms-2">
                    ₹{plans[1].originalPrice}
                  </span>
                  <span className="fs-6 text-success bg-white px-2 py-1 rounded ms-2">
                    {Math.round(
                      ((plans[1].originalPrice - plans[1].discountedPrice) /
                        plans[1].originalPrice) *
                        100
                    )}
                    % OFF
                  </span>
                </div>
                <button
                  className="btn btn-primary mt-4 w-100"
                  onClick={() => handleJoinClick(1)}
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Modal */}
      {selectedPlan !== null && (
        <div className="qr-modal-overlay">
          <div className="qr-modal">
            <button
              className="btn btn-close float-end"
              onClick={handleCloseQR}
            >
              &times;
            </button>
            <h3 className="text-center fw-bold mb-4">
              Scan QR Code for {plans[selectedPlan].duration} Plan
            </h3>
            <div className="text-center">
              <img
                src={plans[selectedPlan].qrCodeUrl}
                alt="QR Code"
                className="img-fluid qr-code"
              />
            </div>
            <p className="text-center text-muted mt-3">
              Please scan the QR code to complete your payment.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartupCourse;