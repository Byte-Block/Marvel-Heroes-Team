import React from "react";
import { Container } from "react-materialize";
import "./App.css";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { SinglePage } from "./components/SinglePage/SinglePage";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Home />
        <Footer />
        <SinglePage />
      </Container>
    );
  }
}

export default App;
