function CardInner(props) {
  const pokemon = props.pokemon;

  const { name, abilities, stats, weight, height, id } = pokemon.data;

  return (
    <>
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
    </>
  );
}

export default CardInner;
