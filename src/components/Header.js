import Logo from "../assets/images/marvel-logo.png";
import Menu from "./Menu";
const Header = () => {
  return (
    <header>
      <img src={Logo} alt="marvel logo" />
      <Menu />
    </header>
  );
};

export default Header;
