import React from "react";
import "./About.css";
import Grid from "@material-ui/core/Grid";
import Employee from "./Employee";
import greg from "../../images/greg.png";
import { ConfirmationNumberSharp } from "@material-ui/icons";

const about1 =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

function About() {
  return (
    <div className="about">
      <div className="about__banner"></div>
      <div className="about__title">
        <p>About Us</p>
      </div>
      <div className="about__section">
        <div
          className="about__sectionImage"
          style={{ backgroundImage: `url(${about1}` }}
        ></div>

        <div className="about__sectionText">
          <h3>Why us</h3>
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

        <div className="about__sectionText">
          <h3>Why us</h3>
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

        <div
          className="about__sectionImage"
          style={{ backgroundImage: `url(${about1}` }}
        ></div>
      </div>
      <div className="about__team">
        <div className="about__teamTitle">
          <p>Our Team</p>
        </div>
        <div className="about__teamItems">
          <div className="about__employee">
            <Employee
              className="about__employee"
              photo={greg}
              name="Greg Lyons"
              title="President/CEO"
            />
          </div>
          <div className="about__employee">
            <Employee
              className="about__employee"
              photo={greg}
              name="Greg Lyons"
              title="President/CEO"
            />
          </div>
          <div className="about__employee">
            <Employee
              className="about__employee"
              photo={greg}
              name="Greg Lyons"
              title="President/CEO"
            />
          </div>
          <div className="about__employee">
            <Employee
              className="about__employee"
              photo={greg}
              name="Greg Lyons"
              title="President/CEO"
            />
          </div>
          <div className="about__employee">
            <Employee
              className="about__employee"
              photo={greg}
              name="Greg Lyons"
              title="President/CEO"
            />
          </div>
          <div className="about__employee">
            <Employee
              className="about__employee"
              photo={greg}
              name="Greg Lyons"
              title="President/CEO"
            />
          </div>
          <div className="about__employee">
            <Employee
              className="about__employee"
              photo={greg}
              name="Greg Lyons"
              title="President/CEO"
            />
          </div>
          <div className="about__employee">
            <Employee
              className="about__employee"
              photo={greg}
              name="Greg Lyons"
              title="President/CEO"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
