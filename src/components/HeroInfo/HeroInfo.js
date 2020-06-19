import React from "react";
import "./HeroInfo.css";

class HeroInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: null,
    };
  }

  fetchSingleHero = (id) => {
    return fetch(
      `http://gateway.marvel.com/v1/public/characters/1017100?apikey=6df71823e082a7c62f84539374749aec`
    )
      .then((response) => response.json())
      .then((id) => console.log(id));
  };

  componentDidMount() {
    this.fetchSingleHero();
  }

  render() {
    return (
      <div>
        <div className="SingleHero">
          <div className="SingleHero__title">
            <h3>MarvelHeroes</h3>
          </div>
          <div>
            <h4>Homepage</h4>
          </div>
        </div>
      </div>
    );
  }
}

export { HeroInfo };
