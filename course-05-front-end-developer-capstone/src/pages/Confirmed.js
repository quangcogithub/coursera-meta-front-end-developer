import React from "react";
import confirmed from '../images/confirm.svg';

function Confirmed() {
    return (
        <div className="confirmed">
            <img className="confirmed-icon" src={confirmed}/>
            <h2 className="confirmed-content">Booking has been <span>confirmed</span></h2>
        </div>
    )
}

export default Confirmed;