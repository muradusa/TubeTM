import React from "react";
import "./App.css";
import Header from "./Header";
import Slider from "./Slider";
import Services from "./Services";
import PhotoGallery from "./PhotoGallery";
import WhyChooseUs from "./WhyChooseUs";

function App() {
  return (
    <div className="app">
      <Header />
      <Slider />
      <Services />
      <PhotoGallery />
      <WhyChooseUs />
    </div>
  );
}

export default App;
