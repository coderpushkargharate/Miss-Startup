import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/ideas.css"

const Ideas = () => {
  const [courses, setCourses] = useState([]);
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isAiCategory, setIsAiCategory] = useState(false);

  const navigate = useNavigate();

  // Define categories with their respective API endpoints
  const categories = [
    // { name: "Food & Beverage", endpoint: "/api/courses" },
    { name: "Food & Beverage", endpoint: "/api/ai" },
    { name: "Technology & Digital Services", endpoint: "/api/business" },
    { name: "Creative & Artistic Services", endpoint: "/api/science" },
    { name: "Education & Personal Development", endpoint: "/api/designArchitect" },
  ];

  // Fetch courses based on the selected category endpoint
  const fetchCourses = async (endpoint) => {
    try {
      const response = await axios.get(`https://miss-startup-1913.onrender.com${endpoint}`);
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
    <div className="container-fulid" id="Ideas">
       <h2 className="text-center mb-4 pt-5">
          Ideas
        </h2>
        
        <div className="container pb-5" >
      
        {/* Category Buttons */}
        <div className="d-flex justify-content-center mb-4 flex-wrap mt-5">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`btn ${selectedCategory?.name === category.name ? "btn" : "btn-outline-secondary"}`}
              style={{
                margin: "10px",
                borderRadius: "20px",
                padding: "10px 20px",
                fontSize: "1rem",
                fontWeight: "500",
                backgroundColor: "var(--btn-color)"
              }}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="row px-lg-5 pt-2">
          {displayedCourses.length > 0 ? (
            displayedCourses.map((course) => (
              <div key={course._id} className="col-lg-4 col-md-6  mb-4" style={{ cursor: "pointer" }} onClick={() => handleCardClick(course._id)}>
                <div className="card h-100  shadow-sm">
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
              className="btn "
              style={{
                borderRadius: "20px",
                padding: "10px 30px",
                fontSize: "1rem",
                fontWeight: "500",
                backgroundColor: "var(--btn-color)"
              }}
              onClick={handleShowMore}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>

  );
};

export default Ideas;
