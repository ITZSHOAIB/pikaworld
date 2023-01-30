import { useEffect, useState } from "react";

import { fetchAllPokemons } from "../services/fetchApi";
import CardOuterHome from "./CardOuterHome";

function CardList() {
  const [pokeList, setpokeList] = useState([]);

  useEffect(() => {
    fetchAllPokemons().then((data) => {
      setpokeList(data.pokemonsList);
    });
  }, []);

  if (pokeList.length === 0) {
    return null;
  }

  return (
    <>
      <div className="flex flex-wrap justify-around h-full overflow-auto">
        {pokeList.map((pokemon, index) => {
          return <CardOuterHome key={index} pokemon={pokemon} />;
        })}
      </div>
    </>
  );
}

export default CardList;
