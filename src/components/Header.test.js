import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import pokeball from '../assets/pokeball.png'
import Header from "./Header"

describe("<Header />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        let nav = screen.getByRole('img', {
            name: /pokeball home image/i
        })
        expect(nav).toHaveAttribute("src", "pokeball.png")
        expect(nav).toHaveAttribute("alt", "pokeball home image")
    })
    it("has clickable links", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
        userEvent.click(screen.getByText("See All Pokemon"))
        expect(screen.getByText("See All Pokemon")).toBeInTheDocument()
        userEvent.click(screen.getByText("Add a new pokemon"))
        expect(screen.getByText("Add a new pokemon")).toBeInTheDocument()
        userEvent.click(screen.getByText("See Pokedex"))
        expect(screen.getByText("See Pokedex")).toBeInTheDocument()
    })

})