import React from 'react';
import './Home.css';
import homePage from '../assets/home-page.png';
import Footer from '../components/Footer';
import pokeBall from '../assets/pokeball.gif'

const Home = () => {
  return (
    <div className='home-page'>
      <div className='background-img'>
        <img className='home-img' src={homePage} alt="homePage" />
        <img src={pokeBall} className='pokeball-img' alt="pokeball" />
      </div>
      <div className='content'>
        <h2>Welcome to Pokemon Tinder!</h2>
      </div>
      <Footer />
    </div>
  )
}

export default Home