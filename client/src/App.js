import React from "react";
import "./App.css";
import Header from "./Header";
import Slider from "./Slider";
import Services from "./Services";
import PhotoGallery from "./PhotoGallery";

function App() {
  return (
    <div className="app">
      <Header />
      <Slider />
      <Services />
      <PhotoGallery />
    </div>
  );
}

export default App;
