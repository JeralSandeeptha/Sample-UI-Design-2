import React from 'react'
import '../styles/Seven/Seven.css';
import logo from '../images/logo.png';

function Seven() {
  return (
    <div className='seven'>
      <div className='seven-inner'>
        <div className='left'></div>
        <div className='right'>
          <div className='box'>
            <img src={logo} alt="logo" />
            <h5>Projects</h5>
          </div>
          <div className='box'>
            <img src={logo} alt="logo" />
            <h5>Projects</h5>
          </div>
          <div className='box'>
            <img src={logo} alt="logo" />
            <h5>Projects</h5>
          </div>
          <div className='box'>
            <img src={logo} alt="logo" />
            <h5>Projects</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seven
