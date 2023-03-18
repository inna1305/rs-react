import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { AboutUs, Home } from '../../../App';
import NotFound from '../NotFound';
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
