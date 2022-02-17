import { useContext, useEffect } from "react";
import { fetchPokemon } from "../services/fetchApi";
import { PokemonContext } from "../context/pokemon-context";

export default function usePokemon(setLocalState, id = null) {
  const { pokemon, setPokemon } = useContext(PokemonContext);
  const pokemonId = id || Math.floor(Math.random() * 100);

  useEffect(() => {
    fetchPokemon(pokemonId).then((data) => {
      setPokemon(data);
      setLocalState(data);
    });
  }, []);

  return pokemon;
}
