import React from 'react';
import { persons } from '../../../cardsData';
import './cards.css';
import { Card } from './Card';

const Cards = () => {
  //TODO заменить ключ
  const items = persons.map((person) => (
    <div key={person.name} className="card-container">
      <Card {...person} />
    </div>
  ));

  return <div className="cards">{items}</div>;
};

export default Cards;
