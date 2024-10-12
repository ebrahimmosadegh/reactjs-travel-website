import React from "react";
import { Link } from "react-router-dom";
import './Button.css';
const STYLES = ['btn--primary','btn--outline','btn--special','btn--search','btn--search--place','btn--tour'];
const SIZES = ['btn--medium','btn--large'];
function Button(props){
    const {to, children, buttonStyle, buttonSize} = props;
    const ButtonStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const ButtonSizes  = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return(
        <div>
            <Link to={to} className="btn-mobile">
                <button 
                className={`btn ${ButtonStyles} ${ButtonSizes}`}
                >
                    {children}
                </button>
            </Link>
        </div>
    )
}

export default Button;