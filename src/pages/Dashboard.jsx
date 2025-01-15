import React, { useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [course, setCourse] = useState({
    category: "",
    level: "",
    title: "",
    price: "",
    author: "",
    rating: 0,
    image: "",
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/courses", course);
      alert("Course added successfully!");
      setCourse({
        category: "",
        level: "",
        title: "",
        price: "",
        author: "",
        rating: 0,
        image: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error adding course");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-3">Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="category"
            placeholder="Category (comma-separated)"
            className="form-control"
            value={course.category}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="level"
            placeholder="Level"
            className="form-control"
            value={course.level}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="form-control"
            value={course.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="form-control"
            value={course.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="author"
            placeholder="Author"
            className="form-control"
            value={course.author}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            className="form-control"
            value={course.rating}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            className="form-control"
            value={course.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
