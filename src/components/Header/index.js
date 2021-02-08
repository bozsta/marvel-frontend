import { Link } from "react-router-dom";
import Logo from "../../assets/images/marvel-logo.png";
// import Logo from "../../assets/images/marvel-logo.png";
import Menu from "../Menu";
import Search from "../Search";
import './header.css'
const Header = ({ search, handleSearch }) => {
  return (
    <header>
      <Link to="/" className="main-logo">
        <img src={Logo} alt="marvel logo" />
      </Link>
      <Menu />
      <Search search={search} handleSearch={handleSearch} />
    </header>
  );
};

export default Header;
