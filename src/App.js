import React from "react";
import { Container } from "react-materialize";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { SinglePage } from './components/SinglePage/SinglePage';
import { Switch, Route} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/infopage/:id" component={SinglePage} />
        </Switch>
        <Footer />
      </Container>
    );
  }
}

export default App;
