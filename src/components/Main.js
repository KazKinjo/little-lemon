import restauranfood from '../images/restauranfood.jpg';
import greeksalad from '../images/greek salad.jpg';
import bruchetta from '../images/bruchetta.svg';
import lemondessert from '../images/lemon dessert.jpg';

import { useNavigate } from 'react-router-dom';

export default function Header() {
    const handleClick = () => {
        console.log('Hello')
    }

    return (
        <main className='main'>
            <article className='banner'>
                <section>
                    <h1 className='banner-title'>Little Lemon</h1>
                    <h2 className='banner-subtitle'>Chicago</h2>
                    <p className='banner-description'>
                        We are a family owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>
                    <button
                        className='reserve-button'
                        onClick={handleClick}
                    >
                        Book Now
                    </button>
                </section>
                <section>
                    <img className='restauranfood-img' src={restauranfood} />
                </section>
            </article>

            <article className='special-menu'>
                <h3 className='special-menu-title'>
                    This Week Specials!
                </h3>
                <section className='dish-lists'>
                    <section className='dish-card'>
                        <img className='dish-image'
                            src={greeksalad}
                            alt='greek salad'
                        />
                        <div className='info'>
                            <h3 className='dish-title'>
                                Greek Salad
                            </h3>
                            <span className='dish-pricing'>
                                $12.99
                            </span>
                        </div>
                        <p className='dish-description'>
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago...
                        </p>
                    </section>
                    <section className='dish-card'>
                        <img className='dish-image'
                            src={bruchetta}
                            alt='bruchetta'
                        />
                        <div className='info'>
                            <h3 className='dish-title'>
                                Bruchetta
                            </h3>
                            <span className='dish-pricing'>
                                $12.99
                            </span>
                        </div>
                        <p className='dish-description'>
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago...
                        </p>
                    </section>
                    <section className='dish-card'>
                        <img className='dish-image'
                            src={lemondessert}
                            alt='lemon dessert'
                        />
                        <div className='info'>
                            <h3 className='dish-title'>
                                Lemon Dessert
                            </h3>
                            <span className='dish-pricing'>
                                $12.99
                            </span>
                        </div>
                        <p className='dish-description'>
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago...
                        </p>
                    </section>
                </section>
            </article>

        </main>
    );
}