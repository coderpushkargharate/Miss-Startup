import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Ideas = () => {
  const [courses, setCourses] = useState([]);

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

  return (
    <div className="container py-5">
      <h2 className="text-center mb-3">Featured Courses</h2>
      <div className="row">
        {courses.map((course) => (
          <div key={course._id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <img
                src={course.image}
                alt={course.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.author}</p>
                <p className="card-text">{course.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ideas;
