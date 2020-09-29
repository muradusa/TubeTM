import React from "react";
import "./About.css";
import Grid from "@material-ui/core/Grid";
import Employee from "./Employee";
import greg from "../../images/greg.png";

function About() {
  return (
    <div className="about">
      <div className="about__banner">
        <img
          src="https://images.unsplash.com/photo-1528238646472-f2366160b6c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
          alt=""
        />
      </div>
      <div className="about__title">
        <p>About Us</p>
      </div>
      <div className="about__section">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <div className="about__sectionImage">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="about__sectionText">
              <h3>Why us</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ‘Content
                here, content here’, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for ‘lorem
                ipsum’ will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <div className="about__sectionText">
              <h3>Why us</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using ‘Content
                here, content here’, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for ‘lorem
                ipsum’ will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="about__sectionImage">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt=""
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="about__team">
        <div className="about__teamTitle">
          <p>Our Team</p>
        </div>
        <div className="about__teamItems">
          <Grid className="team__row" container spacing={5}>
            <Grid item xs={12} sm={6} md={3}>
              <Employee photo={greg} name="Greg Lyons" title="President/CEO" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Employee photo={greg} name="Greg Lyons" title="President/CEO" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Employee photo={greg} name="Greg Lyons" title="President/CEO" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Employee photo={greg} name="Greg Lyons" title="President/CEO" />
            </Grid>
          </Grid>
        </div>
        <div className="about__teamItems">
          <Grid className="team__row" container spacing={5}>
            <Grid item xs={12} sm={6} md={3}>
              <Employee photo={greg} name="Greg Lyons" title="President/CEO" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Employee photo={greg} name="Greg Lyons" title="President/CEO" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Employee photo={greg} name="Greg Lyons" title="President/CEO" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Employee photo={greg} name="Greg Lyons" title="President/CEO" />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default About;
