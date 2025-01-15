import React, { useState } from "react";
import axios from "axios";
import "./Dashboard.css"; // Assuming you have a CSS file for styling

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useState("ideas");

  // State for Idea Form
  const [idea, setIdea] = useState({
    title: "",
    description: "",
  });

  // State for Blog Form
  const [blog, setBlog] = useState({
    category: "",
    title: "",
    description: "",
    image: "",
  });

  // State for Course Form
  const [course, setCourse] = useState({
    category: "",
    level: "",
    title: "",
    price: "",
    author: "",
    rating: 0,
    image: "",
  });

  // Handle Idea Form changes
  const handleIdeaChange = (e) => {
    setIdea({ ...idea, [e.target.name]: e.target.value });
  };

  // Handle Blog Form changes
  const handleBlogChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  // Handle Course Form changes
  const handleCourseChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  // Submit Idea
  const handleIdeaSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/ideas", idea);
      alert("Idea added successfully!");
      setIdea({ title: "", description: "" });
    } catch (err) {
      console.error(err);
      alert("Error adding idea");
    }
  };

  // Submit Blog
  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/blogs", blog);
      alert("Blog added successfully!");
      setBlog({ category: "", title: "", description: "", image: "" });
    } catch (err) {
      console.error(err);
      alert("Error adding blog");
    }
  };

  // Submit Course
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
        {/* Idea Form */}
        {selectedPage === "ideas" && (
          <div className="container py-5">
            <h2 className="text-center mb-3">Add Idea</h2>
            <form onSubmit={handleIdeaSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="form-control"
                  value={idea.title}
                  onChange={handleIdeaChange}
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="description"
                  placeholder="Description"
                  className="form-control"
                  value={idea.description}
                  onChange={handleIdeaChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add Idea
              </button>
            </form>
          </div>
        )}

        {/* Blog Form */}
        {selectedPage === "blog" && (
          <div className="container py-5">
            <h2 className="text-center mb-3">Add Blog</h2>
            <form onSubmit={handleBlogSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="form-control"
                  value={blog.category}
                  onChange={handleBlogChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="form-control"
                  value={blog.title}
                  onChange={handleBlogChange}
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="description"
                  placeholder="Description"
                  className="form-control"
                  value={blog.description}
                  onChange={handleBlogChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  className="form-control"
                  value={blog.image}
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
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="form-control"
                  value={course.category}
                  onChange={handleCourseChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="level"
                  placeholder="Level"
                  className="form-control"
                  value={course.level}
                  onChange={handleCourseChange}
                />
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
