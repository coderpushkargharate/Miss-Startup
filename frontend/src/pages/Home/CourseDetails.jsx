import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseId } = useParams(); // Extract courseId from URL parameters
  const [course, setCourse] = useState(null);
  const [error, setError] = useState(null); // State to hold error messages

  // Fetch course details by ID
  const fetchCourseDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/course/${courseId}`);
      setCourse(response.data); // Set course data if successful
      setError(null); // Reset error if successful
    } catch (err) {
      console.error("Error fetching course details:", err);
      setError("Failed to load course details. Please try again later.");
    }
  };

  useEffect(() => {
    fetchCourseDetails();
  }, [courseId]); // Re-fetch if courseId changes

  return (
    <div className="container py-5">
      {error && <div className="alert alert-danger">{error}</div>} {/* Show error message */}
      {course ? (
        <>
          <h2 className="text-center mb-4">{course.title}</h2>
          <div className="row">
            <div className="col-md-6">
              <img
                src={course.imageUrl || course.image}
                alt={course.title}
                className="img-fluid"
                style={{ height: "400px", objectFit: "cover", borderRadius: "8px" }}
              />
            </div>
            <div className="col-md-6">
              <h5>Author: {course.author || "N/A"}</h5>
              <p><strong>Price: </strong>{course.price}</p>
              <p>{course.description || "No description available."}</p>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center">Loading course details...</p>
      )}
    </div>
  );
};

export default CourseDetails;
