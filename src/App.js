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
  
 
  // useEffect(() => {
  //   if (location.pathname === '/pokemonindex'){
  //       setBackgroundImage(`url("https://pixahive.com/wp-content/uploads/2021/02/green-grass-effect-background-336011-pixahive.jpg")`);
  //   }else if (location.pathname === '/'){
  //       setBackgroundImage(`url(https://i.redd.it/c5jb4d6mn0ky.png)`)
  //   }else if (location.pathname === '/pokemonnew'){
  //       setBackgroundImage(`url(https://i.pinimg.com/originals/2b/3b/04/2b3b04771ccca26c3dd96d781b0117ca.jpg)`)
  //   }else{
  //       setBackgroundImage('')
  //   }
  // }, [location.pathname])

  const updatePokemon = (pokemon, id) => {
    console.log("pokemon:", pokemon)
    console.log("id:", id)
  }

  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemonindex" element={<PokemonIndex pokemons={pokemons}/>} />
        <Route path="/pokemonedit/:id" element={<PokemonEdit pokemons={pokemons} updatePokemon={updatePokemon}/>} />
        <Route path="/pokemonnew" element={<PokemonNew createPokemon={createPokemon}/>} />
        <Route path="/pokemonshow/:id" element={<PokemonShow pokemons={pokemons}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
