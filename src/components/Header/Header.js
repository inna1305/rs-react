import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (React.createElement("ul", { className: 'navigation' },
        React.createElement("li", null,
            React.createElement(Title, null)),
        React.createElement("li", { className: '' },
            React.createElement(Link, { to: "/" }, "Home")),
        React.createElement("li", null,
            React.createElement(Link, { to: "/about" }, "About Us"))));
};
class Title extends React.Component {
    getPageTitle() {
        const path = window.location.pathname;
        return path === '/' ? 'home' : path.substring(1);
    }
    render() {
        return React.createElement("h1", { className: 'header-title' }, this.getPageTitle());
    }
}
export default Header;
