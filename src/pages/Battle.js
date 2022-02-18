import vsImg from "../assets/vs.png";
import Card from "../components/Card";

function Battle() {
  return (
    <>
      <div className="flex md:flex-row flex-col flex-wrap justify-around items-center">
        <Card cardOrder={1} />
        <div className="mr-1 m-10 ml-0 mb-5 ">
          <img
            src={vsImg}
            alt="Let's Battle"
            title="Let's Battle"
            className="h-20 w-20p-2 my-2 rounded-lg animate-pulse"
          />
        </div>

        <Card cardOrder={2} />
      </div>
    </>
  );
}

export default Battle;
