import React from "react";
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
// Images
const bogliasco =
  "https://images.unsplash.com/photo-1529792083865-d23889753466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
const countyClare =
  "https://images.unsplash.com/photo-1563166423-482a8c14b2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
const craterRock =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
const giauPass =
  "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80";

function ProjectPageSlider() {
  return (
    <div className="projectPageSlider">
      <HeroSlider
        slidingAnimation="fade"
        orientation="horizontal"
        initialSlide={1}
        onBeforeChange={(previousSlide, nextSlide) =>
          console.log("onBeforeChange", previousSlide, nextSlide)
        }
        onChange={(nextSlide) => console.log("onChange", nextSlide)}
        onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
        settings={{
          slidingDuration: 250,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 5000,
          height: "60vh",
          sliderColor: "black",
        }}
      >
        <Slide
          background={{
            backgroundImage: giauPass,
            backgroundAttachment: "fixed",
          }}
        />
        <Slide
          background={{
            backgroundImage: bogliasco,
            backgroundAttachment: "fixed",
          }}
        />
        <Slide
          background={{
            backgroundImage: countyClare,
            backgroundAttachment: "fixed",
          }}
        />
        <Slide
          background={{
            backgroundImage: craterRock,
            backgroundAttachment: "fixed",
          }}
        />
        <Nav />
      </HeroSlider>
    </div>
  );
}

export default ProjectPageSlider;
