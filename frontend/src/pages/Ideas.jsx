import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Ideas = () => {
  const [courses, setCourses] = useState([]);
  const [visibleCourses, setVisibleCourses] = useState(6);

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

  const handleShowMore = () => {
    setVisibleCourses((prevVisible) => prevVisible + 6);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Featured Courses</h2>
      <div className="row">
        {courses.slice(0, visibleCourses).map((course) => (
          <div key={course._id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={course.image}
                alt={course.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="text-muted mb-1">{course.author}</p>
                <p className="text-primary fw-bold">{course.price}</p>
                <div className="mt-auto">
                  <button className="btn btn-primary btn-sm w-100">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        {visibleCourses < courses.length ? (
          <button
            className="btn btn-outline-primary me-3"
            onClick={handleShowMore}
          >
            Show More
          </button>
        ) : null}
        <Link to="/mainideas" className="btn btn-primary">
          View All Courses
        </Link>
      </div>
    </div>
  );
};

export default Ideas;
