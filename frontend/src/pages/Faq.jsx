import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing search icon from react-icons

const faqs = [
  {
    question: "Is Dhan safe & trusted broking platform?",
    answer: "Yes, Dhan is a safe and trusted broking platform with robust security measures and regulatory compliance."
  },
  {
    question: "How much time does it take to open a Dhan Account?",
    answer: "Opening a Dhan account typically takes a few minutes if all documents are in order."
  },
  {
    question: "What documents are required to open a corporate demat account?",
    answer: "To open a corporate demat account, you need documents like PAN card, proof of address, and other KYC documents for the company."
  },
  {
    question: "What are the brokerage charges on Dhan?",
    answer: "Dhan offers competitive brokerage charges. Visit the official site for detailed information on the fee structure."
  },
  {
    question: "How to transfer shares from your current broker to Dhan?",
    answer: "You can transfer shares by initiating an off-market transfer or by using the online transfer feature provided by your existing broker."
  }
];

const FAQmain = () => {
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
    <>

      <div className="container-fluid mt-5">


        <div className='bg-dark  py-5 text-white'>
          <h2
            className="py-2 mt-5"
            style={{ fontSize: "34px", fontWeight: "bold", textAlign: "center" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="pb-4" style={{ textAlign: "center", color: "#666" }}>
            Questions on your mind? Don’t worry, we have the answers!
          </p>

          {/* Search Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "100px",
              padding: "0px 10px",
              maxWidth: "550px",
              margin: "0 auto",
              height: "50px"

            }}
          >
            <FaSearch style={{ color: "#888", marginRight: "10px" }} />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "16px",
              }}
            />
          </div>
        </div>




        <div
          className="pt-5 px-3 "
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "auto",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #ddd",
                padding: "10px 0",
                cursor: "pointer",
              }}
            >
              <div
                onClick={() => toggleFAQ(index)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "15px",
                  padding: "10px 0px 10px 0px",
                }}
              >
                {faq.question}
                <span>{activeIndex === index ? "▲" : "▼"}</span>
              </div>

              {activeIndex === index && (
                <div
                  style={{
                    padding: "10px 0",
                    fontSize: "16px",
                    color: "#555",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

          {/* Show message if no FAQs match the search query */}
          {filteredFAQs.length === 0 && (
            <p style={{ textAlign: "center", color: "#888" }}>
              No FAQs found matching your search.
            </p>
          )}
        </div>

      </div>

    </>

  )
};

export default FAQmain;
