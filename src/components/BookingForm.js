import { useState } from 'react';
import restaurant from '../images/restaurant.jpg';

// const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

const BookingForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [number, setNumber] = useState("");
    const [occasion, setOccation] = useState("");

    return (
        <div className="booking-form-container">
            <div className='booking-form'>
                <img style={{ width: '100%' }} src={restaurant} alt='restaurant' />
                <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>

                    <label htmlFor="date">Choose date</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => { setDate(e.target.value) }}
                    />

                    <label htmlFor="time">Choose time</label>
                    <select
                        id="time"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    >
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>

                    <label htmlFor="guests">Number of guests</label>
                    <input
                        type="number"
                        placeholder="1"
                        min="1"
                        max="10"
                        id="guests"
                        value={number}
                        onChange={(e) => { setNumber(e.target.value) }}
                    />

                    <label htmlFor="occasion">Occasion</label>
                    <select
                        id="occasion"
                        value={occasion}
                        onChange={(e) => { setOccation(e.target.value) }}
                    >
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <input type='submit' value='Book now'></input>
                </form>
            </div>
        </div>
    );
}


export default BookingForm;