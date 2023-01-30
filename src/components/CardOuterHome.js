import React from "react";
import CardInner from "./CardInner";

function CardOuterHome({ pokemon }) {
  return (
    <>
      <div
        className={
          "rounded-lg text-center p-4 shadow-sm mt-5 w-full max-w-md backdrop-blur-xl bg-blue-800/50"
        }
      >
        <CardInner pokemon={pokemon} />
      </div>
    </>
  );
}

export default CardOuterHome;
