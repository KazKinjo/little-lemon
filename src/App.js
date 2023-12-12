import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import BookingScreen from './BookingScreen';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reservations' element={<BookingScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}