import { Link } from 'react-router-dom';
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>Ups! 404 Page</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
export default NotFound;