import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../../App';

import { MemoryRouter } from 'react-router-dom';

describe('404 page', () => {
  it('displays error message and status code', async () => {
    render(
      <MemoryRouter initialEntries={['/nonexistent-page']}>
        <App />
      </MemoryRouter>
    );
    const element = screen.getByText('Ups! 404 Page');
    expect(element).toBeTruthy();
  });
});
