import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "./Home"

describe("<Home />", () => {
    it("renders landing without crashing", () => {
      render(
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      )
      const greeting = screen.getByText("Welcome to Pokemon Tinder!")
      expect(greeting).toBeInTheDocument()
    })
     
  });