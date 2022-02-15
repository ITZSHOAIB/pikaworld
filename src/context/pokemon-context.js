import { createContext, useState } from "react";

export const PokemonContext = createContext();

function PokemonContextProvider(props) {
  const [pokemon, setPokemon] = useState({
    pokemon: {},
    setPokemon: () => {}
  });

  const context = {
    pokemon: pokemon,
    setPokemon: setPokemon,
  };
  return (
    <PokemonContext.Provider value={context}>
      {props.children}
    </PokemonContext.Provider>
  );
}

export default PokemonContextProvider;
