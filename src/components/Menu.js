import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <nav>
      <ul>
        <MenuItem to='/personnages' title='personnages'/>
        <MenuItem to='/comics' title='comics'/>
        <MenuItem to='/favoris' title='favoris'/>
      </ul>
    </nav>
  )
}
 export default Menu