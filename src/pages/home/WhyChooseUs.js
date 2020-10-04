import React from "react";
import Counter from "./Counter";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  return (
    <div className="whyChooseUs">
      <div className="whyChooseUs__title">
        <h2>Why Choose Us</h2>
      </div>
      <div className="whyChooseUs__counter">
        <Counter number={100} text="Projects" />
        <Counter number={198} text="Happy Customers" />
        <Counter number={94} text="Years in Business" />
        <Counter number={43} text="Employees" />
      </div>
    </div>
  );
}

export default WhyChooseUs;
