import React from 'react'
import Button from '../UI/Button'
import CardsGuid from '../Tourism/CardsGuid'
import Cards from '../Cards/Cards'
import '../../App.css'

function Tourism() {
  return (
    <>
    <div className='tourism' style={{backgroundImage:`url(image/Neuschwanstein.jpeg)`}}>
        <h1 style={{color:'#fff', fontSize:'46px'}}>Ein umfassendes Touren- und Reiseportal</h1>
        <p>Durchsuchen Sie die Welt hier</p>
        <div className='tourism-box'>
            <input type='text' className='search-input' placeholder='Suchen Platz, Stadt, Land...' autoComplete={false} />
            <Button buttonStyle="btn--search--place" buttonSize="btn--large">
                Suchen
            </Button>
        </div>
    </div>
        <CardsGuid />
        <Cards />
    </>
  )
}

export default Tourism
