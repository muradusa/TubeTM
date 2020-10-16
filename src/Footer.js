import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useHistory } from "react-router-dom";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Footer() {
  let history = useHistory();

  return (
    <div className="footer">
      <div className="footer__nav">
        <div className="footer__navLeft">
          <h3 onClick={() => history.push("contact")}>Contact Us</h3>

          <div className="footer__contact">
            <div className="footer__contactItem">
              <PhoneEnabledIcon />
              <p>925-658-1600</p>
            </div>
            <div className="footer__contactItem">
              <EmailIcon />
              <p>info@welyons.com</p>
            </div>
            <div className="footer__contactItem">
              <LocationOnIcon />
              <p>Walnut Creek, CA</p>
            </div>
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
          </div>
        </div>
        <div className="footer__navCenter">
          <h3>Company</h3>
          <div className="footer__links">
            <a href="">In the news</a>
            <a href="">Job opportunitites</a>
            <a href="">Link1</a>
          </div>
        </div>
        <div className="footer__navRight">
          <h3>Menu</h3>
          <div className="footer__links">
            <a href="/home">Home</a>
            <a href="/services">Services</a>
            <a href="/portfolio">Portfolio</a>
            <a href="about">About Us</a>
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
