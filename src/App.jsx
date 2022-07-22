import React from "react";
import Hero from "./components/hero/hero.component";

import "./App.scss";

import MainNavigationBar from "./components/main-navigation-bar/main-navigation-bar.component";

const App = () => {
  return (
    <>
      <MainNavigationBar />
      <Hero />
    </>
  );
};

export default App;
