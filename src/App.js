import React, { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import PokemonIndex from "./pages/PokemonIndex";
import PokemonEdit from "./pages/PokemonEdit";
import PokemonNew from "./pages/PokemonNew";
import PokemonShow from "./pages/PokemonShow";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import mockPokemon from "./mockPokemon"
import "./App.css"


const App = () => {
  const [pokemons, setPokemons] = useState(mockPokemon)
  console.log(pokemons)

  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemonindex" element={<PokemonIndex />} />
        <Route path="/pokemonedit" element={<PokemonEdit />} />
        <Route path="/pokemonnew" element={<PokemonNew />} />
        <Route path="/pokemonshow" element={<PokemonShow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
