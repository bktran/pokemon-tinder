import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "../pages/NotFound"

describe("<NotFound />", () => {
    it("renders error page without crashing", () => {
      render(
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      )
      const greeting = screen.getByText("Sorry Wrong Page!")
      expect(greeting).toBeInTheDocument()
    })
     
  });