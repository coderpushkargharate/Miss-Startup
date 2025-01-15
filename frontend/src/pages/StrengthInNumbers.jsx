import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from "react-countup";

const StrengthInNumbers = () => {
  const stats = [
    { value: 23, suffix: "M+", description: "Learners & counting" },
    { value: 13, suffix: "K+", description: "Total courses" },
    { value: 36, suffix: "+", description: "Languages" },
    { value: 89, suffix: "%", description: "Successful students" },
  ];

  return (
    <div className="container-fluid bg-primary text-white py-5">
      <div className="text-center mb-4">
        <h6 className="text-uppercase text-warning">Funcfact</h6>
        <h2 className="fw-bold">Strength in Numbers</h2>
      </div>
      <div className="container">
      <div className="row justify-content-center">
        {stats.map((stat, index) => (
          <div key={index} className="col-6 col-md-3 text-center mb-4">
            <h1 className="fw-bold">
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
                separator=","
                suffix={stat.suffix}
              />
            </h1>
            <p>{stat.description}</p>
          </div>
        ))}
      </div>
      </div>
     
    </div>
  );
};

export default StrengthInNumbers;
