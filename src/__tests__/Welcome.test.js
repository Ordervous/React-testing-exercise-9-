import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from '../Welcome';

//We would like to write a test for the Welcome component without depending on the UserName 
// component. The goal is to have an isolated unit test for the Welcome component.

jest.mock("../UserName", () => function UserName() {
    return (<span>Test User</span>)
})

it('displays the user name in the heading', () => {
    render(<Welcome />)
    expect(screen.getByRole('heading', { name: 'Welcome back, Test User' })).toBeInTheDocument();
})
// We also used the getByRole finder method because we added a role to the h1 tag. 
// Adding proper roles helps with accessibility in the mark-up as well as making it easier to test.

// In our test, we would like to verify that the Date.now function is being called and let it continue 
// to call the original function. We can use the jest.spyOn method to verify this

afterEach(() => {
    jest.restoreAllMocks()
})
//If you do not restore the mock, the spy applied in one test will still be applied in subsequent tests.
//   In some cases, this could be your intent, but just be aware of the potential side effects of doing so.


describe('the welcome footer', () => {
    it('retrieves the current date', () => {
        const spy = jest.spyOn(Date, 'now')
        render(<Welcome />)
        expect(spy).toHaveBeenCalled()
    })
    it('displays the current date', () => {
        const spy = jest.spyOn(Date, 'now')
            .mockImplementation(() => new Date('2021-01-01T00:00')
            
            )
            render(<Welcome />)
            expect(screen.getByText('This page was rendered on 1/1/2021, 12:00:00 am')).toBeInTheDocument();
    })
})



  // Typically when we use spyOn, we only want that spy to be applied for the duration of the test, however,
//   jest does not reset the spy after each test by default. To ensure that it is reset to its original implementation, 
//   we can add an afterEach block to our test that calls jest.restoreAllMocks:

// If we want to verify the text output of the footer, it would be really difficult, because the value of Date.now() is always changing.
//  We can chain the .mockImplementationOnce method to effectively turn our spy into a mock and supply a substitute implementation:

// Snapshots 
// it('should match the snapshot', () => {
//     const { asFragment } = render(<Welcome />)
//     const html = asFragment()
//     expect(html).toMatchSnapshot()
//   })
//   This test utilizes the return value of render that provides the asFragment function. We can retrieve 
//   the HTML representation of the rendered component by calling asFragment, then using the jest 
//   expectation toMatchSnapshot for the test.

//After running the test for the first time, it should always pass because it does not have a previous snapshot 
// to compare to. If you look inside your __tests__ folder, you should now see a __snapshots__ folder. Jest creates 
// a .snap file for each snapshot test. If you inspect the contents, you'll see an HTML representation of the component.

// Runit again This time you will see the test fail because it does not match the snapshot. This is because we've captured 
// the current date and time in the snapshot. To fix this, we need to mock the Date.now method again:

it('should match the snapshot', () => {
    const spy = jest.spyOn(Date, 'now')
      .mockImplementation(() => new Date('2021-01-01T00:00')
    )
    const { asFragment } = render(<Welcome />)
    const html = asFragment()
    expect(html).toMatchSnapshot()
  })
  