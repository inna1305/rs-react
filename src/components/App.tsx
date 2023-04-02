import React, { ReactElement } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import AboutUs from './pages/AboutUs/AboutUs';
import Form from './pages/Home/Form/Form';

class App extends React.Component {
  render(): ReactElement {
    return (
      <div>
        <Outlet />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="add" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
