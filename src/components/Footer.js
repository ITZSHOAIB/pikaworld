import profilePic from "../assets/profile-pic.png";

function Footer() {
  return (
    <>
      <footer className="px-4 py-4 bg-slate-900 text-white/80 mt-10">
        <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
            <div className="flex items-center justify-center flex-shrink-0 w-18 h-18 rounded-full">
              <img src={profilePic} alt="" className="block w-12 mr-1" />{" "}
            </div>
            <h3 className="flex flex-wrap font-semibold items-center">
              Developed by Sk Sohab
            </h3>
          </div>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-4">
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/iitzshoaib/"
                className="flex items-center rounded-lg bg-white/20 px-3 py-1"
              >
                <svg
                  className="w-4 h-4 text-white fill-current mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://pokeapi.co/"
                className="flex items-center rounded-lg bg-white/20 px-3 py-1"
              >
                PokeApi
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
