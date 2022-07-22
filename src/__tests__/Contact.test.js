import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Contact from '../Contact';

it('renders without error', () => {
    render(<Contact />)
})

it('renders the name', () => {
    render(<Contact />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
})

// With that passing, we obviously want the name to be dynamic.
// Let's assume it will be passed in via a prop:
it('renders the name', () => {
    let contact = { name: "John Doe" }
    render(<Contact contact={contact} />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
})
//This test still passes because it's the same name, but we need to get to a failing test.
//  Let's add another test that renders a different name:
it('renders another name', () => {
    let contact = { name: "Jane Doe" }
    render(<Contact contact={contact} />)
    expect(screen.getByText('Jane Doe')).toBeInTheDocument()
})
// Now, this one fails. Let's update the component to fix it:

//   This will fix the test, but now you should see that our first test ('renders without error') 
//   fails because we didn't pass in any props. This means that we may want to handle this condition.
//    This is a small example of how TDD helps us find the edge cases. We may not have considered 
//    this scenario if the component was written before the test. Let's add an explicit test to check for this:

it('display "not found" when no contact is supplied', () => {
    render(<Contact />)
    expect(screen.getByText('Not Found')).toBeInTheDocument()
})
//   Now, let's add a "Delete" button, but first a test to check for it:
it('renders a "delete" button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: "Delete" })).toBeInTheDocument()
})
// Then making the test pass, add to your Contact component...

// To simplify the example, when the button is clicked, we'll display an alert. 
// In your app, this could be calling to some other component, but we can still
//  mock the alert to verify it is called. Let's start with the test:
it('displays the alert when the delete button is clicked', () => {
    window.alert = jest.fn()
    render(<Contact />)
    const button = screen.getByRole('button', { name: "Delete" })
    fireEvent.click(button)
    expect(window.alert).toHaveBeenCalledTimes(1)
}) 
// Here we've substituted window.alert with a jest mock function. 
// This prevents the actual from being called and acts as a "spy" to verify later.
