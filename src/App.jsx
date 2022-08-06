import React from "react";
import Hero from "./components/hero/hero.component";
import About from "./components/about/about.component";
import MainNavigationBar from "./components/main-navigation-bar/main-navigation-bar.component";
import Projects from "./components/projects/projects.component";
import Footer from "./components/footer/footer.component";

import "./App.scss";

const App = () => {
  return (
    <>
      <MainNavigationBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
