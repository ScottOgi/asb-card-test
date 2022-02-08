import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App should', () => {
  it('renders correct layout', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('Layout')).toBeTruthy()
  })
})

