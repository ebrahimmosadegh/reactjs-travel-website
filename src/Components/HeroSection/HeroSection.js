import React from 'react'
import './HeroSection.css'
import Button from '../UI/Button'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/video/1.mp4' autoPlay loop muted />
      <div className='hero-buttons'>
        <input className='search-input' type='text' placeholder='suchen Platz, Stadt, Land' autoComplete={false} />
        <Button buttonStyle="btn--search" buttonSize="btn--large">
            suchen
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;
