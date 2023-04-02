import React from 'react';
import { persons } from '../../../cardsData';
import './cards.css';
import { Card } from './Card';

const Cards = () => {
  const items = persons.map((person, index) => (
    <div key={index} className="card-container">
      <Card {...person} />
    </div>
  ));

  return <div className="cards">{items}</div>;
};

export default Cards;
