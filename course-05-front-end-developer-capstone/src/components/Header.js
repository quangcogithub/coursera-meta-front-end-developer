import logo from '../images/Logo_16@4x.png';

function Header() {
    return (
        <header className="header">
            <img className="header-logo" src={logo}/>
        </header>
    )
}

export default Header;