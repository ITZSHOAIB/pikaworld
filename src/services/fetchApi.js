import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/";

export const fetchAllPokemons = () => {
  axios.get(baseURL + "pokemon?limit=1118").then((response) => {
    console.log(response.data);
  });
};

export const fetchPokemon = async (pokemonName) => {
    typeof(pokemonName) === 'string' && pokemonName.trim() === ""
    ? (pokemonName = Math.floor(Math.random() * 100))
    : (void(0));
  const { data } = await axios.get(baseURL + `pokemon/${pokemonName}`);

  return {
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`,
    data: data,
  };
};
