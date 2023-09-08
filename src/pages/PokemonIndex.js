import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from 'react-router-dom';

const PokemonIndex = ({ pokemons }) => {
  return (
    <>
    {pokemons?.map((pokemon, index) => {
      return (
        <Card
          body
          color="light"
          style={{
            width: '18rem'
          }}
          key={index}
        >
          <img
            alt={`profile of a pokemon name ${pokemon.name}`}
            src={pokemon.image}
          />
          <CardBody>
            <CardTitle tag="h5">
              {pokemon.name}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Level: {pokemon.level}
            </CardSubtitle>
            
            <Button>
              <NavLink to={`/pokemonshow/${pokemon.id}`}>
              See More Details
              </NavLink>
            </Button>
          </CardBody>
        </Card>
       
      )
    })}
    </>
  )

}

export default PokemonIndex