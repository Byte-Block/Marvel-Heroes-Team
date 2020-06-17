import React from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { HeroCard } from "./Components/HeroCard/HeroCard";
import './App.css';
import { Header } from './Components/Header/Header';
import { SearchBar } from './Components/SearchBar/SearchBar';
import { FetchHeroes } from './Services/FetchData/FetchHeroes';
// import { MyTeamCards } from './Components/MyTeamCards/MyTeamCards';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedHeroes: [],
      filteredHeroes: []
    }
  }

  componentDidMount() {
    FetchHeroes()
      .then(data => {
        this.setState({ searchedHeroes: data.data.results, filteredHeroes: data.data.results })
      })
  }

  searchHeroes = (text) => {
    const filtered = this.state.searchedHeroes.filter(hero => {
      return hero.name.toLowerCase().includes(text)
    })
    this.setState({ filteredHeroes: filtered })
  }
  render() {
    return (
      <div>
        <Header />
        <SearchBar searchHeroes={this.searchHeroes} />
        {this.state.filteredHeroes.map(hero => (
          < HeroCard avatar={hero.thumbnail.path} name={hero.name} />
        ))}
      </div >
    );
  }
}

export default App;
