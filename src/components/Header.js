import Nav from './Nav';
import Logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/"><img src={Logo} alt="logo" /></Link>
            <Nav />
        </header>
    );
}

export default Header;