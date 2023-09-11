import React, { useState, useEffect } from "react";
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
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    readPokemon()
   
  }, [])

  const readPokemon = () => {
    fetch("http://localhost:3000/pokemons")
      .then((response) => response.json())
      .then((payload) => {
        setPokemons(payload)
      })
      .catch((error) => console.log(error))
  }

  const createPokemon = (pokemon) => {
    fetch("http://localhost:3000/pokemons", {
      // converts the object to a string that can be passed in the request
      body: JSON.stringify(pokemon),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
      .then((response) => response.json())
      .then(() => readPokemon())
      .catch((errors) => console.log("Pokemon create errors:", errors))
  }

  const updatePokemon = (pokemon, id) => {
    fetch(`http://localhost:3000/pokemons/${id}`, {
      // converting an object to a string
      body: JSON.stringify(pokemon),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH"
    })
      .then((response) => response.json())
      .then(() => readPokemon())
      .catch((errors) => console.log("Pokemon update errors:", errors))
  }

  const deletePokemon = (id) => {
    fetch(`http://localhost:3000/pokemons/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then(() => readPokemon())
      .catch((errors) => console.log("delete errors:", errors))
  }

  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemonindex" element={<PokemonIndex pokemons={pokemons}/>} />
        <Route path="/pokemonedit/:id" element={<PokemonEdit pokemons={pokemons} updatePokemon={updatePokemon}/>} />
        <Route path="/pokemonnew" element={<PokemonNew createPokemon={createPokemon}/>} />
        <Route path="/pokemonshow/:id" element={<PokemonShow pokemons={pokemons} deletePokemon={deletePokemon}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
