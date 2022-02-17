import { useState, useEffect } from "react";
import { fetchPokemon } from "../services/fetchApi";
import SearchInput from "./SearchInput";

function Card(props) {
  const [pokemon, setPokemon] = useState({});
  const pokemonId = props.id || Math.floor(Math.random() * 100);

  useEffect(() => {
    fetchPokemon(pokemonId).then((data) => {
      setPokemon(data);
    });
  }, []);

  if (pokemon.data === undefined) {
    return null;
  }

  const { name, abilities, stats, weight, height, id } = pokemon.data;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchPokemon(event.target.value.toLowerCase())
        .then((data) => {
          setPokemon(data);
        })
        .catch(() => console.log("No Pokemon Found with this name..."))
        .finally(() => {
          event.target.value = "";
        });
    }
  };

  return (
    <>
      <div className="rounded-mg text-center p-4 shadow-sm mt-5 mx-auto w-full max-w-md bg-black/20 backdrop-blur-xl">
        <SearchInput handleKeyPress={handleKeyPress} />
        <div className=" text-white/90">
          <div className="">
            <img
              src={pokemon.sprite}
              alt={`Imagen: ${name}`}
              className="rounded-lg w-full bg-black/30 h-52 w-full sm:h-72 mb-4 mx-auto p-4"
            />
          </div>
          <h1 className="font-semibold text-white bg-pink-500 py-1 my-2 w-full mx-auto">
            {" "}
            {name.toUpperCase()}{" "}
          </h1>
          <section className="flex justify-between border-b-2 pb-2 flex-wrap">
            <h3 className="ml-2">Abilities: </h3>
            <div>
              {abilities.map((object) => {
                return (
                  <span
                    key={id + object.ability.name}
                    className="bg-blue-900 px-3 py-1 text-white/80 rounded-md ml-2 text-xs w-mx"
                  >
                    {object.ability.name.toUpperCase()}
                  </span>
                );
              })}
            </div>
          </section>
          <section className="border-b-2 mb-3 p-2">
            <ul className="grid grid-rows-6">
              {stats.map((object) => {
                return (
                  <li key={object.stat.name} className="grid grid-cols-2">
                    <span className="text-left">
                      {object.stat.name.toUpperCase()}
                    </span>
                    <span className="text-sky-300 font-semibold text-right">
                      {object.base_stat}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>

          <div className="flex justify-center">
            <span className="text-gray-200 text-sm">
              WEIGHT: {weight} - HEIGHT: {height}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
