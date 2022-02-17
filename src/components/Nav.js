import logo from "../logo.svg";

function Nav() {
  
  return (
    <>
      <nav className="flex justify-center flex-wrap sm:flex-nowrap content-between sm:justify-between items-center px-5 sm:py-0  sm:shadow-sm sm:h-10 bg-transparent sm:bg-gradient-to-r sm:from-white sm:via-transparent sm:to-transparent">
        <div className="font-bold text-2xl rounded-full mr-2 text-sky-900 hover:bg-white px-4 sm:px-0 py-2 sm:py-0 hover:text-red-500 hover:mb-2 sm:hover:mb-0 hover:cursor-pointer flex justify-center items-center">
          <img src={logo} alt="" className="block w-8 mr-1" />{" "}
          <h1>PikaSearch</h1>
        </div>        
      </nav>
    </>
  );
}

export default Nav;
