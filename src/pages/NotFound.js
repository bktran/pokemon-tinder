import React from 'react'
import './NotFound.css'
import errorPage from '../assets/error.gif'

const NotFound = () => {
  return (
    <div className='error-page'>
      <div className='background'>
        <img className='error-img' src={errorPage} alt="errorPage" />
      </div>
      <div className='error-content'>
      <h2>Sorry Wrong Page!</h2>
      </div>
    </div>
  )
}

export default NotFound