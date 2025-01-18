import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const MainIdeas = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: "Food & Beverage", endpoint: "/api/courses" },
    { name: "Artificial Intelligence", endpoint: "/api/ai" },
    { name: "Business", endpoint: "/api/business" },
    { name: "Computer Science", endpoint: "/api/computer" },
    { name: "Design Architect", endpoint: "/api/design" },
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/courses");
        setCourses(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // Fetch courses related to the selected category
    axios
      .get(`http://localhost:5000${category.endpoint}`)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((err) => console.error(err));
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
                  selectedCategory?.name === category.name
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
                      borderRadius: "50%",
                      overflow: "hidden",
                      width: "120px", // Smaller image size
                      height: "120px", // Smaller image size
                    }}
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h5
                      style={{
                        fontWeight: "700",
                        fontSize: "1.2rem", // Smaller font size
                        color: "#2c3e50",
                      }}
                    >
                      {course.title}
                    </h5>
                    <p
                      className="text-muted"
                      style={{ fontSize: "0.9rem", lineHeight: "1.5" }} // Reduced font size
                    >
                      {course.description}
                    </p>
                    <p
                      className="text-primary fw-bold"
                      style={{ fontSize: "1rem" }} // Slightly smaller price
                    >
                      {course.price}
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
