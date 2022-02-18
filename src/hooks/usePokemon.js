import { useContext, useEffect } from "react";
import { fetchPokemon } from "../services/fetchApi";
import { PokemonContext } from "../context/pokemon-context";

export default function usePokemon(setLocalState, cardOrder, id = null) {
  const { updatePokemon } = useContext(PokemonContext);
  const pokemonId = id || Math.floor(Math.random() * 100);

  useEffect(() => {
    fetchPokemon(pokemonId).then((data) => {
      updatePokemon(data, cardOrder);
      setLocalState(data);
    });
  }, []);
}
