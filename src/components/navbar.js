import './navbar.css'
import navbarImage from './me.png'

function Navbar() {
    return (
        <div class="container">
            <header className="navbar">
                <a href="/" className="brand">
                    <img src={navbarImage} className="navbarImage" />
                    <span className="name">Michelle Chen</span>
                </a>
            <nav>
                <ul className="navList">
                    <li class="active"></li>
                    <li class="item"><a href="portfolio-uni/resume">Resume</a></li>
                    <li class="item"><a href="portfolio-uni/coverletter">Cover Letter</a></li>
                    <li class="item"><a href="portfolio-uni/reflections">Reflections</a></li>
                </ul>
            </nav>
            </header>
        </div>
    );
}
export default Navbar;


