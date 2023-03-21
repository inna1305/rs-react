import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from '../../App';
import { BrowserRouter as Router } from 'react-router-dom';

test('Should show title', async () => {
  render(
    <Router>
      <App />
    </Router>
  );
  expect(screen.getByText('Home')).toBeInTheDocument();
});
