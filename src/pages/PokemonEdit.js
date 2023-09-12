import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"
import './PokemonEdit.css'

const PokemonEdit = ({ pokemons, updatePokemon }) => {
  const { id } = useParams()
  let currentPokemon = pokemons?.find((pokemon) => pokemon.id === +id)

  const [editPokemon, setEditPokemon] = useState({
    name: currentPokemon.name,
    level: currentPokemon.level,
    specialty: currentPokemon.specialty,
    enjoys: currentPokemon.enjoys,
    image: currentPokemon.image,
    strong_against: currentPokemon.strong_against,
    weak_against: currentPokemon.weak_against
  })
  const handleChange = (e) => {
    setEditPokemon({ ...editPokemon, [e.target.name]: e.target.value })
  }
  
  const navigate = useNavigate()
  const handleSubmit = () => {
    updatePokemon(editPokemon, currentPokemon.id)
    navigate("/pokemonindex")
  }

  return (
    <Form className='form'>
      <div className='second-container'>
      <div className='heading-container'>
    <div className='heading'>
      <h1>Edit Pokemon</h1>
      </div>
      </div>
      <div className='form-content'>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input id="name" type="text" name="name" onChange={handleChange} value={editPokemon.name} />
      </FormGroup>

      <FormGroup>
        <Label for="level">Level:</Label>
        <Input id="level" type="text" name="level" onChange={handleChange} value={editPokemon.level} />
        </FormGroup>

        <FormGroup>
        <Label for="specialty">Specialty:</Label>
        <Input id="specialty" type="text" name="specialty" onChange={handleChange} value={editPokemon.specialty} />
        </FormGroup>

        <FormGroup>
        <Label for="image">Image:</Label>
        <Input id="image" type="url" name="image" onChange={handleChange} value={editPokemon.image} />
        </FormGroup>

        <FormGroup>
        <Label for="enjoys">Enjoys:</Label>
        <Input id="enjoys" type="text" name="enjoys" onChange={handleChange} value={editPokemon.enjoys} />
        </FormGroup>

        <FormGroup>
        <Label for="strong_against">Strong Against:</Label>
        <Input id="strong_against" type="text" name="strong_against" onChange={handleChange} value={editPokemon.strong_against} />
        </FormGroup>

        <FormGroup>
        <Label for="weak_against">Weak Against:</Label>
        <Input id="weak_against" type="text" name="weak_against" onChange={handleChange} value={editPokemon.weak_against} />
      </FormGroup>
      <div className='button'>
      <Button onClick={handleSubmit} name="submit" className='edit-button'>
        Edit Pokemon
      </Button>
      </div>
      </div>
      </div>
    </Form>
  )
}

export default PokemonEdit