import React from 'react';
import { useParams } from "react-router-dom";

const PokemonShow = ({ pokemons }) => {
  const { id } = useParams()
  let selectedPokemon = pokemons.find((pokemon) => pokemon.id === +id)
  return (
    <div>
      <img src={selectedPokemon.image} />
      <h4>My Specialty is: {selectedPokemon.specialty}</h4>
      <h4>I am strong against: {selectedPokemon.strong_against}</h4>
      <h4>I am weak against: {selectedPokemon.weak_against}</h4>
      <h4>Hobbies: {selectedPokemon.enjoys}</h4>
    </div>
  )
}

export default PokemonShow