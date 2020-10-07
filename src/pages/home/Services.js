import React from "react";
import "./Services.css";
import Service from "./Service";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as ReactSVG1 } from "../../images/sketch.svg";

function Services() {
  return (
    <div className="services">
      <div className="services__title">
        <p>Our Services</p>
      </div>

      <div className="services__row">
        <div className="services__item">
          <Service
            svg={<ReactSVG1 />}
            title="General Contracting"
            description="This is going to be description of our services This is going to be description of our services"
          />
        </div>
        <div className="services__item">
          <Service
            svg={<ReactSVG1 />}
            title="General Contracting"
            description="This is going to be description of our services This is going to be description of our services"
          />
        </div>
        <div className="services__item">
          <Service
            svg={<ReactSVG1 />}
            title="General Contracting"
            description="This is going to be description of our services This is going to be description of our services"
          />
        </div>

        <div className="services__item">
          <Service
            svg={<ReactSVG1 />}
            title="General Contracting"
            description="This is going to be description of our services This is going to be description of our services"
          />
        </div>
        <div className="services__item">
          <Service
            svg={<ReactSVG1 />}
            title="General Contracting"
            description="This is going to be description of our services This is going to be description of our services"
          />
        </div>
        <div className="services__item">
          <Service
            svg={<ReactSVG1 />}
            title="General Contracting"
            description="This is going to be description of our services This is going to be description of our services"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
