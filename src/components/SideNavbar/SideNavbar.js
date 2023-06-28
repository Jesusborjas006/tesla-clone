const SideNavbar = (props) => {
  return (
    <nav className={`side-nav ${props.isNavOpen ? "nav-open" : "nav-closed"}`}>
      <p
        onClick={() => props.setIsNavOpen(!props.isNavOpen)}
        className="sidebar-toggle-2"
      >
        X
      </p>
      <ul className="side-links">
        <li>Existing Inventory</li>
        <li>User Inventory</li>
        <li>Trade-In</li>
        <li>Demo Drive</li>
        <li>Insurance</li>
        <li>Fleet</li>
        <li>Cypertruck</li>
        <li>Roadster</li>
        <li>Semi</li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
