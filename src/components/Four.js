import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Four/Four.css';

function Four() {
  return (
    <div className='four'>
      <div className='four-inner'>
        <div className='up'></div>
        <div className='down'>
            <h2>One Of The Most Beautiful Buildings In The World</h2>
            <h5>Comprising a series of overlapping fluid surfaces, the building was designed by Zaha Hadid Architects as the main venue for exhibitions, concerts and other cultural activities in Azerbaijan's capital city.</h5>
            <Link to='/about' className='link'>CONTINUE READING</Link>
        </div>
      </div>
    </div>
  )
}

export default Four
