import React from 'react';
import './Movies.css';
import CardItem from '../CardItem';



function Cards() {
  return (
    
     
    <div className='cards'>
      <h1> Click on the image below to watch the trailer</h1>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-10.jpg'
              text='Black Panther'
              label='Sci-Fi'
              path='/blackpanther'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Avengers: Infinity War'
              label='Sci-Fi'
              path='/avengers'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Uncharted'
              label='Adventure'
              path='/uncharted'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Ms. Marvel'
              label='Sci-Fi'
              path='/msmarvel'
            />
            <CardItem
              src='images/img-6.jpg'
              text='007: No Time To Die'
              label='Action'
              path='/nttd'
            />
          </ul>
        </div>
      </div>
    </div>
  
  );
}

export default Cards;
