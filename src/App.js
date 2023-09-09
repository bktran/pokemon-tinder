import React, { useState, useEffect } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import PokemonIndex from "./pages/PokemonIndex";
import PokemonEdit from "./pages/PokemonEdit";
import PokemonNew from "./pages/PokemonNew";
import PokemonShow from "./pages/PokemonShow";
import NotFound from "./pages/NotFound";
import { Routes, Route, useLocation } from "react-router-dom";
import mockPokemon from "./mockPokemon"

import "./App.css"


const App = () => {
  const [pokemons, setPokemons] = useState(mockPokemon)

  const createPokemon = (pokemon) => {
    console.log("Created pokemon", pokemon)
  }


  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState('');
 
  useEffect(() => {
    if (location.pathname === '/pokemonindex'){
        setBackgroundImage(`url("https://pixahive.com/wp-content/uploads/2021/02/green-grass-effect-background-336011-pixahive.jpg")`);
    }else{
        setBackgroundImage('')
    }
  }, [location.pathname])


  return (
    <div className="app-container" style={{ backgroundImage }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemonindex" element={<PokemonIndex pokemons={pokemons}/>} />
        <Route path="/pokemonedit" element={<PokemonEdit />} />
        <Route path="/pokemonnew" element={<PokemonNew createPokemon={createPokemon}/>} />
        <Route path="/pokemonshow/:id" element={<PokemonShow pokemons={pokemons}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
