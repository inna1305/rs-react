import React from 'react';
import Card from './Card';
import { ICardsProps } from '../../types';

const Cards = (props: ICardsProps) => {
  const movies = props.movies;

  return (
    <div>
      {movies.map((movie) => (
        <Card key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Cards;
