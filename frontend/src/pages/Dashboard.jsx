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

  const [business, setBusiness] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    author: "",
  });

  const [ai, setAi] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    rating: 0,
  });

  const handleInputChange = (setter) => (e) => {
    setter((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (url, data, setter, successMessage) => {
    try {
      await axios.post(url, data);
      alert(successMessage);
      setter({});
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Error occurred. Check console for details.");
    }
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">Dashboard</div>
        <ul>
          {[ "blog", "course", "business", "ai"].map((page) => (
            <li
              key={page}
              className={selectedPage === page ? "active" : ""}
              onClick={() => setSelectedPage(page)}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        {selectedPage === "blog" && (
          <Form
            title="Add Blog"
            data={blog}
            onChange={handleInputChange(setBlog)}
            onSubmit={() =>
              handleSubmit(
                "http://localhost:5000/api/blogs",
                blog,
                setBlog,
                "Blog added successfully!"
              )
            }
          />
        )}
        {selectedPage === "course" && (
          <Form
            title="Add Course"
            data={course}
            onChange={handleInputChange(setCourse)}
            onSubmit={() =>
              handleSubmit(
                "http://localhost:5000/api/courses",
                course,
                setCourse,
                "Course added successfully!"
              )
            }
          />
        )}
        {selectedPage === "business" && (
          <Form
            title="Add Business"
            data={business}
            onChange={handleInputChange(setBusiness)}
            onSubmit={() =>
              handleSubmit(
                "http://localhost:5000/api/business",
                business,
                setBusiness,
                "Business added successfully!"
              )
            }
          />
        )}
        {selectedPage === "ai" && (
          <Form
            title="Add AI Course"
            data={ai}
            onChange={handleInputChange(setAi)}
            onSubmit={() =>
              handleSubmit(
                "http://localhost:5000/api/ai",
                ai,
                setAi,
                "AI Course added successfully!"
              )
            }
          />
        )}
      </div>
    </div>
  );
};

const Form = ({ title, data, onChange, onSubmit }) => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-3">{title}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        {Object.keys(data).map((key) => (
          <div className="mb-3" key={key}>
            <input
              type="text"
              name={key}
              placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
              className="form-control"
              value={data[key]}
              onChange={onChange}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Dashboard;
