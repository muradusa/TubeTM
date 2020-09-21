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
          <h2>home</h2>
          <h2>services</h2>
          <h2>portfolio</h2>
          <h2>abous us</h2>
          <h2>contat us</h2>
        </div>
      </div>
    </div>
  );
}

export default Header;
