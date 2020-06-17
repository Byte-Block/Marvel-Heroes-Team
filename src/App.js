import React from "react";
import "./App.css";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { HeroCard } from "./components/HeroCard/HeroCard";

function App() {
  return (
    <div className="App">
      <HeroCard />
    </div>
  );
}

export default App;
