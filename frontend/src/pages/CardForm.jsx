// Import React and useState
import React, { useState } from "react";
import "../App.css"; // Create an App.css file for styles

const CardForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    rajvardhan: "",
    rajanandini: "",
    eventDetails: "",
    hostName: "",
    venue: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="card-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="card-preview">
          <h2>{formData.title || "Title"}</h2>
          <h4>{formData.subtitle || "Subtitle"}</h4>
          <p><strong>राजवर्धन:</strong> {formData.rajvardhan}</p>
          <p><strong>राजनंदिनी:</strong> {formData.rajanandini}</p>
          <p><strong>Event Details:</strong> {formData.eventDetails}</p>
          <p><strong>Host:</strong> {formData.hostName}</p>
          <p><strong>Venue:</strong> {formData.venue}</p>
          <p>{formData.additionalInfo}</p>
        </div>

        <div className="form-fields">
          <label>Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Title"
            />
          </label>

          <label>Subtitle:
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              placeholder="Enter Subtitle"
            />
          </label>

          <label>राजवर्धन:
            <input
              type="text"
              name="rajvardhan"
              value={formData.rajvardhan}
              onChange={handleChange}
              placeholder="Enter राजवर्धन"
            />
          </label>

          <label>राजनंदिनी:
            <input
              type="text"
              name="rajanandini"
              value={formData.rajanandini}
              onChange={handleChange}
              placeholder="Enter राजनंदिनी"
            />
          </label>

          <label>Event Details:
            <textarea
              name="eventDetails"
              value={formData.eventDetails}
              onChange={handleChange}
              placeholder="Enter Event Details"
            ></textarea>
          </label>

          <label>Host Name:
            <input
              type="text"
              name="hostName"
              value={formData.hostName}
              onChange={handleChange}
              placeholder="Enter Host Name"
            />
          </label>

          <label>Venue:
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Enter Venue"
            />
          </label>

          <label>Additional Info:
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              placeholder="Enter Additional Information"
            ></textarea>
          </label>

          <button type="submit">Preview</button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
