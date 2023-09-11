import React, { useState, useEffect } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink, useLocation } from 'react-router-dom'
import pokeball from '../assets/pokeball.png'
import grass from '../assets/green-grass.jpeg'
import './header.css'

const Header = () => {

  const location = useLocation();
  
  const [marginBottom, setMarginBottom] = useState('');

  // useEffect(() => {
  //   if (location.pathname === '/pokemonindex' || location.pathname === '/' || location.pathname === '/pokemonnew'){
  //       setBackgroundColor('transparent')
  //   }else{
  //       setBackgroundColor('')
  //   }
  // }, [location.pathname])

  useEffect(() => {
    if (location.pathname === '/pokemonindex'){
      setMarginBottom('50px')
    }else{
      setMarginBottom('')
    }
  })

  return (
    <Nav className="nav-container" style={{ marginBottom }}>
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