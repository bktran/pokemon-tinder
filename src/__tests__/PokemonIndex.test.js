import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import PokemonIndex from "../pages/PokemonIndex"
import mockPokemon from "../mockPokemon"

describe("<PokemonIndex />", () => {
    it("renders without crashing", () => {
        
        render(
            <BrowserRouter>
                <PokemonIndex pokemons={mockPokemon}/>
            </BrowserRouter>
        )
        const images = screen.getAllByRole("img")
        expect(images).toHaveLength(mockPokemon.length)
   
    })
    it("renders pokemon cards", () => {
        render(
            <BrowserRouter>
                <PokemonIndex pokemons={mockPokemon} />
            </BrowserRouter>
        )
        mockPokemon.forEach((pokemon) => {
            const pokemonName = screen.getByText(pokemon.name)
            expect(pokemonName).toBeInTheDocument()
        })
    })
})
