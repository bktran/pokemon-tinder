import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"

const PokemonNew = ({ createPokemon }) => {

  const navigate = useNavigate()
  const [newPokemon, setNewPokemon] = useState({
    name: "",
    level: "",
    specialty: "",
    enjoys: "",
    image: "",
    strong_against: "",
    weak_against: ""
  })

  const handleChange = (e) => {
    setNewPokemon({ ...newPokemon, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createPokemon(newPokemon)
    navigate("/pokemonindex")
  }

  return (
    <Form>
      <FormGroup>
        <Label for="name">Name:</Label>
        <Input id="name" type="text" name="name" onChange={handleChange} value={newPokemon.name} />
      </FormGroup>

      <FormGroup>
        <Label for="level">Level:</Label>
        <Input id="level" type="text" name="level" onChange={handleChange} value={newPokemon.level} />
        </FormGroup>

        <FormGroup>
        <Label for="specialty">Specialty:</Label>
        <Input id="specialty" type="text" name="specialty" onChange={handleChange} value={newPokemon.specialty} />
        </FormGroup>

        <FormGroup>
        <Label for="image">Image:</Label>
        <Input id="image" type="url" name="image" onChange={handleChange} value={newPokemon.image} />
        </FormGroup>

        <FormGroup>
        <Label for="enjoys">Enjoys:</Label>
        <Input id="enjoys" type="text" name="enjoys" onChange={handleChange} value={newPokemon.enjoys} />
        </FormGroup>

        <FormGroup>
        <Label for="strong_against">Strong Against:</Label>
        <Input id="strong_against" type="text" name="strong_against" onChange={handleChange} value={newPokemon.strong_against} />
        </FormGroup>

        <FormGroup>
        <Label for="weak_against">Weak Against:</Label>
        <Input id="weak_against" type="text" name="weak_against" onChange={handleChange} value={newPokemon.weak_against} />
      </FormGroup>
      <Button onClick={handleSubmit} name="submit">
        Add to Pokedex
      </Button>
    </Form>
  )
}

export default PokemonNew