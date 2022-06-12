import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';

import App from './App';

describe('app', () => {
  it('renders hello world', () => {
    expect.assertions(1);

    render(
      <Router>
        <App />
      </Router>,
    );

    const linkElement = screen.getByRole('heading');

    expect(linkElement).toBeInTheDocument();
  });
});
