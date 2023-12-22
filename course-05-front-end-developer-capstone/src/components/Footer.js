import logo from '../images/Logo_18@4x.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <img src={logo}/>
            </div>
            <div className='footer-text'>
                <div className='footer-nav'>
                    <div className='footer-title'>Navigation</div>
                    <ul>
                        <li className='footer-li'>Home</li>
                        <li className='footer-li'>About</li>
                        <li className='footer-li'>Menu</li>
                        <li className='footer-li'>Reservations</li>
                        <li className='footer-li'>Order Online</li>
                        <li className='footer-li'>Login</li>
                    </ul>
                </div>
                <div className='footer-contact'>
                    <div className='footer-title'>Contact</div>
                    <ul>
                        <li className='footer-li'>Phone</li>
                        <li className='footer-li'>Address</li>
                        <li className='footer-li'>Email</li>
                    </ul>
                </div>
                <div className="footer-socials">
                    <div className='footer-title'>Socials</div>
                    <ul>
                        <li className='footer-li'>Facebook</li>
                        <li className='footer-li'>Youtube</li>
                        <li className='footer-li'>Tiktok</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;