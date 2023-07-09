import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero/Hero.css';
import gsap from 'gsap';

function Hero() {

    return (
        <div className='hero'>
        <div className='hero-inner'>
            <div className='left'>
                <div className='line'></div>
                <h1>Spaces <br/>That Inspire</h1>
                <h5>If is there any list of the most important <br/> architecture projects of 2018 will definetely <br/> feature an abundance of superlatives.</h5>
                <Link to='/about' className='cta'>CONTINUE READING</Link>
            </div>
            <div className='right'>
                <div className='up'></div>
                <div className='down'>
                    <div className='leftInner'></div>
                    <div className='rightInner'></div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero
