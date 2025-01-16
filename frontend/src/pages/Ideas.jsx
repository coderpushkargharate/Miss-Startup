import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Ideas = () => {
  const [courses, setCourses] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Track selected category
  const navigate = useNavigate();

  // Fetch courses from API
  const fetchCourses = async (category) => {
    try {
      const response = await axios.get("http://localhost:5000/api/courses", {
        params: { category: category !== "All" ? category : undefined }, // Pass category only if it's not "All"
      });
      setCourses(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCourses(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleCardClick = (id) => {
    navigate(`/course/${id}`);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" style={{ fontWeight: "700", fontSize: "2rem", color: "#333" }}>
        Ideas
      </h2>

      {/* Category Filter */}
      <div className="mb-4">
        <Slider {...sliderSettings}>
          {["All", "Artificial Intelligence", "Business Analysis", "Computer Science", "Design Architect", "Marketing"].map((category) => (
            <button
              key={category}
              className={`btn ${selectedCategory === category ? "btn-primary" : "btn-outline-secondary"}`}
              style={{ margin: "0 20px" }}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </Slider>
      </div>

      {/* Course Cards */}
      <div className="row">
        {courses.slice(0, visibleCourses).map((course) => (
          <div
            key={course._id}
            className="col-lg-4 col-md-6 mb-4"
            onClick={() => handleCardClick(course._id)}
            style={{ cursor: "pointer" }}
          >
            <div className="card h-100 shadow-sm">
              <img
                src={course.image}
                alt={course.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover", borderRadius: "8px" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ fontWeight: "600", color: "#444" }}>{course.title}</h5>
                <p className="text-muted mb-1" style={{ fontSize: "0.9rem" }}>By {course.author}</p>
                <p className="text-primary fw-bold" style={{ fontSize: "1.1rem" }}>{course.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-4">
        <Link to="/mainideas" className="btn btn-primary">
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default Ideas;
