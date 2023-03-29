import React from 'react';
import { ICard } from '../../../../types';
import './cards.css';

export class Card extends React.Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }
  render() {
    const { name, birthday, tactility, photo, type } = this.props;
    return (
      <>
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
          <div className="card-info">{this.GetFeatures()}</div>
          <div className="card-info">{type}</div>
        </div>
      </>
    );
  }

  GetFeatures = () => {
    const { features } = this.props;
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
}
