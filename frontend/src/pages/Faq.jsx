import React, { useState } from 'react';

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

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the selected question
  };

  return (
    <div className='py-5 px-3' style={{ width: "100%", maxWidth: "1100px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h2 className='py-3' style={{ fontSize: "34px", fontWeight: "bold", textAlign: "center" }}>Frequently Asked Questions</h2>
      <p className='pb-4' style={{ textAlign: "center", color: "#666" }}>Questions on your mind? Don’t worry, we have the answers!</p>
      
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          style={{ 
            borderBottom: "1px solid #ddd", 
            padding: "10px 0", 
            cursor: "pointer" 
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
            <div style={{ padding: "10px 0", fontSize: "16px", color: "#555" }}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
