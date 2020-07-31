import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import'./styles.css'
import { Link } from 'react-router-dom'

export const Navbar = ({lightNav, us, home, collection, contact}) => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div id='navbar' className='nav-container'>
            <div className={lightNav ? 'logo' : 'logo-white'}>
                <Link to='/'><img src={lightNav ? "/img/logo-black.png" : '/img/logo-black.png'} alt="logo"/></Link>
            </div>
            <div className='links'>
                <ul className={lightNav ? 'nav-list-black' : 'nav-list-black'}>
                    <li><Link style={home ? {fontWeight:'bold'} : null} to="/">HOME</Link></li>
                    <li><Link style={collection ? {fontWeight:'bold'} : null} to="/collection">COLLECTION</Link></li>
                    <li><Link style={us ? {fontWeight:'bold'} : null} to="/us">THE BRAND</Link></li>
                    <li><Link style={contact ? {fontWeight:'bold'} : null} to="/contact">CONTACT</Link></li>
                </ul>
            </div>
            <div className='links-mobile'>
                <div className='hamburger'>
                    <FontAwesomeIcon id='hamburger-id' icon={faBars} onClick={() => setShowMenu(!showMenu)}/>
                    <div id='mobile-menu' style={showMenu ? {opacity: 1, display: 'block'} : {opacity: 0, display: 'none'}} className='menu-mobile'>
                        <ul>
                            <li><Link style={home ? {fontWeight:'bold'} : null} to="/">HOME</Link></li>
                            <li><Link style={collection ? {fontWeight:'bold'} : null} to="/collection">COLLECTION</Link></li>
                            <li><Link style={us ? {fontWeight:'bold'} : null} to="/us">THE BRAND</Link></li>
                            <li><Link style={contact ? {fontWeight:'bold'} : null} to="/contact">CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
