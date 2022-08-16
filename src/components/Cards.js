import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these new released movies!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Movie 1'
              label='Movie 1'
              path='/movies'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Movie 2'
              label='Movie 2'
              path='/movies'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Movie 3'
              label='Movie 3'
              path='/movies'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Movie 4'
              label='Movie 4'
              path='/movies'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Movie 5'
              label='Movie 5'
              path= '/movies'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
