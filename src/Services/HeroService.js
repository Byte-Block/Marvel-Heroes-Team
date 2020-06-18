import { Hero } from "../entities/HeroEntity";
const api_Key = "6df71823e082a7c62f84539374749aec";

const HeroService = () => {
  return fetch(
    `http://gateway.marvel.com/v1/public/characters?apikey=${api_Key}`
  )
    .then((response) => response.json())
    .then((response) => response.data.results)
    .then((response) =>
      response.map((hero) => new Hero(hero.name, hero.thumbnail.path, hero.id))
    );
};

const HeroesNameStartsWithService = ( ) => {
  return fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=iron&apikey=`)
}

export { HeroService };
