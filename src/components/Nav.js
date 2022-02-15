import { useContext } from "react";
import logo from "../logo.svg";

import { fetchPokemon } from "../services/fetchApi";
import { PokemonContext } from "../context/pokemon-context";

function Nav() {
  const { setPokemon } = useContext(PokemonContext);

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
      <nav className="flex justify-center flex-wrap sm:flex-nowrap content-between sm:justify-between items-center px-5 sm:py-0  sm:shadow-sm sm:h-10 bg-transparent sm:bg-gradient-to-r sm:from-white sm:via-transparent sm:to-transparent">
        <div className="font-bold text-2xl rounded-full mr-2 text-sky-900 hover:bg-white px-4 sm:px-0 py-2 sm:py-0 hover:text-red-500 hover:mb-2 sm:hover:mb-0 hover:cursor-pointer flex justify-center items-center">
          <img src={logo} alt="" className="block w-8 mr-1" />{" "}
          <h1>PikaSearch</h1>
        </div>
        <input
          type="text"
          className="rounded-full placeholder:text-center placeholder:italic  focus:outline-none px-4 py-2 focus:ring-red-500 focus:ring-1 focus:placeholder:text-sky-900 w-full max-w-md h-8 text-sky-900 border sm:border-0 bg-white opacity-50"
          placeholder="Enter your Pokemon name"
          onKeyPress={handleKeyPress}
        />
      </nav>
    </>
  );
}

export default Nav;
