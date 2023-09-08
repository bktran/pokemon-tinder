import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import PokemonShow from "../pages/PokemonShow"
import mockPokemon from "../mockPokemon"

const renderShow = () => {
    render(
      <MemoryRouter initialEntries={["/pokemonshow/1"]}>
        <Routes>
        <Route path="/pokemonshow/:id" element={<PokemonShow pokemons={mockPokemon} />} />
        </Routes>
      </MemoryRouter>
    )
  }

describe("<PokemonShow />", () => {
    it("renders details of the pokemons", () => {
        renderShow()
        const pokemonSpecialty = screen.getByText(`My Specialty is: ${mockPokemon[0].specialty}`)
        expect(pokemonSpecialty).toBeInTheDocument()
        const pokemonStrong_Against = screen.getByText(`I am strong against: ${mockPokemon[0].strong_against}`)
        expect(pokemonStrong_Against).toBeInTheDocument()
        const pokemonWeak_Against = screen.getByText(`I am weak against: ${mockPokemon[0].weak_against}`)
        expect(pokemonWeak_Against).toBeInTheDocument()
        const pokemonEnjoys = screen.getByText(`Hobbies: ${mockPokemon[0].enjoys}`)
        expect(pokemonEnjoys).toBeInTheDocument()
  })
})