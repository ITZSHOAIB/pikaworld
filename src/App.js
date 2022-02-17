import Nav from "./components/Nav";
import Card from "./components/Card";
import Footer from "./components/Footer";
import PokemonContextProvider from "./context/pokemon-context";

function App() {
  return (
    <main className="font-mono w-screen h-screen bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500 sm:p-0 overflow-auto flex flex-col h-screen justify-between">
      <PokemonContextProvider>
        <Nav />
        <Card />
        <Footer />
      </PokemonContextProvider>
    </main>
  );
}

export default App;
