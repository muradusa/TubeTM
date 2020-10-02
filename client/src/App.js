import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./pages/home/Home";
import Footer from "./Footer";
import About from "./pages/about/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
import ProjectPage from "./pages/portfolio/ProjectPage";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/portfolio/project1">
            <Header />
            <ProjectPage />
            <Footer />
          </Route>
          <Route path="/portfolio">
            <Header />
            <Portfolio />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
