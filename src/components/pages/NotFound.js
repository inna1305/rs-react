import { Link } from 'react-router-dom';
import React from 'react';
const NotFound = () => {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Ups! 404 Page"),
        React.createElement("p", null,
            React.createElement(Link, { to: "/" }, "Go to the home page"))));
};
export default NotFound;
