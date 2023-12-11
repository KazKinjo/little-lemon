import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import BookingPage from './components/BookingPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reservations' element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;