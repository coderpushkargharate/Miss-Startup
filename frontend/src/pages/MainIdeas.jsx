import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const MainIdeas = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    name: "Artificial Intelligence",
    endpoint: "/api/ai",
  });

  const categories = [
    { name: "Artificial Intelligence", endpoint: "/api/ai" },
    { name: "Business", endpoint: "/api/business" },
    { name: "Computer Science", endpoint: "/api/science" },
    { name: "Design Architect", endpoint: "/api/designArchitect" },
  ];

  useEffect(() => {
    // Fetch courses for the selected category when component mounts or selectedCategory changes
    axios
      .get(`http://localhost:5000${selectedCategory.endpoint}`)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((err) => console.error(err));
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row mt-5">
        {/* Left Sidebar (Category Buttons) */}
        <div className="col-md-3 p-4">
          <h3 className="text-center mb-4 mt-5">Categories</h3>
          <div className="list-group">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`list-group-item list-group-item-action ${
                  selectedCategory.name === category.name
                    ? "active"
                    : "list-group-item-light"
                }`}
                style={{
                  borderRadius: "10px",
                  fontSize: "1.1rem",
                  fontWeight: "500",
                }}
                onClick={() => handleCategoryClick(category)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content (Courses Display) */}
        <div className="col-md-9 py-5 mt-3">
          <h2
            className="text-center mb-5"
            style={{ fontWeight: "700", fontSize: "2.5rem", color: "#333" }}
          >
            Explore Our Services
          </h2>

          <div className="row">
            {courses.map((course, index) => (
              <div key={course._id} className="col-12 mb-4">
                <div
                  className={`d-flex flex-column flex-md-row align-items-center shadow-sm p-3 mb-4 ${
                    index % 2 === 0 ? "flex-md-row-reverse" : ""
                  }`}
                  style={{
                    borderRadius: "10px", // Reduce border radius for smaller cards
                    backgroundColor: "#f9f9f9",
                    overflow: "hidden",
                    maxWidth: "100%", // Ensure the card doesn't overflow
                    marginBottom: "1rem", // Reduce space between cards
                  }}
                >
                  <div
                    className="me-md-4 mb-3 mb-md-0"
                    style={{
                      flexShrink: 0,
                      borderRadius: "50%", // Ensures image is circular
                      overflow: "hidden",
                      width: "150px", // Increased image size for better visibility
                      height: "150px", // Increased image size
                    }}
                  >
                    <img
                      src={course.imageUrl} // Ensure you're using imageUrl from backend
                      alt={course.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Ensures image is nicely cropped and fits in the circle
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h5
                      style={{
                        fontWeight: "700",
                        fontSize: "1.4rem", // Larger font size for title
                        color: "#2c3e50",
                      }}
                    >
                      {course.title}
                    </h5>
                    <p
                      className="text-muted"
                      style={{
                        fontSize: "1rem", // Adjusted font size for description
                        lineHeight: "1.6",
                      }}
                    >
                      {course.description}
                    </p>
                    <p
                      className="text-primary fw-bold"
                      style={{
                        fontSize: "1.2rem", // Adjusted price font size
                      }}
                    >
                      ${course.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainIdeas;
