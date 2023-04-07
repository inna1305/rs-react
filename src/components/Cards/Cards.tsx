import React, { useState } from 'react';
import { Card } from './Card';
import { IMovie } from '../../types';
import { ICardsProps } from '../pages/Home/Home';

const Cards = (props: ICardsProps) => {
  const [setMovies] = useState<IMovie[]>([]);
  //const { movies } = useContext(MovieContext);
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
