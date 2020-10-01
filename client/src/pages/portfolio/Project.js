import React from "react";
import "./Project.css";

function Project({ img, title }) {
  return (
    <div className="project">
      <div
        className="project__container"
        style={{ backgroundImage: `url(${img})` }}
      >
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Project;
