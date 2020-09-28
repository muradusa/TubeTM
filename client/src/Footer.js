import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__social">
        <div className="footer__socialItem">
          <FacebookIcon />
        </div>

        <div className="footer__socialItem">
          <LinkedInIcon />
        </div>
        <div className="footer__socialItem">
          <InstagramIcon />
        </div>
      </div>
      <div className="footer__nav">
        <div className="footer__navLeft">
          <h4>Left Footer</h4>
          <div className="footer__links">
            <a href="">Link1</a>
            <a href="">Link1</a>
            <a href="">Link1</a>
          </div>
        </div>
        <div className="footer__navCenter">
          <h4>Center Footer</h4>
          <div className="footer__links">
            <a href="">Link1</a>
            <a href="">Link1</a>
            <a href="">Link1</a>
          </div>
        </div>
        <div className="footer__navRight">
          <h4>Right Footer</h4>
          <div className="footer__links">
            <a href="">Link1</a>
            <a href="">Link1</a>
            <a href="">Link1</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>2020 W.E. Lyons Construction. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
