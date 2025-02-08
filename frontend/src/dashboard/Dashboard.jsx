import React, { useState } from "react";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useState("blog");

  // State for each category
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

  const [foodBeverage, setFoodBeverage] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    rating: 0,
  });

  const [technology, setTechnology] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    rating: 0,
  });

  const [creativeArtistic, setCreativeArtistic] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    rating: 0,
  });

  const [educationDevelopment, setEducationDevelopment] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    rating: 0,
  });

  const [eventsEntertainment, setEventsEntertainment] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    rating: 0,
  });

  const [healthWellness, setHealthWellness] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    rating: 0,
  });

  const [homeLifestyle, setHomeLifestyle] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    rating: 0,
  });

  const [financialServices, setFinancialServices] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    rating: 0,
  });

  const [miscellaneous, setMiscellaneous] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    rating: 0,
  });

  // Handle input changes dynamically
  const handleInputChange = (setter) => (e) => {
    const { name, value } = e.target;
    setter((prevState) => ({
      ...prevState,
      [name]: name === "rating" || name === "price" ? parseFloat(value) || 0 : value,
    }));
  };

  // Handle form submission
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
                <option>--Ideas--</option>
                <option value="foodBeverage">Food & Beverage</option>
                <option value="technology">Technology & Digital Services</option>
                <option value="creativeArtistic">Creative & Artistic Services</option>
                <option value="educationDevelopment">Education & Personal Development</option>
                <option value="eventsEntertainment">Events & Entertainment</option>
                <option value="healthWellness">Health & Wellness</option>
                <option value="homeLifestyle">Home & Lifestyle</option>
                <option value="financialServices">Financial Services</option>
                <option value="miscellaneous">Miscellaneous Services</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="content">
          {/* Blog Form */}
          {selectedPage === "blog" && (
            <Form
              title="Add Blog"
              data={blog}
              onChange={handleInputChange(setBlog)}
              onSubmit={() =>
                handleSubmit(
                  "https://miss-startup-1913.onrender.com/api/blogs",
                  blog,
                  setBlog,
                  "Blog added successfully!"
                )
              }
            />
          )}

          {/* Business Form */}
          {selectedPage === "business" && (
            <Form
              title="Add Business"
              data={business}
              onChange={handleInputChange(setBusiness)}
              onSubmit={() =>
                handleSubmit(
                  "https://miss-startup-1913.onrender.com/api/business",
                  business,
                  setBusiness,
                  "Business added successfully!"
                )
              }
            />
          )}

          {/* AI Course Form */}
          {selectedPage === "ai" && (
            <Form
              title="Add AI Course"
              data={ai}
              onChange={handleInputChange(setAi)}
              onSubmit={() =>
                handleSubmit(
                  "https://miss-startup-1913.onrender.com/api/ai",
                  ai,
                  setAi,
                  "AI Course added successfully!"
                )
              }
            />
          )}

          {/* Design Architect Form */}
          {selectedPage === "designArchitect" && (
            <Form
              title="Add Design Architect Course"
              data={designArchitect}
              onChange={handleInputChange(setDesignArchitect)}
              onSubmit={() =>
                handleSubmit(
                  "https://miss-startup-1913.onrender.com/api/designArchitect",
                  designArchitect,
                  setDesignArchitect,
                  "Design Architect Course added successfully!"
                )
              }
            />
          )}

          {/* Science Course Form */}
          {selectedPage === "science" && (
            <Form
              title="Add Science Course"
              data={science}
              onChange={handleInputChange(setScience)}
              onSubmit={() =>
                handleSubmit(
                  "https://miss-startup-1913.onrender.com/api/science",
                  science,
                  setScience,
                  "Science Course added successfully!"
                )
              }
            />
          )}

          {/* Food & Beverage Form */}
          {selectedPage === "foodBeverage" && (
            <Form
              title="Add Food & Beverage Service"
              data={foodBeverage}
              onChange={handleInputChange(setFoodBeverage)}
              onSubmit={() =>
                handleSubmit(
                  "https://miss-startup-1913.onrender.com/api/foodBeverage",
                  foodBeverage,
                  setFoodBeverage,
                  "Food & Beverage Service added successfully!"
                )
              }
            />
          )}

          {/* Technology & Digital Services Form */}
          {selectedPage === "technology" && (
            <Form
              title="Add Technology & Digital Service"
              data={technology}
              onChange={handleInputChange(setTechnology)}
              onSubmit={() =>
                handleSubmit(
                  "https://miss-startup-1913.onrender.com/api/technology",
                  technology,
                  setTechnology,
                  "Technology & Digital Service added successfully!"
                )
              }
            />
          )}

          {/* Creative & Artistic Services Form */}
          {selectedPage === "creativeArtistic" && (
            <Form
              title="Add Creative & Artistic Service"
              data={creativeArtistic}
              onChange={handleInputChange(setCreativeArtistic)}
              onSubmit={() =>
                handleSubmit(
                  "https://miss-startup-1913.onrender.com/api/creativeArtistic",
                  creativeArtistic,
                  setCreativeArtistic,
                  "Creative & Artistic Service added successfully!"
                )
              }
            />
          )}

          {/* Education & Personal Development Form */}
          {selectedPage === "educationDevelopment" && (
            <Form
              title="Add Education & Personal Development Service"
              data={educationDevelopment}
              onChange={handleInputChange(setEducationDevelopment)}
              onSubmit={() =>
                handleSubmit(
                  "https://miss-startup-1913.onrender.com/api/educationDevelopment",
                  educationDevelopment,
                  setEducationDevelopment,
                  "Education & Personal Development Service added successfully!"
                )
              }
            />
          )}

          {/* Events & Entertainment Form */}
          {selectedPage === "eventsEntertainment" && (
            <Form
              title="Add Events & Entertainment Service"
              data={eventsEntertainment}
              onChange={handleInputChange(setEventsEntertainment)}
              onSubmit={() =>
                handleSubmit(
                  "https://miss-startup-1913.onrender.com/api/eventsEntertainment",
                  eventsEntertainment,
                  setEventsEntertainment,
                  "Events & Entertainment Service added successfully!"
                )
              }
            />
          )}

          {/* Health & Wellness Form */}
          {selectedPage === "healthWellness" && (
            <Form
              title="Add Health & Wellness Service"
              data={healthWellness}
              onChange={handleInputChange(setHealthWellness)}
              onSubmit={() =>
                handleSubmit(
                  "https://miss-startup-1913.onrender.com/api/healthWellness",
                  healthWellness,
                  setHealthWellness,
                  "Health & Wellness Service added successfully!"
                )
              }
            />
          )}

          {/* Home & Lifestyle Form */}
          {selectedPage === "homeLifestyle" && (
            <Form
              title="Add Home & Lifestyle Service"
              data={homeLifestyle}
              onChange={handleInputChange(setHomeLifestyle)}
              onSubmit={() =>
                handleSubmit(
                  "https://miss-startup-1913.onrender.com/api/homeLifestyle",
                  homeLifestyle,
                  setHomeLifestyle,
                  "Home & Lifestyle Service added successfully!"
                )
              }
            />
          )}

          {/* Financial Services Form */}
          {selectedPage === "financialServices" && (
            <Form
              title="Add Financial Service"
              data={financialServices}
              onChange={handleInputChange(setFinancialServices)}
              onSubmit={() =>
                handleSubmit(
                  "https://miss-startup-1913.onrender.com/api/financialServices",
                  financialServices,
                  setFinancialServices,
                  "Financial Service added successfully!"
                )
              }
            />
          )}

          {/* Miscellaneous Services Form */}
          {selectedPage === "miscellaneous" && (
            <Form
              title="Add Miscellaneous Service"
              data={miscellaneous}
              onChange={handleInputChange(setMiscellaneous)}
              onSubmit={() =>
                handleSubmit(
                  "https://miss-startup-1913.onrender.com/api/miscellaneous",
                  miscellaneous,
                  setMiscellaneous,
                  "Miscellaneous Service added successfully!"
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

// Reusable Form Component
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