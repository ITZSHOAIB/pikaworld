import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2";

export const fetchAllPokemons = async () => {
  const offset = Math.floor(Math.random() * (600 - 1 + 1) + 1);
  const { data } = await axios.get(
    `${baseURL}/pokemon?limit=32&offset=${offset}`
  );

  const pokeListAllPromise = data.results.map((result) => {
    return axios.get(result.url);
  });

  let pokeListFinalData = await Promise.all(pokeListAllPromise);

  pokeListFinalData = pokeListFinalData.map((pokeData) => {
    return {
      sprite: Object.values(pokeData.data.sprites.other.dream_world).filter(
        (sprite) => sprite !== null
      )[0],
      data: pokeData.data,
    };
  });

  return { pokemonsList: pokeListFinalData };
};

export const fetchPokemon = async (pokemonName) => {
  typeof pokemonName === "string" && pokemonName.trim() === ""
    ? (pokemonName = Math.floor(Math.random() * 600))
    : void 0;
  const { data } = await axios.get(`${baseURL}/pokemon/${pokemonName}`);

  return {
    sprite: Object.values(data.sprites.other.dream_world).filter(
      (sprite) => sprite !== null
    )[0],
    data: data,
  };
};
