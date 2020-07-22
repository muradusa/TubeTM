import React from 'react';
import AppBar from "./modules/components/AppBar";
import ProductHero from "./modules/components/ProductHero";
import ProductValues from "./modules/components/ProductValues";
import ProductCategories from "./modules/components/ProductCategories";
import ProductTestimonials from "./modules/components/ProductTestimonials";
import ProductCTA from "./modules/components/ProductCTA";
import ProductSmokingHero from "./modules/components/ProductSmokingHero";
import Footer from "./modules/components/Footer";



function App() {
  return (
    <div>
      <AppBar />
      <ProductHero />
      <ProductTestimonials />
      <ProductCategories />
      <ProductValues />
      <ProductCTA />
      <ProductSmokingHero />
      <Footer />
      
    </div>
  );
}

export default App;
