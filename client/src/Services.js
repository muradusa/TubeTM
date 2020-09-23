import React from "react";
import "./Services.css";
import Service from "./Service";
import { ReactComponent as ReactSVG1 } from "./images/sketch.svg";

function Services() {
  const services = [
    {
      svg: <ReactSVG1 />,
      title: "Service 1",
      description: "This is going to be description of our services",
    },
    {
      svg: <ReactSVG1 />,
      title: "Service 1",
      description: "This is going to be description of our services",
    },
    {
      svg: <ReactSVG1 />,
      title: "Service 1",
      description: "This is going to be description of our services",
    },
    {
      svg: <ReactSVG1 />,
      title: "Service 1",
      description: "This is going to be description of our services",
    },
    {
      svg: <ReactSVG1 />,
      title: "Service 1",
      description: "This is going to be description of our services",
    },
    {
      svg: <ReactSVG1 />,
      title: "Service 1",
      description: "This is going to be description of our services",
    },
  ];
  return (
    <div className="services">
      {services.map((service) => (
        <Service
          svg={service.svg}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
}

export default Services;
