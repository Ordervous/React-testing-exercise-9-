import React from 'react';
import App from '../App';
import { render, screen } from '@testing-library/react';

it('renders the documentation link', () => {
  render(<App />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
})
// The render function is a helper that takes care of the boilerplate that would 
// normally be needed to set up and tear down rendering the component in a container 
// within the document body. The screen object provides convenience methods for 
// searching for elements within the document body. Here we're using the getByText 
// method to find the element with the given text.

// The toBeInTheDocument method is a Jest "custom matcher" also supplied by the React 
// testing-library that returns true or false if the element exists. The Jest expect 
// function is the assertion that determines if the test passes or not.

// The end goal is to write a test that is easy to understand and reads almost naturally.
//  Most developers could look that the above test, and without any experience with Jest,
//   understand what it is attempting to accomplish.