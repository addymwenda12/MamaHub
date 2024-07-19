import './styles.css'

const Navbar = () => {
  return (
    <nav className="group-navigation-menu">
        <button className="group-navigation-button active" >jourenys</button>
        <button className="group-navigation-button" >media</button>
        <button className="group-navigation-button">recommendations</button>
    </nav>
  );
};

export default Navbar;
