import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <hr />
    </div>
  );
}

const Navigation = () => {
  return (
    <ul className='navigation'>
      <li>
        <Title />
      </li>
      <li className=''>
        <Link to="/">Home3</Link>
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
    const pageName = path === '/' ? 'Home' : path.substring(1);
    return pageName;
  }
  render() {
    return <h1>{this.getPageTitle()}</h1>;
  }
}

export default Header;