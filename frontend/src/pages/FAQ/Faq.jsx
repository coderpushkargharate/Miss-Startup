import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing search icon from react-icons
import './Faq.css'; // Import the CSS file

const faqs = [
  {
    question: "What does it take to become an author?",
    answer:
      "Our authors are incredible storytellers driven by their passion for technology. They blend their knowledge and enthusiasm to communicate concepts and demonstrate their expertise.",
  },
  {
    question: "How to change my password easily?",
    answer:
      "To change your password, go to your account settings, select 'Change Password,' and follow the instructions to reset it securely.",
  },
  {
    question: "How to change my plan using PayPal?",
    answer:
      "You can change your plan by navigating to the billing section of your account and selecting 'Update Plan.' Choose PayPal as your payment method.",
  },
  {
    question: "Who will view my content?",
    answer:
      "Your content will be viewed by learners and professionals worldwide who are eager to gain knowledge and develop new skills.",
  },
  {
    question: "What does it take to be an excellent author?",
    answer:
      "An excellent author is passionate about sharing knowledge, has strong communication skills, and is dedicated to creating high-quality, engaging content.",
  },
  {
    question: "How long does it take to create a video course?",
    answer:
      "The time to create a video course depends on the complexity of the topic and the author's availability, but it typically takes a few weeks to a couple of months.",
  },
  {
    question: "What kind of support does Courselog provide?",
    answer:
      "Courselog provides comprehensive support, including technical assistance, content review, and marketing resources to help authors succeed.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State to track search input

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the selected question
  };

  // Filter FAQs based on search query
  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container-fluid mt-5" id="Faq">
      <div className="py-5 text-white text-center description">
        <h2 className="faq-title mt-5">Frequently Asked Questions</h2>
        <p className="faq-description">
          Questions on your mind? Don’t worry, we have the answers!
        </p>

        {/* Search Bar */}
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="faq-list">
        {filteredFAQs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              onClick={() => toggleFAQ(index)}
              className="faq-question"
            >
              <span>{faq.question}</span>
              <span className="faq-toggle">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}

        {/* Show message if no FAQs match the search query */}
        {filteredFAQs.length === 0 && (
          <p className="no-faqs">No FAQs found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default Faq;
