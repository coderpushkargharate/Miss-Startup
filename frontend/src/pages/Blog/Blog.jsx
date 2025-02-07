import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Blog.css";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("https://miss-startup-1913.onrender.com/api/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlogs();
  }, []);

  // Function to handle card click
  const handleCardClick = (blogId) => {
    navigate(`/blog/${blogId}`); // Navigate to the detailed blog page
  };

  return (
    <div className="card-container" id="Blog">
      {blogs.map((blog, index) => (
        <div
          className="card mt-5"
          key={index}
          onClick={() => handleCardClick(blog._id)} // Add click handler
          style={{ cursor: "pointer" }} // Make it look clickable
        >
          <img
            src={blog.imageUrl || "default-image.jpg"} // Handle default image
            className="card-img-top"
            alt="Blog"
          />
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">
              {blog.description.slice(0, 100)}... {/* Show only the first 100 characters */}
            </p>
            <div className="card-footer">
              <small className="date">{new Date(blog.date).toLocaleDateString()}</small>
              <small className="read-time">{blog.readTime}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;