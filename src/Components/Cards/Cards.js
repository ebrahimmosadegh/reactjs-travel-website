import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
  return (
    <div className='cards'>
      <h1>Top-Reiseziele</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                path="/"
                label="Berlin"
                src="/image/berlin.jfif"
                text="Flug über die Stadt Berlin"
                />
                <CardItem
                path="/"
                label="Berlin"
                src="/image/berlin.jfif"
                text="Flug über die Stadt Berlin"
                />
            </ul>
            <ul className='cards__items'>
                <CardItem
                path="/"
                label="Berlin"
                src="/image/berlin.jfif"
                text="Flug über die Stadt Berlin"
                />
                <CardItem
                path="/"
                label="Berlin"
                src="/image/berlin.jfif"
                text="Flug über die Stadt Berlin"
                />
                <CardItem
                path="/"
                label="Berlin"
                src="/image/berlin.jfif"
                text="Flug über die Stadt Berlin"
                />
                <CardItem
                path="/"
                label="Berlin"
                src="/image/berlin.jfif"
                text="Flug über die Stadt Berlin"
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
