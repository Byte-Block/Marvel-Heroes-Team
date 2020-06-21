import React from 'react';
import './SinglePage.css';
import { HeroService } from "../../services/HeroService";
import logo from '../../images/marvel.png';
import { Col, Row, Button } from 'react-materialize';
import { Link } from 'react-router-dom';


class SinglePage extends React.Component{
constructor(props){
    super(props);
    this.state={
        hero:null,
        comics:[],
        showComics:false
    }
}

fetchSingleHero=()=>{
    HeroService.fetchInfo(this.props.match.params.id)
    .then(response=>this.setState({hero:response.data.data.results[0]}))
}

fetchComicsData=()=>{
    HeroService.fetchComics(this.props.match.params.id)
    .then(response=>this.setState({comics:response.data.data.results.slice(0,4)}))
}

componentDidMount(){
    this.fetchSingleHero()
    this.fetchComicsData()
    
}

comicsShown=()=>{
    this.setState({showComics:!this.state.showComics})
}
render(){
    return (
        <>
        <Row>
        <Col s={6}>
            <img src={logo} alt="marvel-logo" className="infoPage__logo"/>
        </Col>
        <Col s={6}>
        <Link to='/'><h6 className="infoPage__return">Homepage</h6></Link>
        </Col>
        </Row>
        <Row>
            <Col s={6}>
        {this.state.hero
        ? <img src={`${this.state.hero.thumbnail.path}/landscape_incredible.jpg`} />
        :<div></div>
        }
        </Col>
        <Col s={6}>
        {this.state.hero
        ?<div>
            <h3 className="infoPage__name">{this.state.hero.name}</h3>
        <p>{this.state.description}</p>
        </div>
        :<div><p></p></div>
        }
        </Col>
        </Row>
        <Row><Button onClick={this.comicsShown}>Comics</Button></Row>
        <Row>
        {this.state.showComics
        ?this.state.comics.map(comic=><Col s={3}><img src={`${comic.thumbnail.path}/portrait_medium.jpg`}/></Col>)
        :<div></div>
    }
        </Row>
        </>
    )
}
}

export { SinglePage };