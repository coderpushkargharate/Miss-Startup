import React, { useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useState("blog");

  const [blog, setBlog] = useState({
    title: "",
    description: "",
    imageUrl: "",
    date: new Date().toISOString().split("T")[0],
    readTime: "7 MIN READ",
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

  const [designArchitect, setDesignArchitect] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    rating: 0,
  });

  const [science, setScience] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    rating: 0,
  });

  const handleInputChange = (setter) => (e) => {
    const { name, value } = e.target;
    setter((prevState) => ({
      ...prevState,
      [name]: name === "rating" || name === "price" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (url, data, setter, successMessage) => {
    try {
      await axios.post(url, data);
      alert(successMessage);
      setter({}); // Reset form after successful submission
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Submission failed. Check console for details.");
    }
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="sidebar">
          <div className="logo">
            <h1>Finlec</h1>
          </div>
          <button
            className={`sidebar-button ms-4 ${selectedPage === "blog" ? "active" : ""}`}
            onClick={() => setSelectedPage("blog")}
          >
            Blog
          </button>
          <ul>
            <li>
              <select
                className="form-select"
                value={selectedPage}
                onChange={(e) => setSelectedPage(e.target.value)}
              >
            
                <option value="science">Science</option>
                <option value="business">Business</option>
                <option value="ai">Food & Beverage</option>
                <option value="designArchitect">Design Architect</option>
              </select>
            </li>
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
          {selectedPage === "designArchitect" && (
            <Form
              title="Add Design Architect Course"
              data={designArchitect}
              onChange={handleInputChange(setDesignArchitect)}
              onSubmit={() =>
                handleSubmit(
                  "http://localhost:5000/api/designArchitect",
                  designArchitect,
                  setDesignArchitect,
                  "Design Architect Course added successfully!"
                )
              }
            />
          )}
          {selectedPage === "science" && (
            <Form
              title="Add Science Course"
              data={science}
              onChange={handleInputChange(setScience)}
              onSubmit={() =>
                handleSubmit(
                  "http://localhost:5000/api/science",
                  science,
                  setScience,
                  "Science Course added successfully!"
                )
              }
            />
          )}
        </div>
      </div>
      <div className="navbar-bottom">
        <button className="btn btn-danger" onClick={() => alert("Logging out...")}>
          Logout
        </button>
      </div>
    </>
  );
};

const Form = ({ title, data, onChange, onSubmit }) => {
  return (
    <>
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
                value={data[key] || ""}
                onChange={onChange}
              />
            </div>
          ))}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
