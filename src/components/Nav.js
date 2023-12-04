import React, { useState } from 'react';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav>
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#menu">Menu</a>
                </li>
                <li>
                    <a href="#reservations">Reservations</a>
                </li>
                <li>
                    <a href="#orderonline">Order Online</a>
                </li>
                <li>
                    <a href="#login">Login</a>
                </li>
            </ul>

            <div className='menu_icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

        </nav>
    );
};

export default Nav;