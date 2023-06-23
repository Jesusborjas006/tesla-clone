import "../App/App.css";
import Items from "./Items/Items";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>TESLA</h1>
      <Items />
      <div className="extra-container">
        <p>Shop</p>
        <p>Account</p>
        <p>Menu</p>
      </div>
    </nav>
  );
};

export default Navbar;
