import React, { useEffect, useState } from "react";
import { Row, Col } from "react-materialize";
import { HeroCard } from "../HeroCard/HeroCard";
import { SearchBar } from "../SearchBar/SearchBar";
import { HeroService } from "../../services/HeroService";

const Home = () => {
  const [heroes, setHeroes] = useState([]);
 
  const fetchHeroes = () => {
    HeroService.fetchAll().then((heroes) => {
      setHeroes(heroes);
    });
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  const searchHeroes = (query) => {
    HeroService.search(query).then((heroes) => {
      this.setState({ heroes });
    });
  };

  return (
    <>
      <SearchBar searchHeroes={searchHeroes} />
      <Row>
        <Col s={9}>
          {heroes.map((hero) => (
            <HeroCard
              id={hero.id}
              name={hero.name}
              avatar={hero.avatar}
              key={hero.id}
            />
          ))}
        </Col>
      </Row>
    </>
  );
};

export { Home };
