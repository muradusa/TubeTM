import React from "react";
import "./Header.css";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from "../src/images/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header__topLeft">
          <div className="header__topLeftInfo">
            <PhoneEnabledIcon />
            <p>925-658-1600</p>
          </div>
          <div className="header__topLeftInfo">
            <EmailIcon />
            <p>info@welyons</p>
          </div>
          <div className="header__topLeftInfo">
            <LocationOnIcon />
            <p>Walnut Creek, CA</p>
          </div>
        </div>
        <div className="header__topRight">
          <FacebookIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottomLeft">
          <img src={logo} alt="" />
        </div>
        <div className="header__bottomRight">
          <h3>home</h3>
          <h3>services</h3>
          <h3>portfolio</h3>
          <h3>abous us</h3>
          <h3>contact us</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
