import './Header.css';
import Nav from './Nav';
import Logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <Link to="/"><img src={Logo} height="45" alt="logo" /></Link>
            <Nav />
        </header>
    );
}