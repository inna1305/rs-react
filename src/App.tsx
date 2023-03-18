import React from 'react'
import Header from './components/Header/Header';

export const Home = () => {
    return (
        <div>
            <Header />
            <h2>Home</h2>
        </div>
    );
}

export const AboutUs = () => {
    return (
        <div>
          <Header />
          <h2>About Us</h2>
          <p>Information</p>
        </div>
    );
}
