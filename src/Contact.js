// function Contact() {
//   return (
//     <>
//     </>
//   )
// }
// export default Contact

// function Contact() {
//   return (
//     <span>John Doe</span>
//   )
// }

// function Contact(props) {
//   let { name } = props.contact
//   return (
//     <span>{name}</span>
//   )
// }
// export default Contact

// function Contact(props) {
//   const { contact: { name = "Not Found" } = {} } = props
//   return (
//     <span>{name}</span>
//   )
// }
// export default Contact

// import Button from 'react-bootstrap/Button'

// function Contact(props) {
//   const { contact: { name = "Not Found" } = {} } = props
//   return (
//     <>
//     <span>{name}</span>
//     <Button>Delete</Button>
//     </>
//   )
// }
// export default Contact

import Button from 'react-bootstrap/Button'

function handleDeleteContact() {
  alert('Contact Deleted!')
}

function Contact(props) {
  const { contact: { name = "Not Found" } = {} } = props
  return (
    <>
    <span>{name}</span>
    <Button onClick={handleDeleteContact}>Delete</Button>
    </>
  )
}
export default Contact
