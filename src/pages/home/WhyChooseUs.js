import React from "react";
import Counter from "./Counter";
import "./WhyChooseUs.css";
import { Grid } from "@material-ui/core";

function WhyChooseUs() {
  return (
    <div className="whyChooseUs">
      <div className="whyChooseUs__title">
        <p>Why Choose Us</p>
      </div>
      <div className="counter__containerParent">
        <div className="counter__item">
          <Counter number={100} text="Projects" />
        </div>
        <div className="counter__item">
          <Counter number={198} text="Happy Customers" />
        </div>
        <div className="counter__item">
          <Counter number={94} text="Years in Business" />
        </div>
        <div className="counter__item">
          <Counter number={43} text="Employees" />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
