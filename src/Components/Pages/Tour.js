import React from "react";
import Button from "../UI/Button";
import '../../App.css'
function Tour(){
    return(
        <div className='tourism' style={{backgroundImage:`url(image/Düsseldorf.jfif)`}}>
        <div className='tourism-box'>
            <input type='text' className='search-input' placeholder='Stadt oder Land' autoComplete={false} />
            <Button buttonStyle="btn--search--place" buttonSize="btn--large">
                Suchen
            </Button>
        </div>
    </div>
    )
}

export default Tour;