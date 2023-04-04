import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';
import { MemoryRouter } from 'react-router-dom';

describe('Form inputs', () => {
  it('should render all form elements', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );
    expect(getByText(/Person\s+Name/)).toBeInTheDocument();
    expect(getByText(/Date\s+of\s+birth/)).toBeInTheDocument();
    expect(getByText('Tactility')).toBeInTheDocument();
    //expect(getByText('photo')).toBeInTheDocument();
    expect(getByText('Type')).toBeInTheDocument();
  });
});

test('should render Form title text', async () => {
  render(
    <MemoryRouter>
      <Form />
    </MemoryRouter>
  );
  const formElement = screen.getByText('Add your pet');
  expect(formElement).toBeInTheDocument();
});
