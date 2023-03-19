import React from 'react';
import { persons } from '../../../cardsData';
import { Card, Dimension } from '../../../../types';
import './cards.css';

const Cards = () => {
  const items = persons.map(person => (
    <div key={person.name} className='card-container'>
      <div className='card-photo'
           style={{
                   backgroundImage: `url(${person.photo})`
                  }}>
      </div>
      <div className='card-info card-name'>{person.name}</div>
      <div className='card-info'>{person.birthday.toLocaleDateString()}</div>
      <div className='card-info'>{person.placeOfBirth}</div>
      <div className='card-info'>{GetDimensions(person)}</div>
      <div className='card-info'>{person.type}</div>
    </div>
  ));

    return (
      <div className='cards'>{items}</div>
    );
}

const GetDimensions = (person: Card) => {
  const dimensions: Dimension[] = person.dimensions;
  const listItems = dimensions.map(dimension => (
    <li key={dimension} className='list-item'>{dimension}</li>
  ));
  return <p className='list-title'>Dimensions:<ul>{listItems}</ul></p>
}

export default Cards;