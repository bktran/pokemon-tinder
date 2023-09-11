import React from 'react';
import './Home.css';
import homePage from '../assets/home-page.png';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='home-page'>
      <div className='background-img'>
        <img className='home-img' src={homePage} alt="homePage" />
      </div>
      <div className='content'>
      <h2>Welcome to Pokemon Tinder!</h2>
      </div>
      <Footer />
    </div>
  )
}

export default Home