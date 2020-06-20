import React from "react";

import { Row, Col } from "react-materialize";

import { HeroCard } from "../HeroCard/HeroCard";
import { SearchBar } from "../SearchBar/SearchBar";
import { HeroService } from "../../services/HeroService";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [],
    };

    this.searchHeroes = this.searchHeroes.bind(this);
  }

  componentDidMount() {
    this.fetchHeroes();
  }

  fetchHeroes() {
    HeroService.fetchAll().then((heroes) => {
      this.setState({ heroes });
    });
  }

  searchHeroes(query) {
    HeroService.search(query).then((heroes) => {
      this.setState({ heroes });
    });
  }

  render() {
    return (
      <>
        <SearchBar searchHeroes={this.searchHeroes} />
        <Row>
          <Col s={9}>
            {this.state.heroes.map((hero) => (
              <HeroCard name={hero.name} avatar={hero.avatar} key={hero.id} />
            ))}
          </Col>
        </Row>
      </>
    );
  }
}

export { Home };
