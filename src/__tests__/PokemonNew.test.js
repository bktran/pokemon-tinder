import { render, screen } from '@testing-library/react';
import PokemonNew from '../pages/PokemonNew'
import { BrowserRouter } from 'react-router-dom';

describe("<PokemonNew />", () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <PokemonNew />
        </BrowserRouter>
      )
    })
  
    it("renders the PokemonNew page for our user", () => {
      const element = screen.getByText("Add to Pokedex")
      expect(element).toBeInTheDocument()
    })
  
    it("has a form with entries for name, level, specialty, enjoys, strong_against, weak_against and image", () => {
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