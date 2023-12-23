import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav-items">
                <li><Link className='nav-item' to="/">Home</Link></li>
                <li><Link className='nav-item' to="/about">About</Link></li>
                <li><Link className='nav-item' to="/menu">Menu</Link></li>
                <li><Link className='nav-item' to="/booking">Booking</Link></li>
                {/* <li><Link className='nav-item' to="/oder">Oder Online</Link></li> */}
                <li><Link className='nav-item' to="/login">Login</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;