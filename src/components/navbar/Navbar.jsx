// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
import fire from '../../assets/fire.png'
import star from '../../assets/star.png'
import party from '../../assets/partying-face.png'
import DarkMode from '../DarkMode/DarkMode'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>MovieHub</h1>
            <div className="navbar_links">
                <DarkMode/>
                <a href="">Popular <img src={fire} alt="fire" className='navbar_emoji' /></a>
                <a href="">Top Rated <img src={star} alt="star" className='navbar_emoji' /></a>
                <a href="">Upcoming <img src={party} alt="party" className='navbar_emoji' /></a>
            </div>
        </nav>
    )
}

export default Navbar
