import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' autoPlay loop muted />
      <h1>Flixer</h1>
      <p>Click and check out your favorite movies</p>
      
      <div className='hero-btns'>
        <Button
          className='button'
          buttonStyle='primaryBtn'
          buttonSize='Largebtn'
        >
          Add Movies
        </Button>
      </div>
    </div>
  );
}


export default HeroSection;

