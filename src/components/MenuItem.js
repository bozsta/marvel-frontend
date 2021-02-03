import { useHistory } from "react-router-dom";
const MenuItems = ({ title, to }) => {
  const history = useHistory();
  const handleClick = (e) => {
    history.push(`${to}`);
  };
  return <li onClick={handleClick}>{title}</li>;
};
export default MenuItems;
