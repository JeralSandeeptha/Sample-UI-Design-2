import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import gsap from 'gsap';
import logo from '../images/default-logo.png';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar/Navbar.css';

function Navbar() {

    const navClose = () => {
        let tl = gsap.timeline();
        tl.to('.nav-links', {duration: 1, x: '-100%'});
        tl.play(0, true);
    }

    const navOpen = () => {
        let tl = gsap.timeline();
        tl.to('.nav-links', {duration: 1, x: 0});
        tl.play(0, true);
    }

    return (
        <div className='navbar'>
        <div className='navbar-inner'>
            <img src={logo} alt="logo" className='logo'/>
            <div className='nav-links'>
                <CloseIcon onClick={navClose} color='action' className='close' fontSize="large"/>
                <NavLink className='link' to='/'><h5>HOME</h5></NavLink>
                <NavLink className='link' to='/about'><h5>ABOUT</h5></NavLink>
                <NavLink className='link' to='/contact'><h5>CONTACT</h5></NavLink>
            </div>
            <MenuIcon fontSize="large" onClick={navOpen} className='menu'/>
        </div>
        </div>
    )
}

export default Navbar
