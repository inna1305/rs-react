import React, { createContext } from 'react';
import { persons } from '../../../cardsData';
import './cards.css';
import { ICard } from '../../../../types';
import { Card } from './Card';

const CardContext = createContext<ICard | null>(null);

const Cards = () => {
  const items = persons.map((person, index) => (
    <div key={index} className="card-container">
      <CardContext.Provider value={person}>
        <Card {...person} />
      </CardContext.Provider>
    </div>
  ));

  return <div className="cards">{items}</div>;
};

export default Cards;
