import { Link } from "react-router-dom";
const MenuItems = ({ title, to }) => {
  return (
    <li>
      <Link to={to}>{title}</Link>
    </li>
  );
};
export default MenuItems;
