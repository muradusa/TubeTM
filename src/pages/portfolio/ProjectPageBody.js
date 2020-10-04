import React from "react";
import "./ProjectPageBody.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function ProjectPageBody() {
  return (
    <div className="projectPageBody">
      <div className="projectPageBody__title">
        <p>Project 1</p>
      </div>
      <div className="projectPageBody__description">
        <div className="projectPageBody__descriptionLeft">
          <h3>Project Description</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for ‘lorem ipsum’ will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div className="projectPageBody__descriptionRight">
          <div className="services">
            <h3>Services</h3>

            <ul>
              <li> General Contracting</li>
              <li>Design Build</li>
              <li>Value-Engineering</li>
              <li>Preconstruction</li>
            </ul>
          </div>
          <div className="location">
            <h3>Location</h3>
            <div className="location__container">
              <LocationOnIcon />
              <p>Walnut Creek, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPageBody;
