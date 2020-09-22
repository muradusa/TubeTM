import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import Wrapper from "./UI/Wrapper/Wrapper";
import Title from "./UI/Title/Title";
import Subtitle from "./UI/Subtitle/Subtitle";

// Images
const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

function Slider() {
  return (
    <div className="slider">
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
          height: "80vh",
          sliderColor: "black",
        }}
      >
        <OverlayContainer>
          <Wrapper>
            <Title>Basic Slider</Title>
            <Subtitle>Slides' background attachment set to fixed</Subtitle>
            <Subtitle>Contact us now</Subtitle>
            <button>Click Me</button>
          </Wrapper>
        </OverlayContainer>

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

export default Slider;
