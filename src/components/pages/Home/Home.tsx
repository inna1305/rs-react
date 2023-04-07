import React, { ChangeEvent, FormEvent, ReactElement, useState, createContext } from 'react';
import Header from '../../Header/Header';
import './home.css';
import Cards from '../../Cards/Cards';
import { getValueFromLS } from '../../../helpers/localStorage';
import { IMovie } from '../../../types';

export interface ICardsProps {
  movies: IMovie[];
}

interface ISearchProp {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export const Home = (): ReactElement => {
  const [searchQuery, setSearchQuery] = useState(getValueFromLS('search'));
  const [movies, setMovies] = useState<IMovie[]>([]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setMovies([]);
    await searchMovies(searchQuery);
    console.log(movies);
  };

  const searchMovies = async (query: string) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=1e16d31f74bf1a1c5d381e59416e1ef6`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <div>
      <Header />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSubmit={handleSubmit}
      />
      <Cards movies={movies} />
    </div>
  );
};

const SearchBar = (props: ISearchProp & { handleSubmit: (event: FormEvent) => void }) => {
  const { searchQuery, setSearchQuery, handleSubmit } = props;
  return (
    <form className="home-searchbar" onSubmit={handleSubmit}>
      <input
        value={searchQuery}
        placeholder="enter something..."
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
