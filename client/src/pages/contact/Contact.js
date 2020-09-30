import { Grid } from "@material-ui/core";
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__banner">
        <div className="contact__bannerImg">
          <img
            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="contact__title">
        <p>Contact Us</p>
      </div>
      <div className="contact__section">
        <Grid className="grid__container" container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.9024105233493!2d-122.05073624917259!3d37.90934367963577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808561b0b47cb7d7%3A0x1e96681da067a06!2s1301%20Ygnacio%20Valley%20Rd%2C%20Walnut%20Creek%2C%20CA%2094598!5e0!3m2!1sen!2sus!4v1601475404561!5m2!1sen!2sus"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen="true"
              ></iframe>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="contact__form">
              <form className="form" action="submit">
                <p>Name</p>
                <input type="text" placeholder="Name" />
                <p>Email</p>
                <input type="email" placeholder="Email" />
                <p>Subject</p>
                <input
                  className="contact__subject"
                  type="text"
                  placeholder=""
                />
                <p>Message</p>
                <input
                  className="contact__message"
                  type="text"
                  placeholder="Message"
                />
                <button className="contact__button">Send</button>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Contact;

// width="600"
// height="450"
// frameborder="0"
// style="border:0;"
// allowfullscreen=""
// aria-hidden="false"
// tabindex="0"
