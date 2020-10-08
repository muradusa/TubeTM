import React from "react";
import "./Employee.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
// import {Link} from "react-router-dom";

function Employee({ photo, name, title }) {
  return (
    <div className="employee">
      <div
        className="employee__photo"
        style={{ backgroundImage: `url(${photo})` }}
      >
        {/* <img src={photo} alt="" /> */}
      </div>
      <div className="employee__name">
        <p>{name}</p>
      </div>
      <div className="employee__title">
        <p>{title}</p>
      </div>
      <div className="employee__social">
        <FacebookIcon />
        <LinkedInIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}

export default Employee;
