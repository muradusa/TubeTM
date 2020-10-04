import React from "react";
import "./Portfolio.css";
import project1 from "../../images/project1.png";
import { Grid } from "@material-ui/core";
import Project from "./Project";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio__banner">
        <img
          src="https://images.unsplash.com/photo-1563257764-ec4bd2983cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </div>
      <div className="portfolio__title">
        <p>Portfolio</p>
      </div>
      <div className="portfolio__section">
        <Grid container className="portfolio__container" spacing={2}>
          <Grid item className="portfolio__item" xs={12} sm={6} md={3}>
            <Link to="/portfolio/project1">
              <Project img={project1} title="Project 1" />
            </Link>
          </Grid>
          <Grid item className="portfolio__item" xs={12} sm={6} md={3}>
            <Project img={project1} title="Project 2" />
          </Grid>
          <Grid item className="portfolio__item" xs={12} sm={6} md={3}>
            <Project img={project1} title="Project 3" />
          </Grid>
          <Grid item className="portfolio__item" xs={12} sm={6} md={3}>
            <Project img={project1} title="Project 4" />
          </Grid>
        </Grid>
        <Grid container className="portfolio__container" spacing={2}>
          <Grid item className="portfolio__item" xs={12} sm={6} md={3}>
            <Project img={project1} title="Project 5" />
          </Grid>
          <Grid item className="portfolio__item" xs={12} sm={6} md={3}>
            <Project img={project1} title="Project 6" />
          </Grid>
          <Grid item className="portfolio__item" xs={12} sm={6} md={3}>
            <Project img={project1} title="Project 7" />
          </Grid>
          <Grid item className="portfolio__item" xs={12} sm={6} md={3}>
            <Project img={project1} title="Project 8" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Portfolio;
