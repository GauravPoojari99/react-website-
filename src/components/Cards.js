import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/engine.jpg'
              text='The engine is the heart of your car'
              label='Engine'
              path='/services'
            />
            <CardItem
              src='images/tarbo.jpg'
              text=' A turbocharger is a component comprised of a turbine and air compressor '
              label='Tarboo'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/wheel.jpg'
              text='NeoWheels is the No.1 Alloy Wheel Brand in India'
              label='Wheel'
              path='/services'
            />
            <CardItem
              src='images/headlight.jpg'
              text='Halogen headlights are the most widely used type of headlights '
              label='HeadLight'
              path='/products'
            />
            <CardItem
              src='images/bmw.jpg'
              text=' The first of many championships won using a MOMO steering wheel.'
              label='Steering Wheel'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
