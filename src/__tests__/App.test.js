import React from 'react';
import App from '../App';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeToggle from '../ThemeToggle';

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


// You can find elements ByRole, ByLabelText, ByPlaceHolderText, 
// ByText, ByDisplayValue, ByAltText

//For each of these, you can prefix the matcher with get, query, or find:

//   getBy - Finds the node or throws an exception if not found or more than one is found.
//   queryBy - Finds the node or returns null if not found. Throws an exception if more than one is found.
//   findBy - Returns a Promise that resolves when the node is found. Rejects the promise if more than one 
// match is found or none are found after 1 second.

// Finally, if you want to find multiple elements, you can use the AllBy variants of the matchers. 
// getAllBy, queryAllBy, and findAllBy will return an array of nodes when one or more matches are found.

// beforeEach(() => {
//     render(<ThemeToggle />)
//   })

//   it('renders a Light button', () => {
//     expect(screen.getByText('Light')).toBeInTheDocument();
//   })

//   it('renders a Dark button', () => {
//     expect(screen.getByText('Dark')).toBeInTheDocument();
//   })

//   // Now let's add a test to verify that the toggle defaults to the "Light" state when initially rendered:
//   it('defaults to light', () => {
//     expect(screen.getByLabelText('Light')).toBeChecked()
//   })

// At this point, you should have all passing tests, but next, we would like to know if we have complete
//    test coverage of the component. To find out, we can get a code coverage report from Jest with
//     the following command:
// npm test -- --coverage

// Knowing this, we need to activate the button in the test to toggle the theme. We can use the fireEvent 
// helper to click an element.

describe('when no default is supplied', () => {
    beforeEach(() => {
        render(<ThemeToggle />)
    })

    it('renders a Light button', () => {
        expect(screen.getByText('Light')).toBeInTheDocument();
    })

    it('renders a Dark button', () => {
        expect(screen.getByText('Dark')).toBeInTheDocument();
    })

    it('defaults to light', () => {
        expect(screen.getByLabelText('Light')).toBeChecked()
    })

    it('changes to dark when clicked', () => {
        fireEvent.click(screen.getByText('Dark'))
        expect(screen.getByLabelText('Dark')).toBeChecked()
    })
})

describe('when dark is the default', () => {
    beforeEach(() => {
        render(<ThemeToggle defaultTheme="dark" />)
    })

    it('defaults to dark', () => {
        render(<ThemeToggle defaultTheme="dark" />)
        expect(screen.getByLabelText('Dark')).toBeChecked()
    })

    // xit('changes to light when clicked')
    // added a "pending" test using the xit function. Now let's go ahead and fill in that test:
    it('changes to light when clicked', () => {
        fireEvent.click(screen.getByText('Light'))
        expect(screen.getByLabelText('Light')).toBeChecked()
     })
     
}) 
