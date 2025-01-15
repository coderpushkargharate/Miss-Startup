import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blog.css"; // Assuming you have a CSS file for styling

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="card-container mx-15">
        {blogs.map((blog, index) => (
          <div className="card hover-card" key={index}>
            <img
              src={blog.imageUrl || "default-image.jpg"} // Handle default image
              className="card-img-top"
              alt="Blog"
            />
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.description}</p>
              <p className="footer">
                <small className="date">{new Date(blog.date).toLocaleDateString()}</small>
                <small className="read-time">{blog.readTime}</small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blog;
