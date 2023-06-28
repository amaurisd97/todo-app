const Header = (): JSX.Element => {
  return (
    <header style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <h1 style={{ fontStyle: 'italic', marginRight: 20, color: 'rgb(50,50,50)' }}>Todo List</h1>
      <img src='/react.svg' alt='react icon' height={50} />
    </header>
  )
}
export default Header
