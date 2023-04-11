import React, { FormEvent, ReactElement, useState } from 'react';
import Header from '../../components/Header/Header';
import './home.css';
import Cards from '../../components/Cards/Cards';
import { getValueFromLS } from '../../helpers/localStorage';
import { IMovie } from '../../types';
import SearchBar from '../../components/SearchBar';

export interface ICardsProps {
  movies: IMovie[];
}

const Home = (): ReactElement => {
  const [searchQuery, setSearchQuery] = useState(getValueFromLS('search'));
  const [movies, setMovies] = useState<IMovie[]>([]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    localStorage.setItem('search', searchQuery);
    setMovies([]);
    await searchMovies(searchQuery);
    setSearchQuery('');
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
      <div className="warn">
        sorry, my work is still in progress. if it doesn`t bother you, check the work later ♥
      </div>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSubmit={handleSubmit}
      />
      <Cards movies={movies} />
    </div>
  );
};
export default Home;
