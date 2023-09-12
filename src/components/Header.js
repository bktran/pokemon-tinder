import React, { useState, useEffect } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink, useLocation } from 'react-router-dom'
import pokeball from '../assets/pokeball.png'
import grass from '../assets/green-grass.jpeg'
import './header.css'
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {

  const location = useLocation();
  
  const [marginBottom, setMarginBottom] = useState('');

  const [click, setClick] = useState(false);
  const handleClick = () => {
      setClick(!click);
  }

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

      <div className={click ? "nav-menu active" : 
        "nav-menu"}>
      <NavItem>
        <NavLink to="/pokemonindex" className='nav-link' id="first">
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
      </div>
      <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}}/>
            ) : (<FaBars size={20} style={{color: "#fff"}}/>) }
        </div>
    </Nav>
  )
}

export default Header