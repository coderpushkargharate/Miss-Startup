import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/ideas.css"; // Custom styling (optional)

const courses = [
  {
    id: 1,
    category: ["Art", "Design"],
    level: "Intermediate",
    title: "Music Theory Learn New student & Fundamentals",
    price: "$500",
    author: "artincorsese",
    rating: 0,
    image: "src/assets/homeimg/course_image7.jpg",
  },
  {
    id: 2,
    category: ["Data", "Marketing"],
    level: "High",
    title: "Competitive Strategy law for all students",
    price: "Free",
    author: "artincorsese",
    rating: 5,
    image: "src/assets/homeimg/course_image8.jpg",
  },
  {
    id: 3,
    category: ["Digital"],
    level: "Intermediate",
    title: "Machine Learning A-Z: Hands-On Python and Java",
    price: "$89",
    author: "scorsese",
    rating: 0,
    image: "src/assets/homeimg/course_image9.jpg",
  },
  {
    id: 4,
    category: ["Java", "Python"],
    level: "High",
    title: "Strategy law and Organization Foundation",
    price: "$59",
    author: "courselog",
    rating: 0,
    image: "src/assets/homeimg/course_image9.jpg",
  },
  {
    id: 5,
    category: ["Data", "Marketing"],
    level: "Beginner",
    title: "Achieving Advanced in Insights with Big",
    price: "$90",
    author: "margaret",
    rating: 0,
    image: "src/assets/homeimg/course_image7.jpg",
  },
  {
    id: 6,
    category: ["Data", "Math"],
    level: "Intermediate",
    title: "Bases Matemáticas dios Álgebra Ecuacion",
    price: "$500",
    author: "atwood",
    rating: 3,
    image: "src/assets/homeimg/course_image7.jpg",
  },
];

const CourseCard = ({ course }) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="card h-100">
      <img
        src={course.image}
        alt={course.title}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <div className="d-flex mb-2">
          {course.category.map((cat, index) => (
            <span key={index} className="badge bg-primary me-2">
              {cat}
            </span>
          ))}
          <span className={`badge bg-${course.level === "High" ? "danger" : "secondary"}`}>
            {course.level}
          </span>
        </div>
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text text-muted">By {course.author}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold">{course.price}</span>
          <div className="text-warning">
            {"★".repeat(course.rating) + "☆".repeat(5 - course.rating)}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Ideas = () => (
  <div className="container py-5">
    <h2 className="text-center mb-3">Featured Courses</h2>
    <p className="text-center mb-4">Pick a Course to Get Started</p>

    <div className="d-flex justify-content-center mb-4">
      <button className="btn btn-primary mx-2">All Category</button>
      <button className="btn btn-outline-secondary mx-2">Artificial Intelligence</button>
      <button className="btn btn-outline-secondary mx-2">Business Analysis</button>
      <button className="btn btn-outline-secondary mx-2">Computer Science</button>
      <button className="btn btn-outline-secondary mx-2">Design Architect</button>
    </div>

    <div className="row">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>

    <div className="text-center mt-4">
      <button className="btn btn-danger">Browse more courses →</button>
    </div>
  </div>
);

export default Ideas;
