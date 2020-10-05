import React from "react";
import Counter from "./Counter";
import "./WhyChooseUs.css";
import { Grid } from "@material-ui/core";

function WhyChooseUs() {
  return (
    <div className="whyChooseUs">
      <div className="whyChooseUs__title">
        <h2>Why Choose Us</h2>
      </div>
      <Grid className="whyChooseUs__counter" container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Counter number={100} text="Projects" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Counter number={198} text="Happy Customers" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Counter number={94} text="Years in Business" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Counter number={43} text="Employees" />
        </Grid>
      </Grid>
      {/* <div className="whyChooseUs__counter">
        <Counter number={100} text="Projects" />
        <Counter number={198} text="Happy Customers" />
        <Counter number={94} text="Years in Business" />
        <Counter number={43} text="Employees" />
      </div> */}
    </div>
  );
}

export default WhyChooseUs;
