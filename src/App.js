import React from 'react';
import Header from './components/Header/Header';
export const Home = () => {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement("h2", null, "Home")));
};
export const AboutUs = () => {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement("h2", null, "About Us"),
        React.createElement("p", null, "Information")));
};
