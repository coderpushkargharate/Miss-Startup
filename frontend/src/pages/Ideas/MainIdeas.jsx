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
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const categories = [
    { name: "Food & Beverage", endpoint: "/api/ai" },
    { name: "Technology & Digital Services", endpoint: "/api/business" },
    { name: "Creative & Artistic Services", endpoint: "/api/science" },
    { name: "Education & Personal Development", endpoint: "/api/designArchitect" },
  ];

  useEffect(() => {
    axios
      .get(`http://localhost:5000${selectedCategory.endpoint}`)
      .then((response) => setCourses(response.data))
      .catch((err) => console.error(err));

    // Handle body scroll when sidebar is toggled
    if (isSidebarVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scroll is enabled after unmount
    };
  }, [selectedCategory, isSidebarVisible]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="container-fluid mt-5" id="Mainideas">
      <div className="row mt-5">
        {/* Sidebar Toggle Button (Visible only on small screens) */}
        <button
          className="sidebar-toggle-btn d-md-none"
          onClick={toggleSidebar}
        >
          &#9776;
        </button>

        {/* Sidebar */}
        <div
          className={`sidebar ${isSidebarVisible ? "active" : ""}`}
        >
          <h2 className="sidebar-title">Categories</h2>
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
        <div className={`main-content ${isSidebarVisible ? "sidebar-visible" : ""}`}>
          <h2 className="main-title mt-4">Explore Our Services</h2>

          <div className="row w-100">
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <div key={course._id} className="col-12 mb-4">
                  <div
                    className={`course-card px-4 ${
                      index % 2 === 0 ? "reverse-layout" : ""
                    }`}
                  >
                    <div
                      className={`course-image ${
                        index % 2 === 0 ? "border-yellow" : "border-blue"
                      }`}
                    >
                      <img src={course.imageUrl} alt={course.title} />
                    </div>
                    <div className="course-info ps-4">
                      <h5 className="course-title">{course.title}</h5>
                      <p className="course-description w-75">{course.description}</p>
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



    </div>
  );
};

export default MainIdeas;
