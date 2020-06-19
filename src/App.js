import React from "react";
import PropTypes from "prop-types";
import "./App.css";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { Container, Row, Col } from "react-materialize";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HeroCard } from "./components/HeroCard/HeroCard";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { HeroServices } from "./services/HeroServices";

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
        <Footer />
      </Container>
    );
  }
}

HeroCard.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string
};

HeroCard.defaultProps = {
  name: "Bruce Wayne",
  avatar: "https://www.fishandcherries.com/wp-content/uploads/2017/02/Batman-Return-of-the-Caped-Crusaders-2016-movie-poster-200x300.jpg"
};

export default App;
