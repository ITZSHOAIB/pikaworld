import { NavLink } from "react-router-dom";

import logo from "../assets/logo.svg";

function Nav() {
  return (
    <>
      <nav className="flex justify-center flex-wrap sm:flex-nowrap content-between sm:justify-between items-center px-5 sm:py-0  sm:shadow-sm sm:h-20 bg-transparent sm:bg-gradient-to-r sm:from-white sm:via-transparent sm:to-transparent">
        <div className="font-bold text-2xl rounded-full mr-2 text-sky-900 px-4 sm:px-0 py-2 sm:py-0 hover:text-sky-800 hover:cursor-pointer flex justify-center items-center">
          <img src={logo} alt="" className="block w-8 mr-1 animate-bounce" />{" "}
          <h1>Pikaworld</h1>
        </div>
        <ul className="text-white flex justify-around w-52 ">
          <li>
            <NavLink to="/" className={navData => navData.isActive ? 'border-b-2' : 'hover:border-b-2'}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/battle" className={navData => navData.isActive ? 'border-b-2' : 'hover:border-b-2'}>Battle</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
