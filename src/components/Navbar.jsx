import "../styles/Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="">Sajid Abdul</a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
