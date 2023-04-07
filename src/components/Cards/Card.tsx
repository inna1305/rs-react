import React, { useContext } from 'react';
import { ICard, IMovie } from '../../types';
import './cards.css';
import FeaturesComponent from './Features';
import { MovieContext } from '../pages/Home/Home';

export const Card = (props: IMovie) => {
  const { title, id, posterPath, release_date } = props;

  return (
    <div className="card-container" id={String(id)}>
      <div
        className="card-photo"
        style={{
          backgroundImage: `url(${posterPath})`,
        }}
      ></div>
      <div className="card-info card-name">{title}</div>
      <div className="card-info">{release_date}</div>
    </div>
  );
};
