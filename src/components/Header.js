import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import pokeball from '../assets/pokeball.png'
import './header.css'

const Header = () => {
  return (
    <Nav className="nav-container">
      <NavItem>
        <NavLink to="/" className='nav-link'>
          <img src={pokeball} alt='pokeball home image' width="50px"/>
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to="/pokemonindex" className='nav-link'>
          See All Pokemon
        </NavLink>
      </NavItem>

      <NavItem>
        <NavLink to="/pokemonnew" className='nav-link'>
          Add a new pokemon
        </NavLink>
      </NavItem>

      <NavItem>
        <a href="https://www.serebii.net/pokemon/gen1pokemon.shtml" target="_blank" className='nav-link'>
          See Pokedex
        </a>
      </NavItem>

    </Nav>
  )
}

export default Header