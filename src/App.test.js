import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe("<App />", () => {
  it("renders landing without crashing", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const greeting = screen.getByText("Welcome to Pokemon Tinder!")
    expect(greeting).toBeInTheDocument()
  })
   
});
