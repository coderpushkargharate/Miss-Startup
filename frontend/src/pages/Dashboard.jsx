import React, { useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useState("ideas");
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    imageUrl: "",
    date: new Date(),
    readTime: "7 MIN READ",
  });

  const [course, setCourse] = useState({
    category: "",
    level: "",
    title: "",
    price: "",
    author: "",
    rating: 0,
    image: "",
  });

  const handleBlogChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleCourseChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/blogs", blog);
      alert("Blog added successfully!");
      setBlog({
        title: "",
        description: "",
        imageUrl: "",
        date: new Date(),
        readTime: "7 MIN READ",
      });
    } catch (err) {
      console.error(err);
      alert("Error adding blog");
    }
  };

  const handleCourseSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/courses", course);
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
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">Dashboard</div>
        <ul>
          <li
            className={selectedPage === "ideas" ? "active" : ""}
            onClick={() => setSelectedPage("ideas")}
          >
            Ideas
          </li>
          <li
            className={selectedPage === "blog" ? "active" : ""}
            onClick={() => setSelectedPage("blog")}
          >
            Blog
          </li>
          <li
            className={selectedPage === "course" ? "active" : ""}
            onClick={() => setSelectedPage("course")}
          >
            Course
          </li>
        </ul>
      </div>
      <div className="content">
        {/* Blog Form */}
        {selectedPage === "blog" && (
          <div className="container py-5">
            <h2 className="text-center mb-3">Add Blog</h2>
            <form onSubmit={handleBlogSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Blog Title"
                  className="form-control"
                  value={blog.title}
                  onChange={handleBlogChange}
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="description"
                  placeholder="Blog Description"
                  className="form-control"
                  value={blog.description}
                  onChange={handleBlogChange}
                ></textarea>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="imageUrl"
                  placeholder="Image URL"
                  className="form-control"
                  value={blog.imageUrl}
                  onChange={handleBlogChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="readTime"
                  placeholder="Read Time"
                  className="form-control"
                  value={blog.readTime}
                  onChange={handleBlogChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Blog
              </button>
            </form>
          </div>
        )}

        {/* Course Form */}
        {selectedPage === "course" && (
          <div className="container py-5">
            <h2 className="text-center mb-3">Add Course</h2>
            <form onSubmit={handleCourseSubmit}>
              <div className="mb-3">
                <select
                  name="category"
                  className="form-control"
                  value={course.category}
                  onChange={handleCourseChange}
                >
                  <option value="">Select Category</option>
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                  <option value="Business Analysis">Business Analysis</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Design Architect">Design Architect</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Course Title"
                  className="form-control"
                  value={course.title}
                  onChange={handleCourseChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="form-control"
                  value={course.price}
                  onChange={handleCourseChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="author"
                  placeholder="Author"
                  className="form-control"
                  value={course.author}
                  onChange={handleCourseChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating"
                  className="form-control"
                  value={course.rating}
                  onChange={handleCourseChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  className="form-control"
                  value={course.image}
                  onChange={handleCourseChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Course
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
