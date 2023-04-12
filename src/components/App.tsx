import React, { createContext, useEffect, useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import AboutUs from '../pages/AboutUs/AboutUs';
import { FormPage } from '../pages/FormPage/FormPage';
import { IConfigResponse } from '../types';

export const ConfigContext = createContext<IConfigResponse | null>(null);

const App = () => {
  const [config, setConfig] = useState<IConfigResponse | null>(null);

  useEffect(() => {
    async function fetchConfig() {
      const params = new URLSearchParams({
        api_key: '1e16d31f74bf1a1c5d381e59416e1ef6',
      });
      const response = await fetch(`https://api.themoviedb.org/3/configuration?${params}`);
      const configData = await response.json();
      setConfig(configData);
    }

    fetchConfig();
  }, []);

  return (
    <>
      <Outlet />
      <Routes>
        <Route
          path="/"
          index
          element={
            config ? (
              <ConfigContext.Provider value={config}>
                <Home />
              </ConfigContext.Provider>
            ) : (
              <p>Loading</p>
            )
          }
        />
        <Route path="about" element={<AboutUs />} />
        <Route path="add" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
