import React from 'react';
import { persons } from '../../../cardsData';
import { Card, Features } from '../../../../types';
import './cards.css';

const Cards = () => {
  const items = persons.map((person) => (
    <div key={person.name} className="card-container">
      <div
        className="card-photo"
        style={{
          backgroundImage: `url(${person.photo})`,
        }}
      ></div>
      <div className="card-info card-name">{person.name}</div>
      <div className="card-info">{person.birthday.toLocaleDateString()}</div>
      <div className="card-info">{person.tactility}</div>
      <div className="card-info">{GetFeatures(person)}</div>
      <div className="card-info">{person.type}</div>
    </div>
  ));

  return <div className="cards">{items}</div>;
};

const GetFeatures = (person: Card) => {
  const features: Features[] = person.features;
  const listItems = features.map((feature) => (
    <li key={feature} className="list-item">
      {feature}
    </li>
  ));
  return (
    <div>
      <p className="list-title">Features:</p>
      <ul>{listItems}</ul>
    </div>
  );
};

export default Cards;
