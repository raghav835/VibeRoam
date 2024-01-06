import "./navbar.css";

let Navbar;

Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">VibeRoam</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
