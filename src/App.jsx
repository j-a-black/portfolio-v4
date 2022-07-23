import React from "react";
import Hero from "./components/hero/hero.component";
import About from "./components/about/about.component";

import "./App.scss";

import MainNavigationBar from "./components/main-navigation-bar/main-navigation-bar.component";

const App = () => {
  return (
    <>
      <MainNavigationBar />
      <Hero />
      <About />
    </>
  );
};

export default App;
