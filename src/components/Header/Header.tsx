import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <ul className='navigation'>
      <li>
        <Title />
      </li>
      <li className=''>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
    </ul>
  )
}

class Title extends React.Component {
  getPageTitle() {
    const path = window.location.pathname;
    return path === '/' ? 'home' : path.substring(1);
  }
  render() {
    return <h1 className='header-title'>{this.getPageTitle()}</h1>;
  }
}

export default Header;