import Logo from '../assets/images/marvel-logo.png'
import Menu from './Menu'
import Search from './Search'
const Header = ({ search, handleSearch }) => {
  return (
    <header>
      <img src={Logo} alt='marvel logo' />
      <Menu />
      <Search search={search} handleSearch={handleSearch} />
    </header>
  )
}

export default Header
