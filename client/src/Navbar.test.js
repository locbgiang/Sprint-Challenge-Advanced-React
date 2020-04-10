import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Navbar from './Navbar';

test ('header is appearing', ()=>{
  const { getByText } = render(<Navbar />);
  const text = getByText(/women world cup players/i);
  expect(text).toBeVisible();
});