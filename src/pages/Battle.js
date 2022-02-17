import { useState } from "react";

import vsImg from "../assets/vs.png";
import Card from "../components/Card";

function Battle() {
  const [pokemonStats, setpokemonStats] = useState({});

  return (
    <>
        <div className="flex md:flex-row flex-col flex-wrap justify-around items-center">
          <Card />
          <img
            src={vsImg}
            alt=""
            className="block h-20 w-20 mr-1 m-10 ml-0 mb-5"
          />{" "}
          <Card />
        </div>
    </>
  );
}

export default Battle;
