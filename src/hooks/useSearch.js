import { useContext } from "react";
import { PokemonContext } from "../context/pokemon-context";
import { fetchPokemon } from "../services/fetchApi";

export default function useSearch(setLocalState) {
  const { setPokemon } = useContext(PokemonContext);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
        fetchPokemon(event.target.value.toLowerCase())
          .then((data) => {
            setPokemon(data);
            setLocalState(data);
          })
          .catch(() => console.log("No Pokemon Found with this name..."))
          .finally(() => {
            event.target.value = "";
          });
      }
  };

  return {
    handleKeyPress,
  };
}
