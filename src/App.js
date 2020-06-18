import React from "react";
import "./App.css";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { Container, Row, Col } from "react-materialize";

import { Header } from "./components/Header/Header";
import { HeroCard } from "./components/HeroCard/HeroCard";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { HeroServices } from "./services/fetchData/HeroServices";

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
        <Header />
        <SearchBar searchHeroes={this.searchHeroes} />

        <Row>
          <Col s={9}>
            {this.state.filteredHeroes.map((hero) => (
              <HeroCard name={hero.name} avatar={hero.avatar} key={hero.id} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
