import { useState } from "react";
import "../styles/Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillCloseCircle } from "react-icons/ai";

function Navbar() {
  const [statusTampil, setStatusTampil] = useState("");

  function tampilMenu() {
    if (statusTampil == "") {
      setStatusTampil("tampil");
    } else {
      setStatusTampil("");
    }
  }
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="">Sajid Abdul</a>
        </div>
        <button onClick={tampilMenu}>
          {statusTampil == "" ? <RxHamburgerMenu /> : <AiFillCloseCircle />}
        </button>
        <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
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
