import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import Button from "../UI/Button";
function Navbar(){
    const[menuState,setMenuState] = useState(false);
    const[buttonState,setButtonState] = useState(true);
    const menuHandler = ()=>setMenuState(!menuState);
    const closeMobileMenu = ()=>setMenuState(false);
    const handleButton = ()=>{
        if(window.innerWidth<=960){
            setButtonState(false);
        }else{
            setButtonState(true);
        }
    }
    window.addEventListener('resize',handleButton);
    return(
        <nav className="navbar">
            <div className="navbar">
                <div className="navbar-container">
                    <div className="menu-icon" onClick={menuHandler}>
                        <i className={menuState ?'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <Link to="/" className="navbar-logo">
                    Reisen <i className="fab fa-typo3"></i>
                    </Link>
                    <ul className={menuState ?'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Startseite
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Tourismus" className="nav-links" onClick={closeMobileMenu}>
                            Tourismus
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
                   { buttonState ?
                    <Button buttonStyle="btn--outline" to="/anmeldung">
                    Anmeldung
                    </Button>:null}
                </div>
            </div>
        </nav>
    )
}
export default Navbar;