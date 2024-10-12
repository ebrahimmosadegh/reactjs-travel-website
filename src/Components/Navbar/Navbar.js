import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
function Navbar(){
    const[menuState,setMenuState] = useState(false);
    const menuHandler = ()=>setMenuState(!menuState);
    const closeMobileMenu = ()=>setMenuState(false);
    return(
        <nav className="navbar">
            <div className="navbar">
                <div className="navbar-container">
                    <div className="menu-icon" onClick={menuHandler}>
                        <i className={menuState ?'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <Link to="/" className="navbar-logo">
                        Travel <i className="fab fa-typo3"></i>
                    </Link>
                    <ul className={menuState ?'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tourism" className="nav-links" onClick={closeMobileMenu}>
                            Tourism
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tour" className="nav-links" onClick={closeMobileMenu}>
                            Tour
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/sign-up"
                                className="nav-links-mobile"
                                onClick={closeMobileMenu}
                                >
                                    Register
                                </Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    )
}
export default Navbar;