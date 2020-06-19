import { Hero } from "../entities/HeroEntity";
const api_Key = "6df71823e082a7c62f84539374749aec";

const HeroesService = () => {
  return fetch(
    `http://gateway.marvel.com/v1/public/characters?apikey=${api_Key}`
  )
    .then((response) => response.json())
    .then((response) => response.data.results)
    .then((response) =>
      response.map((hero) => new Hero(hero.name, hero.thumbnail.path, hero.id))
    );
};

const HeroesNameStartsWithService = (name) => {
  return fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&apikey=${api_Key}`)
    .then(response => response.json())
    .then(heroes => heroes.data.results)
    .then(heroes => heroes.map(hero => new Hero(hero.name, hero.thumbnail.path, hero.id))
    );
};

export { HeroesService, HeroesNameStartsWithService };

//fixing services folder name to lower caps on remote master