import React, { useState } from 'react';
import '../pages/pricingsection.css';

const PricingSection = () => {
  const [selectedOption, setSelectedOption] = useState("Individual");

  return (
    <div className="pricing-section mb-5 mt-5">
      <h2 className='hprice mt-5 mt-lg-1'>Pricing</h2>
      
      {/* Toggle Buttons */}
      <div className="togglebuttons ">
        <button 
          className={selectedOption === "Individual" ? "active" : ""}
          onClick={() => setSelectedOption("Individual")}
        >
          Individual
        </button>
        <div className="yl"></div>
        <button 
          className={selectedOption === "Group" ? "active" : ""}
          onClick={() => setSelectedOption("Group")}
        >
          Group
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="pricingcards ">
        {/* Basic Plan */}
        {selectedOption === "Individual" && (
          <div className="pricing-card">
            <div className="cardheader ">Basic</div>
           <div className='mt-5'>

           <ul className="features-list mt-5">
              <li>1 User</li>
              <li>Access to basic features</li>
              <li>Email support</li>
              <li>Limited usage</li>
            </ul>
           </div>
            <div className="price-tag mt-5 ">2000/-</div>
          </div>
        )}
        {selectedOption === "Group" && (
          <div className="pricing-card">
            <div className="cardheader  ">Basic</div>
            <div className="mt-5">
            <ul className="features-list">
              <li>Up to 10 Users</li>
              <li>Access to basic features</li>
              <li>Email support</li>
              <li>Limited usage</li>
            </ul> 
            </div>
            <div className="price-tag mt-5">5000/-</div>
          </div>
        )}

        {/* Advance Plan */}
        {selectedOption === "Individual" && (
          <div className="pricing-card">
            <div className="cardheader ">Advance</div>
            <div className="mt-5">
            <ul className="features-list">
              <li>1 User</li>
              <li>Access to all features</li>
              <li>Priority support</li>
              <li>Unlimited usage</li>
            </ul>
            </div>
            <div className="price-tag mt-5">4000/-</div>
          </div>
        )}
        {selectedOption === "Group" && (
          <div className="pricing-card">
            <div className="cardheader ">Advance</div>
          <div className="mt-5">
          <ul className="features-list">
              <li>Up to 10 Users</li>
              <li>Access to all features</li>
              <li>Priority support</li>
              <li>Unlimited usage</li>
            </ul>
          </div>
            <div className="price-tag mt-5">10000/-</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingSection;
