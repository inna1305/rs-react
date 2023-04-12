import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import { getValueFromLS } from '../helpers/localStorage';

interface ISearchProp {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const SearchBar = (props: ISearchProp & { handleSubmit: (event: FormEvent) => void }) => {
  const { searchQuery, setSearchQuery, handleSubmit } = props;

  useEffect(() => {
    const searchFromLocalStorage = getValueFromLS('search');
    if (searchFromLocalStorage) {
      setSearchQuery(searchFromLocalStorage);
    }
  }, [setSearchQuery]);

  return (
    <>
      <p className="label">enter the name of the movie</p>
      <form className="home-searchbar" onSubmit={handleSubmit}>
        <input
          id="search"
          value={searchQuery}
          placeholder="enter something..."
          type="text"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(event.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
