import { createContext, PropsWithChildren, ReactNode, useState } from 'react';
import React from 'react';
import { IMovie } from '../types';

// interface IMovieProps {
//   searchQuery: string;
// }
// export const MovieProvider = ({ children, searchQuery }: PropsWithChildren<IMovieProps>) => {
//   const [movies, setMovies] = useState<IMovie[]>([]);
//
//   const searchMovies = async (query: string) => {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=YOUR_API_KEY`
//     );
//     const data = await response.json();
//     setMovies(data.results);
//   };
//
//   return <MovieContext.Provider value={{ movies, searchMovies }}>{children}</MovieContext.Provider>;
// };
