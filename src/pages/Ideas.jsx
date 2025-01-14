import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Ideas = () => {
  const categories = [
    "All Category",
    "Artificial Intelligence",
    "Business Analysis",
    "Computer Science",
    "Design Architect",
    "Design",
    "Marketing",
    "Digital",
    "Math",
    "Java",
  ];

  const courses = [
    {
      id: 1,
      title: "Music Theory Learn New student & Fundamentals",
      price: "$500",
      level: "Intermediate",
      category: "Design",
      image: "src/assets/homeimg/hero_aera.png",
    },
    {
      id: 2,
      title: "Competitive Strategy law for all students",
      price: "Free",
      level: "High",
      category: "Marketing",
      image: "src/assets/homeimg/hero_aera.png",
    },
    {
      id: 3,
      title: "Machine Learning A-Z: Hands-On Python and Java",
      price: "$89",
      level: "Intermediate",
      category: "Digital",
      image: "src/assets/homeimg/hero_aera.png",
    },
    {
      id: 4,
      title: "Strategy law and Organization Foundation",
      price: "$59",
      level: "High",
      category: "Java",
      image: "src/assets/homeimg/hero_aera.png",
    },
    {
      id: 5,
      title: "Achieving Advanced in Insights with Big",
      price: "$90",
      level: "Beginner",
      category: "Marketing",
      image: "src/assets/homeimg/hero_aera.png",
    },
    {
      id: 6,
      title: "Bases Matemáticas dios Álgebra Ecuacion",
      price: "$500",
      level: "Intermediate",
      category: "Math",
      image: "src/assets/homeimg/hero_aera.png",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Category");

  const filteredCourses =
    selectedCategory === "All Category"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  // Split categories into chunks of 6 for the carousel
  const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]), []);
  const categoryChunks = chunkArray(categories, 6);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Pick a Course to Get Started</h2>

      {/* Category Button Carousel */}
      <div id="categoryCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {categoryChunks.map((chunk, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="d-flex justify-content-center">
                {chunk.map((category) => (
                  <button
                    key={category}
                    className={`btn ${
                      selectedCategory === category
                        ? "btn-primary"
                        : "btn-outline-primary"
                    } mx-2`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#categoryCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#categoryCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Course Cards */}
      <div className="row mt-4">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={course.image}
                  alt={course.title}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">
                    <strong>Price:</strong> {course.price}
                  </p>
                  <p className="card-text">
                    <strong>Level:</strong> {course.level}
                  </p>
                  <p className="card-text">
                    <strong>Category:</strong> {course.category}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No courses found for this category.</p>
        )}
      </div>

      {/* Browse More Button */}
      <div className="text-center">
        <button className="btn btn-secondary">Browse more courses</button>
      </div>
    </div>
  );
};

export default Ideas;
