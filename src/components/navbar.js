import './navbar.css'
import navbarImage from './me.png'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="container">
            <header className="navbar">
                <Link to="/" className="brand">
                    <img src={navbarImage} className="navbarImage" />
                    <span className="name">Michelle Chen</span>
                </Link>
            <nav>
                <ul className="navList">
                    <li className="active"></li>
                    <li className="item"><Link to="/resume">Resume</Link></li>
                    <li className="item"><Link to="/coverletter">Cover Letter</Link></li>
                    <li className="item"><Link to="/reflections">Reflections</Link></li>
                </ul>
            </nav>
            </header>
        </div>
    );
}
export default Navbar;


