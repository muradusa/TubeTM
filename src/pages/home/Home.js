import React from "react";
import Slider from "./Slider";
import Services from "./Services";
import PhotoGallery from "./PhotoGallery";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import Sponsors from "./Sponsors";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Slider />
      <Services />
      <PhotoGallery />
      <WhyChooseUs />
      <Testimonials />
      <Sponsors />
    </div>
  );
}

export default Home;
