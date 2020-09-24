import React from "react";
import "./Services.css";
import Service from "./Service";
import { ReactComponent as ReactSVG1 } from "./images/sketch.svg";

function Services() {
  return (
    <div className="services">
      <div className="services__title">
        <h2>Our Services</h2>
      </div>
      <div className="services__row">
        <Service
          svg={<ReactSVG1 />}
          title="General Contracting"
          description="This is going to be description of our services This is going to be description of our services"
        />
        <Service
          svg={<ReactSVG1 />}
          title="Design Build"
          description="This is going to be description of our services This is going to be description of our services"
        />
        <Service
          svg={<ReactSVG1 />}
          title="Preconstruction"
          description="This is going to be description of our services This is going to be description of our services"
        />
      </div>

      <div className="services__row">
        <Service
          svg={<ReactSVG1 />}
          title="Sustainable Construction"
          description="This is going to be description of our services This is going to be description of our services"
        />
        <Service
          svg={<ReactSVG1 />}
          title="Value Engineering"
          description="This is going to be description of our services This is going to be description of our services"
        />
        <Service
          svg={<ReactSVG1 />}
          title="Construction Management"
          description="This is going to be description of our services This is going to be description of our services"
        />
      </div>
    </div>
  );
}

export default Services;
