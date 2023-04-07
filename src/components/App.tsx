import React, { ReactElement, useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import AboutUs from './pages/AboutUs/AboutUs';
import { FormPage } from './pages/FormPage/FormPage';
import { IMovie } from '../types';

const App = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  return (
    <>
      <Outlet />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="add" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
