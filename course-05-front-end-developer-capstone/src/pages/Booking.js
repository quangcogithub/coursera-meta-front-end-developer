import { useState } from "react";

function Booking({fields, dispatch, submit, state}) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState(fields['times'][0]);
    const [guest, setGuest] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(state);
    }

    const handleChange = (field, value) => {
        switch (field) {
            case 'date':
              setDate(value);
              dispatch({date: value});
              break;
            case 'time':
              setTime(value);
              dispatch({time: value});
              break;
            case 'guests':
              setGuest(value);
              dispatch({guests: value});
              break;
            case 'occasion':
              setOccasion(value);
              dispatch({occasion: value});
              break;
            default:
              break;
        }
    }

    return (
        <form style={{display: 'grid', gap: '20px'}} onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="form-label" htmlFor="res-date">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={(e) => handleChange('date', e.target.value)}
                />
                <span className="form-message"></span>
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="res-time">Choose time</label>
                <select
                    id="res-time"
                    value={time}
                    onChange={(e) => handleChange('time', e.target.value)}
                >
                    {
                        fields['times'].map(available => (
                            <option key={available}>{available}</option>
                        ))
                    }
                </select>
                <span className="form-message"></span>
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="guests">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1"
                    max="10"
                    id="guests"
                    value={guest}
                    onChange={(e) => handleChange('guests', e.target.value)}
                />
                <span className="form-message"></span>
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    value={occasion}
                    onChange={(e) => handleChange('occasion', e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <span className="form-message"></span>
            </div>
            <div>
                <input
                    disabled={!date}
                    type="submit"
                    value="Make your reservation"
                />
            </div>
        </form>
    )
}

export default Booking;