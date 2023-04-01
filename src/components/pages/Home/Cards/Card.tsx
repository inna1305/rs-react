import React, { useContext } from 'react';
import { ICard } from '../../../../types';
import './cards.css';

const CardContext = React.createContext<ICard | undefined>(undefined);

export const Card = (props: ICard) => {
  const { name, birthday, tactility, photo, type, features } = useContext(CardContext) ?? props;

  const GetFeatures = () => {
    const listItems = features.map((feature) => (
      <li key={feature} className="list-item">
        {feature}
      </li>
    ));
    return (
      <div>
        <ul className="list-container">{listItems}</ul>
      </div>
    );
  };

  return (
    <div className="card-container">
      <div
        className="card-photo"
        style={{
          backgroundImage: `url(${photo})`,
        }}
      ></div>
      <div className="card-info card-name">{name}</div>
      <div className="card-info">{birthday.toLocaleDateString()}</div>
      <div className="card-info">{tactility}</div>
      <div className="card-info">{GetFeatures()}</div>
      <div className="card-info">{type}</div>
    </div>
  );
};
