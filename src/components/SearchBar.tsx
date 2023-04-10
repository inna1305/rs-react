import React, { ChangeEvent, FormEvent } from 'react';

interface ISearchProp {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const SearchBar = (props: ISearchProp & { handleSubmit: (event: FormEvent) => void }) => {
  const { searchQuery, setSearchQuery, handleSubmit } = props;
  return (
    <>
      <p className="label">enter the name of the movie</p>
      <form className="home-searchbar" onSubmit={handleSubmit}>
        <input
          id="search"
          value={searchQuery}
          placeholder="enter something..."
          type="text"
          onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;
