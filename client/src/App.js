import React from "react";
import "./App.css";
import Header from "./Header";
import Slider from "./Slider";
import Services from "./Services";
import PhotoGallery from "./PhotoGallery";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import Sponsors from "./Sponsors";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Slider />
      <Services />
      <PhotoGallery />
      <WhyChooseUs />
      <Testimonials />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
