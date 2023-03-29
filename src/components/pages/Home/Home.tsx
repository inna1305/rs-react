import React, { ChangeEvent, FormEvent, ReactElement } from 'react';
import Header from '../../Header/Header';
import './home.css';
import Cards from './Cards/Cards';
export const Home = (): ReactElement => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Cards />
    </div>
  );
};

class SearchBar extends React.Component {
  state = {
    value: localStorage.getItem('searchWord') || '',
  };

  render() {
    return (
      <form className="home-searchbar" onSubmit={this.handleSubmit}>
        <input
          placeholder="enter something..."
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
  componentWillUnmount() {
    if (!localStorage.getItem('searchWord')) {
      localStorage.setItem('searchWord', this.state.value);
    }
    if (this.state.value.length > 0) {
      localStorage.setItem('searchWord', this.state.value);
      this.setState({ state: '' });
    }
  }

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    this.setState({ state: this.state.value });
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
    this.setState({ state: this.state.value });
  };
}
