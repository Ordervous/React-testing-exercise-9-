import UserName from './UserName'

function Welcome() {
  function currentDate() {
    return new Date(Date.now()).toLocaleString()
  }

  return (
    <>
    <h1 role="heading">Welcome back, <UserName /></h1>
    <div data-testid="footer">This page was rendered on {currentDate()}</div>
    </>
  )
}
export default Welcome