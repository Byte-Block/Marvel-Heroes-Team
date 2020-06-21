import { Hero } from "../entities/HeroEntity";
import axios from "axios";

const api_Key = "6df71823e082a7c62f84539374749aec";

class HeroService {
  static fetchAll() {
    return axios
      .get(`https://gateway.marvel.com/v1/public/characters?apikey=${api_Key}`)
      .then((heroes) =>
        heroes.data.data.results.map(
          (hero) => new Hero(hero.name, hero.thumbnail.path, hero.id)
        )
      );
  }

  static fetchInfo(id) {
    return axios
    .get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${api_Key}`)
    .then((response)=>response)
  }

  static fetchComics(id){
    return axios
    .get(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?format=comic&formatType=comic&apikey=${api_Key}`)
    .then(response=>response)
  }

  static search(name) {
    return axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&apikey=${api_Key}`
      )
      .then((heroes) =>
        heroes.data.data.results.map(
          (hero) => new Hero(hero.name, hero.thumbnail.path, hero.id)
        )
      );
  }
}

export { HeroService };
