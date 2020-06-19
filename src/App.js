import React from "react";
import { Container } from "react-materialize";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { HeroInfo } from "./components/HeroInfo/HeroInfo";

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Switch>
          <Route exact path="/info/:id" component={HeroInfo} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Container>
    );
  }
}

export default App;
