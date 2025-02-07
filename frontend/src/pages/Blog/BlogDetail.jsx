import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
// import "./BlogDetail.css";



function BlogDetail() {
  const { blogId } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null); // State to track errors
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const res = await axios.get(`https://miss-startup-1913.onrender.com/api/blogs/${blogId}`);
        if (!res.data) {
          throw new Error("Blog not found");
        }
        setBlog(res.data);
      } catch (err) {
        console.error(err);
        setError("Blog not found."); // Set error message
      }
    };
    fetchBlogDetails();
  }, [blogId]);

  // Redirect to home page if there's an error
  if (error) {
    setTimeout(() => navigate("/"), 3000); // Redirect after 3 seconds
    return <div>{error} Redirecting to home...</div>;
  }

  if (!blog) {
    return <div>Loading...</div>; // Show loading state
  }

  return (
    <div className="blog-detail-container">
      <div className="blog-detail-card">
        <img
          src={blog.imageUrl || "default-image.jpg"}
          className="card-img-top"
          alt="Blog"
        />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.description}</p> {/* Show full description */}
          <div className="card-footer">
            <small className="date">{new Date(blog.date).toLocaleDateString()}</small>
            <small className="read-time">{blog.readTime}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;