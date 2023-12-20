import logo from '../images/Logo_16@4x.png';

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <img src={logo}/>
                </li>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Oder Online</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Nav;