import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/courses/${id}`);
        setCourse(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={course.image}
            alt={course.title}
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-6">
          <h1>{course.title}</h1>
          <p className="text-muted">{course.author}</p>
          <h4 className="text-primary fw-bold">{course.price}</h4>
          <p>{course.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
