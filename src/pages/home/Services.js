import React from "react";
import "./Services.css";
import Service from "./Service";
import Grid from "@material-ui/core/Grid";
import { ReactComponent as ReactSVG1 } from "../../images/sketch.svg";
// import { ReactComponent as Icon1 } from "../../images/icon1.svg";

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
            title="Construction Managment"
            description="This is going to be description of our services This is going to be description of our services"
          />
        </div>
        <div className="services__item">
          <Service
            svg={<ReactSVG1 />}
            title="Design Build"
            description="This is going to be description of our services This is going to be description of our services"
          />
        </div>

        <div className="services__item">
          <Service
            svg={<ReactSVG1 />}
            title="Preconstruction"
            description="This is going to be description of our services This is going to be description of our services"
          />
        </div>
        <div className="services__item">
          <Service
            svg={<ReactSVG1 />}
            title="Value Engineering"
            description="This is going to be description of our services This is going to be description of our services"
          />
        </div>
        <div className="services__item">
          <Service
            svg={<ReactSVG1 />}
            title="Sustainable Construction"
            description="This is going to be description of our services This is going to be description of our services"
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
