import React from 'react';
import { useParams, NavLink } from "react-router-dom";
import { Button } from 'reactstrap';
import './PokemonShow.css';

const PokemonShow = ({ pokemons, deletePokemon }) => {
  const { id } = useParams()
  let selectedPokemon = pokemons.find((pokemon) => pokemon.id === +id)
  return (
    <div className='show-container'>
      <img src={selectedPokemon.image} />
      <h4>My Specialty is: {selectedPokemon.specialty}</h4>
      <h4>I am strong against: {selectedPokemon.strong_against}</h4>
      <h4>I am weak against: {selectedPokemon.weak_against}</h4>
      <h4>Hobbies: {selectedPokemon.enjoys}</h4>
      <NavLink to={`/pokemonedit/${selectedPokemon.id}`} className="nav-link">
        Edit Pokemon
      </NavLink>
      <NavLink to="/pokemonindex">
        <Button onClick={() => 
          deletePokemon(id)}>Delete Pokemon</Button>
      </NavLink>
    </div>
  )
}

export default PokemonShow