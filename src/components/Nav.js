import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav>
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/orderonline">Order Online</Link></li>
                <li><Link to="login">Login</Link></li>
            </ul>

            <div className='menu_icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

        </nav>
    );
};