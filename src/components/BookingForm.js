import React, { useState } from 'react';
import restaurant from '../images/restaurant.jpg';

// const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

const BookingForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    }

    const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const selectedAvailableTime = availableTimes.map((availableTime) => <option>{availableTime}</option>);

    const availableOccasions = ["Birthday", "Anniversary"];
    const selectedAvailableOccasion = availableOccasions.map((availableOccasion) => <option>{availableOccasion}</option>);

    return (
        <div className="booking-form-container">
            <img style={{ width: '100%' }} src={restaurant} alt='restaurant' />
            <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
                <label htmlFor="date">Select date</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => { setDate(e.target.value) }}
                />

                <label htmlFor="time">Select time</label>
                <select id="time" value={time} onChange={(e) => { setTime(e.target.value) }}>
                    {selectedAvailableTime}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guests}
                    onChange={(e) => { setGuests(e.target.value) }}
                />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={(e) => { setOccasion(e.target.value) }}>
                    {selectedAvailableOccasion}
                </select>
                <input type='submit' value='Book now' />
            </form>
        </div>
    );
}


export default BookingForm;