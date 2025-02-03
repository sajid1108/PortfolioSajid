import profilePicture from "../assets/profile-picture.png";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import "../styles/Header.css";
function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Sajid Abdul Fatah</h3>
        <p>Student - Biginner Front End Developer</p>
        <div className="socialMedia">
          <a href="">
            <FaInstagram />
          </a>
          <a href="https://github.com/sajid1108">
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
