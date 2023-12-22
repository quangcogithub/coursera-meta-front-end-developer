import { useEffect, useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import Booking from '../pages/Booking';
import Oder from '../pages/Oder';
import Login from '../pages/Login';
import Confirmed from '../pages/Confirmed';

function Main() {
    var bookingFields = {
        times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
        occasion: ['Birthday', 'Anniversary']
    }
    const [bookingState, dispatch] = useReducer(
        updateBooking,
        {date: '', time: '17:00', guests: 1, occasion: 'Birthday'}
    );

    function updateBooking(state, action)
    {
        return {...state, ...action};
    }

    const navigate = useNavigate();
    function submitBooking(dataSubmitted) {
        if (dataSubmitted) {
            navigate("/confirmed");
        }
    }

    useEffect(
        () => {
            console.log('Booking data: ', bookingState);
        },
        []
    )

    return (
        <main className="main">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route
                    path='/booking'
                    element={
                        <Booking
                            fields={bookingFields}
                            dispatch={dispatch}
                            submit={submitBooking}
                            state={bookingState}
                        />
                    }
                />
                <Route path='/oder' element={<Oder/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/confirmed' element={<Confirmed/>}/>
            </Routes>
        </main>
    )
}

export default Main;