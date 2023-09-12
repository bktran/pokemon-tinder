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
        screen.logTestingPlaygroundURL()
        const pokemonSpecialty = screen.getByText(/my specialty is:/i)
        expect(pokemonSpecialty).toBeInTheDocument()
        const pokemonValue = screen.getByText(/grass/i)
        expect(pokemonValue).toBeInTheDocument()
        const pokemonStrong_Against = screen.getByText(/i am strong against:/i)
        expect(pokemonStrong_Against).toBeInTheDocument()
        // const heading = screen.getByText(/water/i);
        // expect(heading).toBeInTheDocument();
        const pokemonWeak_Against = screen.getByText(/i am weak against:/i)
        expect(pokemonWeak_Against).toBeInTheDocument()
        const pokemonWeak = screen.getByText(/fire/i)
        expect(pokemonWeak).toBeInTheDocument()
        const pokemonEnjoys = screen.getByText(/hobbies:/i)
        expect(pokemonEnjoys).toBeInTheDocument()
        const pokemonHobbies = screen.getByText(/likes to spit watermelon seeds/i)
        expect(pokemonHobbies).toBeInTheDocument()
  })
})