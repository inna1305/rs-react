import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs/AboutUs';
class App extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(Outlet, null),
            React.createElement(Routes, null,
                React.createElement(Route, { path: '/', index: true, element: React.createElement(Home, null) }),
                React.createElement(Route, { path: "about", element: React.createElement(AboutUs, null) }),
                React.createElement(Route, { path: "*", element: React.createElement(NotFound, null) }))));
    }
    ;
}
export default App;
