import { createContext, useState } from "react";

const pokemons = {
  cardOrder1: {},
  cardOrder2: {},
};

export const PokemonContext = createContext({
  winner: "",
  updatePokemon: () => {},
});

function PokemonContextProvider(props) {
  const [winner, setwinner] = useState(0);
  

  function updatePokemon(data, cardOrder) {
    pokemons[`cardOrder${cardOrder}`] = data;
    letsBattle();
  }

  function letsBattle() {
    if (
      Object.keys(pokemons["cardOrder1"]).length !== 0 &&
      Object.keys(pokemons["cardOrder2"]).length !== 0
    ) {
      let firstPokemonStatsTotal = 0;
      let secondPokemonStatsTotal = 0;

      const firstPokemonStats = pokemons["cardOrder1"].data.stats;
      const secondPokemonStats = pokemons["cardOrder2"].data.stats;

      firstPokemonStats.forEach((stats) => {
        firstPokemonStatsTotal += stats.base_stat;
      });

      secondPokemonStats.forEach((stats) => {
        secondPokemonStatsTotal += stats.base_stat;
      });

      if (firstPokemonStatsTotal >= secondPokemonStatsTotal) setwinner(1);
      else setwinner(2);
    } else setwinner(0);
  }
  const context = {
    winner: winner,
    updatePokemon: updatePokemon,
  };
  return (
    <PokemonContext.Provider value={context}>
      {props.children}
    </PokemonContext.Provider>
  );
}

export default PokemonContextProvider;
