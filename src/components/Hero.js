import './Hero.css';
import { Link } from 'react-router-dom';
import restauranfood from '../images/restauranfood.jpg';

export default function Hero() {
    return (
        <div className='banner'>
            <section>
                <h1 className='banner-title'>Little Lemon</h1>
                <h2 className='banner-subtitle'>Chicago</h2>
                <p className='banner-description'>
                    We are a family owned Mediterranean restaurant, focused
                    on traditional recipes served with a modern twist.
                </p>
                <Link to="/reservations">
                    <button className='reserve-button'>Book Now</button>
                </Link>
            </section>
            <section>
                <img className='restauranfood-img' src={restauranfood} />
            </section>
        </div>
    );
}