import logo from '../images/Logo_18@4x.png';

function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-items">
                <li>
                    <img className="footer-logo" src={logo}/>
                </li>
                <li>
                    <div>Navigation</div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservations</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </li>
                <li>
                    <div>Contact</div>
                    <ul>
                        <li>Phone</li>
                        <li>Address</li>
                        <li>Email</li>
                    </ul>
                </li>
                <li>
                    <div>Socials</div>
                    <ul>
                        <li>Facebook</li>
                        <li>Youtube</li>
                        <li>Tiktok</li>
                    </ul>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;