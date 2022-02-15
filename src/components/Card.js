import { useContext, useEffect } from "react";
import { fetchPokemon } from "../services/fetchApi";
import { PokemonContext } from "../context/pokemon-context";

function Card(props) {
  const { pokemon, setPokemon } = useContext(PokemonContext);
  const pokemonId = props.id || Math.floor(Math.random() * 100);

  useEffect(() => {
    fetchPokemon(pokemonId).then((data) => {
      setPokemon(data);
    });
  }, []);

  if (pokemon.data === undefined) {
    return null;
  }

  const { name, stats, weight } = pokemon.data;

  return (
    <>
      <div className="rounded-md text-center p-4 shadow-sm mt-5 mx-auto max-w-md bg-black/40 backdrop-blur-xl">
        <div className=" text-white/90">
          <div className="">
            <img
              src={pokemon.sprite}
              alt={`Imagen: ${name}`}
              className="rounded-lg h-52 w-52 sm:h-72 sm:w-72 mb-8 mx-auto"
            />
          </div>
          <h1 className="font-semibold text-white bg-pink-500 rounded-full py-1 my-2 w-4/5 mx-auto">
            {" "}
            {name.toUpperCase()}{" "}
          </h1>

          <section className="border border-white/60 p-2">
            <ul className="grid grid-rows-6">
              <h1 className="font-bold bg-black/20 text-center">
                CHARACTERISTICS
              </h1>
              {stats.map((object) => {
                return (
                  <li key={object.stat.name} className="grid grid-cols-2">
                    <span className="font-semibold">
                      {object.stat.name.toUpperCase()}
                    </span>
                    <span className="text-sky-300">{object.base_stat}</span>
                  </li>
                );
              })}
            </ul>
          </section>

          <footer className="flex justify-end">
            <span className="text-gray-200 text-sm">WEIGHT:{weight}</span>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Card;
