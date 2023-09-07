import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "./NotFound"

describe("<NotFound />", () => {
    it("renders error page without crashing", () => {
      render(
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      )
      const greeting = screen.getByText("Not Found")
      expect(greeting).toBeInTheDocument()
    })
     
  });