import React from "react";
import "./Header.css";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <Grid container className="header__top">
        <Grid item className="header__topLeft" xs={12} sm={6}>
          <div className="header__topLeftInfo">
            <PhoneEnabledIcon />
            <p>925-658-1600</p>
          </div>
          <div className="header__topLeftInfo">
            <EmailIcon />
            <p>info@welyons.com</p>
          </div>
          <div className="header__topLeftInfo">
            <LocationOnIcon />
            <p>Walnut Creek, CA</p>
          </div>
        </Grid>
        <Grid item className="header__topRight" xs={12} sm={6}>
          <FacebookIcon />
          <LinkedInIcon />
          <InstagramIcon />
        </Grid>
      </Grid>

      <Grid container className="header__bottom">
        <Grid item className="header__bottomLeft" xs={12} sm={6}>
          <img src={logo} alt="" />
        </Grid>
        <Grid item className="header__topRight" xs={12} sm={6}>
          <Link className="header__link" to="/">
            <h3>Home</h3>
          </Link>
          <Link className="header__link" to="/">
            <h3>Services</h3>
          </Link>

          <Link className="header__link" to="/portfolio">
            <h3>Portfolio</h3>
          </Link>
          <Link className="header__link" to="/about">
            <h3>About</h3>
          </Link>

          <Link className="header__link" to="/contact">
            <h3>Contact Us</h3>{" "}
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header;
