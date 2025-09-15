import './navbar.css'
import navbarImage from './me.png'

function Navbar() {
    return (
        <div class="container">
            <header className="navbar">
            <img src={navbarImage} alt="Company Logo" className="navbarImage" />
            <nav>
                <ul className="navList">
                    <li class="active"></li>
                    <li class="item"><a href="/">Resume</a></li>
                    <li class="item"><a href="/about">Cover Letter</a></li>
                    <li class="item"><a href="/services">Reflections</a></li>
                </ul>
            </nav>
            </header>
        </div>
    );
}
export default Navbar;


