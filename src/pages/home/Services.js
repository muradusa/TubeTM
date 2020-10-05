import React from "react";
import "./Services.css";
import Service from "./Service";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as ReactSVG1 } from "../../images/sketch.svg";

function Services() {
  return (
    <div className="services">
      <div className="services__title">
        <h2>Our Services</h2>
      </div>

      <div className="services__row">
        <Grid className="grid__container" container spacing={2}>
          <Grid item xs={12} sm={4} lg={4}>
            <Service
              svg={<ReactSVG1 />}
              title="General Contracting"
              description="This is going to be description of our services This is going to be description of our services"
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <Service
              svg={<ReactSVG1 />}
              title="General Contracting"
              description="This is going to be description of our services This is going to be description of our services"
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <Service
              svg={<ReactSVG1 />}
              title="General Contracting"
              description="This is going to be description of our services This is going to be description of our services"
            />
          </Grid>
        </Grid>
      </div>
      <div className="services__row">
        <Grid className="grid__container" container spacing={2}>
          <Grid item xs={12} sm={4} lg={4}>
            <Service
              svg={<ReactSVG1 />}
              title="General Contracting"
              description="This is going to be description of our services This is going to be description of our services"
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <Service
              svg={<ReactSVG1 />}
              title="General Contracting"
              description="This is going to be description of our services This is going to be description of our services"
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <Service
              svg={<ReactSVG1 />}
              title="General Contracting"
              description="This is going to be description of our services This is going to be description of our services"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Services;
