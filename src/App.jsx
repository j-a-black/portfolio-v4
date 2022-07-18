import React from "react";
import Hero from "./components/hero/hero.component";

import MainNavigationBar from "./components/main-navigation-bar/main-navigation-bar.component";

const App = () => {
  return (
    <div>
      <MainNavigationBar />
      <Hero />
    </div>
  );
};

export default App;
