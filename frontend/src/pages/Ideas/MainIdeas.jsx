import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mainIdeas.css";

const MainIdeas = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    name: "Artificial Intelligence",
    endpoint: "/api/ai",
  });
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const categories = [
    { name: "Artificial Intelligence", endpoint: "/api/ai" },
    { name: "Business", endpoint: "/api/business" },
    { name: "Computer Science", endpoint: "/api/science" },
    { name: "Design Architect", endpoint: "/api/designArchitect" },
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:5000${selectedCategory.endpoint}`)
      .then((response) => {
        setCourses(response.data);
      })
      .catch((err) => console.error(err));
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSidebarVisible(false); // Close the sidebar on category selection for small screens
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="container-fluid">
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">Main Ideas</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Toggle Button for Small Screens */}
      <button
        className="btn btn-primary d-md-none toggle-sidebar-btn"
        onClick={toggleSidebar}
      >
        {sidebarVisible ? "Close Menu" : "Open Menu"}
      </button>

      <div className={`sidebar ${sidebarVisible ? "visible" : ""}`}>
        <h3 className="sidebar-title">Categories</h3>
        <div className="list-group">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`list-group-item ${
                selectedCategory.name === category.name ? "active" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2 className="main-title mt-4">Explore Our Services</h2>

        <div className="row">
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <div
                key={course._id}
                className={`col-12 col-sm-6 col-md-4 mb-4`}
              >
                <div
                  className={`course-card ${
                    index % 2 === 0 ? "reverse-layout" : ""
                  }`}
                >
                  <div className="course-image">
                    <img src={course.imageUrl} alt={course.title} />
                  </div>
                  <div className="course-info">
                    <h5 className="course-title">{course.title}</h5>
                    <p className="course-description">{course.description}</p>
                    <p className="course-price">${course.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <p className="no-courses">No courses available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainIdeas;
