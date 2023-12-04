import Nav from './Nav';
import Logo from '../images/Logo.svg';

const Header = () => {
    return (
        <header>
            <a href="#home"><img src={Logo} alt="logo" /></a>
            <Nav />
        </header>
    );
}

export default Header;