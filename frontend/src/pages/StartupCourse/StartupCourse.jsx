import React from 'react';
import './StartupCourse.css';

const StartupCourse = () => {
  const courses = [
    {
      title: "Beginner Course",
      description: "Ideal for kids new to programming. Learn the basics of coding and create simple projects.",
      features: [
        "Introduction to Entrepreneurship",
        "Market Research Basics",
        "Business Plan Development",
        "Funding Basics",
      ],
      price: "$49/month",
      buttonText: "Enroll Now",
    },
    {
      title: "Advanced Course",
      description: "For students who want to build on their skills. Advanced concepts and project building.",
      features: [
        "Scaling Your Business",
        "Advanced Marketing Strategies",
        "Financial Management for Growth",
        "International Business Expansion",
      ],
      price: "$99/month",
      buttonText: "Enroll Now",
    },
    {
      title: "Free Trial",
      description: "Get a taste of our courses for free. Limited access to course materials.",
      features: ["Limited course materials", "Sample projects"],
      price: "Free",
      buttonText: "Start Free Trial",
    },
  ];

  return (
    <div className="startup-course mt-5">
      <header className="startup-header pt-lg-5">
        <h1>Startup Courses</h1>
        <p>Empowering entrepreneurs with the right knowledge to succeed.</p>
      </header>
      <div className="card-container mx-lg-5 py-lg-3">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <div className="card-content">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <ul className="course-features">
                {course.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <p className="price">{course.price}</p>
              <button className="enroll-button">{course.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StartupCourse;
