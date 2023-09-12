import React from 'react';
import { useParams, NavLink } from "react-router-dom";
import { Button } from 'reactstrap';
import './PokemonShow.css';

const PokemonShow = ({ pokemons, deletePokemon }) => {
  const { id } = useParams()
  let selectedPokemon = pokemons.find((pokemon) => pokemon.id === +id)
  return (
    <div className='show-container'>
      <img src={selectedPokemon.image} style={{width: "400px"}}/>
      <h4><span className='attributes'>My Specialty is:</span><span className='values'>{selectedPokemon.specialty}</span></h4>
      <h4><span className='attributes'>I am strong against:</span><span className='values'>{selectedPokemon.strong_against}</span></h4>
      <h4><span className='attributes'>I am weak against:</span><span className='values'>{selectedPokemon.weak_against}</span></h4>
      <h4><span className='attributes'>Hobbies:</span><span className='values'>{selectedPokemon.enjoys}</span></h4>
      <div className='buttons'>
      <NavLink to={`/pokemonedit/${selectedPokemon.id}`}>
        <Button className='btn1'>Edit Pokemon</Button>
      </NavLink>
      <NavLink to="/pokemonindex">
        <Button className='btn2' onClick={() => 
          deletePokemon(id)}>Delete Pokemon</Button>
      </NavLink>
      </div>
    </div>
  )
}

export default PokemonShow