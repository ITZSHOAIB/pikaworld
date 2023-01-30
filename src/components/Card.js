import { useContext, useState } from "react";
import usePokemon from "../hooks/usePokemon";
import useSearch from "../hooks/useSearch";
import SearchInput from "./SearchInput";
import { PokemonContext } from "../context/pokemon-context";
import CardInner from "./CardInner";

function Card(props) {
  const { winner } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState({});
  const { handleKeyPress } = useSearch(setPokemon, props.cardOrder);
  usePokemon(setPokemon, props.cardOrder);

  if (pokemon.data === undefined) {
    return null;
  }

  return (
    <>
      <div
        className={
          "rounded-lg text-center p-4 shadow-sm mt-5 mx-auto w-full max-w-md backdrop-blur-xl " +
          (window.location.pathname === "/battle" && winner !== 0
            ? winner === props.cardOrder
              ? "bg-green-800/50"
              : "bg-red-800/50"
            : "bg-blue-800/50")
        }
      >
        <SearchInput handleKeyPress={handleKeyPress} />
        {window.location.pathname === "/battle" ? (
          <h2
            className={
              " backdrop-blur-xl text-white text-lg font-semibold absolute rotate-[-45deg] px-2 py-1 rounded-lg left-0 top-20" +
              (winner !== 0
                ? winner === props.cardOrder
                  ? "bg-green-700"
                  : "bg-red-700"
                : "")
            }
          >
            {winner !== 0
              ? winner === props.cardOrder
                ? "~ Winner ~"
                : "~ Looser ~"
              : null}
          </h2>
        ) : null}

        <CardInner pokemon={pokemon} />
      </div>
    </>
  );
}

export default Card;
