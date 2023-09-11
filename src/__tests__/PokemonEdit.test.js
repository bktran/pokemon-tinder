import { render, screen } from '@testing-library/react';
import PokemonEdit from '../pages/PokemonEdit';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import mockPokemon from "../mockPokemon";

const renderEdit = () => {
    render(
        <MemoryRouter initialEntries={["/pokemonedit/1"]}>
            <Routes>
                <Route path="/pokemonedit/:id" element={<PokemonEdit pokemons={mockPokemon} />} />
            </Routes>
        </MemoryRouter>
    )
}

describe("<PokemonEdit />", () => {
      it("renders the PokemonEdit page for our user", () => {
        renderEdit()
        const element = screen.getByRole('heading', {
            name: /edit pokemon/i
        })
        expect(element).toBeInTheDocument()
        const button = screen.getByRole('button', {
            name: /edit pokemon/i
        })
        expect(button).toBeInTheDocument()
    })

    it("has a form with entries for name, level, specialty, enjoys, strong_against, weak_against and image", () => {
        renderEdit()
        const formName = screen.getByText("Name:")
        expect(formName.getAttribute("for")).toEqual("name")

        const formAge = screen.getByText("Level:")
        expect(formAge.getAttribute("for")).toEqual("level")

        const formEnjoys = screen.getByText("Enjoys:")
        expect(formEnjoys.getAttribute("for")).toEqual("enjoys")

        const formSpecialty = screen.getByText("Specialty:")
        expect(formSpecialty.getAttribute("for")).toEqual("specialty")

        const formStrongAgainst = screen.getByText("Strong Against:")
        expect(formStrongAgainst.getAttribute("for")).toEqual("strong_against")

        const formWeakAgainst = screen.getByText("Weak Against:")
        expect(formWeakAgainst.getAttribute("for")).toEqual("weak_against")

        const formImage = screen.getByText("Image:")
        expect(formImage.getAttribute("for")).toEqual("image")
    })
})


