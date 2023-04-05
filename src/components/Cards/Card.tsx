import React, { useContext } from 'react';
import { ICard } from '../../types';
import './cards.css';
import FeaturesComponent from './Features';

const CardContext = React.createContext<ICard | undefined>(undefined);

export const Card = (props: ICard) => {
  const { name, birthday, tactility, photo, type, features } = useContext(CardContext) ?? props;

  return (
    <div className="card-container">
      <div
        className="card-photo"
        style={{
          backgroundImage: `url(${photo})`,
        }}
      ></div>
      <div className="card-info card-name">{name}</div>
      <div className="card-info">{birthday?.toLocaleDateString()}</div>
      <div className="card-info">{tactility}</div>
      <div className="card-info">
        <FeaturesComponent features={features} />
      </div>
      <div className="card-info">{type}</div>
    </div>
  );
};
