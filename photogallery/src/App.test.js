import * as React from 'react';
import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import App from './App';

afterEach(cleanup);

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    //screen.debug();
  });
});