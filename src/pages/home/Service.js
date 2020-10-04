import React from "react";
import "./Service.css";

function Service({ svg, title, description }) {
  return (
    <div className="service">
      <div className="service__container">
        <div className="service__svg">{svg}</div>
        <div className="service__title">
          <h1>{title}</h1>
        </div>
        <div className="service__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
