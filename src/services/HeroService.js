import { Hero } from "../entities/HeroEntity";
const api_Key = "6df71823e082a7c62f84539374749aec";

class HeroService {
  static fetchAll() {
    return fetch(
      `http://gateway.marvel.com/v1/public/characters?apikey=${api_Key}`
    )
      .then((response) => response.json())
      .then((response) => response.data.results)
      .then((response) =>
        response.map(
          (hero) => new Hero(hero.name, hero.thumbnail.path, hero.id)
        )
      );
  }

  static fetch(id) {
    // fetch single hero
  }

  static search(name) {
    return fetch(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&apikey=${api_Key}`
    )
      .then((response) => response.json())
      .then((heroes) => heroes.data.results)
      .then((heroes) =>
        heroes.map((hero) => new Hero(hero.name, hero.thumbnail.path, hero.id))
      );
  }
}

export { HeroService };
