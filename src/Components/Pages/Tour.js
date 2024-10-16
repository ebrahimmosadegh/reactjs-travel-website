import React from "react";
import Button from "../UI/Button";
import CardsGuid from "../Tour/CardsGuid";
import '../../App.css'
function Tour(){
    return(
        <>
        <div className='tourism' style={{backgroundImage:`url(image/Düsseldorf.jfif)`}}>
        <div className='tourism-box'>
            <input type='text' className='search-input' placeholder='Stadt oder Land' autoComplete='off' />
            <Button buttonStyle="btn--search--place" buttonSize="btn--large">
                Suchen
            </Button>
        </div>
        </div>
        <CardsGuid />
        </>
    )
}

export default Tour;