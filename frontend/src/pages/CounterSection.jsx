import React from "react";
import CountUp from "react-countup";

function CounterSection() {
    const stats = [
        { value: 10, suffix: "K+", description: "Happy Customers" },
        { value: 5, suffix: "+", description: "Cities Covered" },
        { value: 50, suffix: "+", description: "Dishes Served Daily" },
        { value: 98, suffix: "%", description: "Customer Satisfaction" },
    ];

    return (
        <>
            {/* Fun Fact Section */}
            <div className="container-fluid text-dark py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center mx-auto mb-5">
                            <h1>Counter</h1>
                        </div>
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
        </>
    );
}

export default CounterSection;
