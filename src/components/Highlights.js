import './Highlights.css';
import greeksalad from '../images/greek salad.jpg';
import bruchetta from '../images/bruchetta.svg';
import lemondessert from '../images/lemon dessert.jpg';

export default function Highlights() {
    return (
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
    );
}