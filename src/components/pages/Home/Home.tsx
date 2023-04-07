import React, { ChangeEvent, FormEvent, ReactElement, useState } from 'react';
import Header from '../../Header/Header';
import './home.css';
import Cards from '../../Cards/Cards';
import { getValueFromLS } from '../../../helpers/localStorage';
import { searchByTitle } from '../../movieController';

interface ISearchProp {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}
export const Home = (): ReactElement => {
  const [searchQuery, setSearchQuery] = useState(getValueFromLS('search'));

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSearchQuery('');
    searchByTitle(searchQuery);
  };
  return (
    <div>
      <Header />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSubmit={handleSubmit}
      />
      <Cards />
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
