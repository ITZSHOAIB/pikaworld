import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Battle from "./pages/Battle";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <main className="font-oxygen w-screen h-screen bg-gradient-to-b from-pink-500 via-red-500 to-yellow-500 sm:p-0 overflow-auto flex flex-col h-screen justify-between">
      
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/battle" element={<Battle/>} exact />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;
