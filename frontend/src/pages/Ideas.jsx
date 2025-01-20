import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Ideas = () => {
  const [courses, setCourses] = useState([]);
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isAiCategory, setIsAiCategory] = useState(false);

  const navigate = useNavigate();

  // Define categories with their respective API endpoints
  const categories = [
    // { name: "Food & Beverage", endpoint: "/api/courses" },
    { name: "Artificial Intelligence", endpoint: "/api/ai" },
    { name: "Business", endpoint: "/api/business" },
    { name: "Computer Science", endpoint: "/api/science" },
    { name: "Design Architect", endpoint: "/api/designArchitect" },
  ];

  // Fetch courses based on the selected category endpoint
  const fetchCourses = async (endpoint) => {
    try {
      const response = await axios.get(`http://localhost:5000${endpoint}`);
      setCourses(response.data);
      setDisplayedCourses(response.data.slice(0, 6)); // Initially display 6 courses
      setIsAiCategory(endpoint === "/api/ai");
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  // Handle category button clicks
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchCourses(category.endpoint);
  };

  // Handle "Show More" button click
  const handleShowMore = () => {
    navigate("/mainideas");
  };

  // Load "Food & Beverage" category by default
  useEffect(() => {
    const defaultCategory = categories[0];
    setSelectedCategory(defaultCategory);
    fetchCourses(defaultCategory.endpoint);
  }, []);

  // Handle course card click to view more details
  const handleCardClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" style={{ fontWeight: "700", fontSize: "2rem", color: "#333" }}>
        Explore Courses
      </h2>

      {/* Category Buttons */}
      <div className="d-flex justify-content-center mb-4 flex-wrap">
        {categories.map((category) => (
          <button
            key={category.name}
            className={`btn ${selectedCategory?.name === category.name ? "btn-primary" : "btn-outline-secondary"}`}
            style={{
              margin: "10px",
              borderRadius: "20px",
              padding: "10px 20px",
              fontSize: "1rem",
              fontWeight: "500",
            }}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Course Cards */}
      <div className="row">
        {displayedCourses.length > 0 ? (
          displayedCourses.map((course) => (
            <div key={course._id} className="col-lg-4 col-md-6 mb-4" style={{ cursor: "pointer" }} onClick={() => handleCardClick(course._id)}>
              <div className="card h-100 shadow-sm">
                <img
                  src={course.imageUrl || course.image}
                  alt={course.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover", borderRadius: "8px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ fontWeight: "600", color: "#444" }}>
                    {course.title}
                  </h5>
                 
                    {/* Fill the card body */}
                    <p className="card-text" style={{ flexGrow: "1", fontSize: "0.9rem" }}>
                    {course.description || "No description available."}
                  </p>
                  <p className="text-primary fw-bold" style={{ fontSize: "1.1rem" }}>
                    {course.price}
                  </p>
                
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No courses available. Please select a category.</p>
        )}
      </div>

      {/* Show More Button */}
      {courses.length > 6 && (
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            style={{
              borderRadius: "20px",
              padding: "10px 30px",
              fontSize: "1rem",
              fontWeight: "500",
            }}
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Ideas;
