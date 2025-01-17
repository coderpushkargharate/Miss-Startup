import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const StartupCourse = () => {
  const courses = [
    {
      title: "Beginner Course",
      description: "Ideal for kids new to programming. Learn the basics of coding and create simple projects.",
      price: "$49/month",
      buttonText: "Enroll Now",
    },
    {
      title: "Advanced Course",
      description: "For students who want to build on their skills. Advanced concepts and project building.",
      price: "$99/month",
      buttonText: "Enroll Now",
    },
    {
      title: "Free Trial",
      description: "Get a taste of our courses for free. Limited access to course materials.",
      price: "Free",
      buttonText: "Try Now",
    },
  ];

  return (
    <div className="container my-5">
      <header className="text-center mb-4">
        <h1 className="fw-bold">Startup Courses</h1>
        <p className="text-muted">
          Explore our beginner and advanced courses, and get started with a free trial.
        </p>
      </header>

      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center fw-bold">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <h6 className="text-center text-primary fw-bold">{course.price}</h6>
                <button className="btn btn-primary mt-auto">{course.buttonText}</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center mt-5">
        <p className="text-muted">&copy; {new Date().getFullYear()} Junior Startup. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default StartupCourse;
