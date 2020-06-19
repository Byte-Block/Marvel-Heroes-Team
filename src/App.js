import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { Container, Row, Col } from "react-materialize";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HeroCard } from "./components/HeroCard/HeroCard";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { HeroServices } from "./services/HeroServices";
import { HeroInfo } from "./components/HeroInfo/HeroInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedHeroes: [],
      filteredHeroes: [],
    };
  }

  componentDidMount() {
    HeroServices().then((hero) => {
      this.setState({ searchedHeroes: hero, filteredHeroes: hero });
    });
  }

  searchHeroes = (text) => {
    const filtered = this.state.searchedHeroes.filter((hero) => {
      return hero.name.toLowerCase().includes(text);
    });
    this.setState({ filteredHeroes: filtered });
  };

  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/info" component={HeroInfo} />
        </Switch>
        <Header />
        <SearchBar searchHeroes={this.searchHeroes} />

        <Row>
          <Col s={9}>
            {this.state.filteredHeroes.map((hero) => (
              <HeroCard name={hero.name} avatar={hero.avatar} key={hero.id} />
            ))}
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default App;
