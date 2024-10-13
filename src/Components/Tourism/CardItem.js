import React from 'react'
import './CardsGuid.css'

function CardItem(props) {
    const{src, title, text} = props;
  return (
    <li className='cards__item'>
        <div className='compare-item'>
            <div className='compare-image-list'>
                <img src={src} />
                <div className='compare-item-title'>{title}</div>
                <div className='compare-item-exp'>{text}</div>
            </div>
        </div>
    </li>
  )
}

export default CardItem
