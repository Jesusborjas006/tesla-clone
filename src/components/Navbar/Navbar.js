import { useEffect, useState } from "react";
import "../App/App.css";
import Items from "./Items/Items";
import SideNavbar from "../SideNavbar/SideNavbar";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600 && isNavOpen) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isNavOpen]);

  return (
    <nav className="nav">
      <h1>TESLA</h1>
      <Items />
      <div className="extra-container">
        <p>Shop</p>
        <p>Account</p>
        <p onClick={() => setIsNavOpen(!isNavOpen)} className="sidebar-toggle">
          Menu
        </p>
      </div>
      <SideNavbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
    </nav>
  );
};

export default Navbar;
