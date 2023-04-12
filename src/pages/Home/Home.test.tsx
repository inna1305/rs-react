import { test, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from '../../components/App';
import { BrowserRouter as Router } from 'react-router-dom';

test('Should show title', async () => {
  render(
    <Router>
      <App />
    </Router>
  );

  await waitFor(() => {
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
