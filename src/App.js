import React from "react";
import "./App.css";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { Container, Row, Col } from "react-materialize";

import { HeroCard } from "./components/HeroCard/HeroCard";
import "./App.css";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { FetchHeroes } from "./services/FetchData/FetchHeroes";
// import { MyTeamCards } from './Components/MyTeamCards/MyTeamCards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedHeroes: [],
      filteredHeroes: [],
    };
  }

  componentDidMount() {
    FetchHeroes().then((data) => {
      this.setState({
        searchedHeroes: data.data.results,
        filteredHeroes: data.data.results,
      });
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
            {this.state.filteredHeroes.map((hero, i) => (
              <HeroCard key={i} avatar={hero.thumbnail.path} name={hero.name} />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
