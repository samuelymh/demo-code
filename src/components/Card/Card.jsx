// For creating a component

// Needs to be imported (1)
import React from 'react';

// Import CSS
import './Card.css';

// Component definition (what it actually looks like) (2)
const Card = () => {

  // What it returns (3) - HTML
  return (
    <div className='a b'>
      <h1>Card</h1>
    </div>
  );
}

// Needs to be exported
export default Card;
