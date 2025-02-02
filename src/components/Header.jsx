import profilePicture from "../assets/profile-picture.png";
import "../styles/Header.css";
function Header() {
  return (
    <header>
      <div className="header-jombotron">
        <img src={profilePicture} />
        <h3>Sajid Abdul Fatah</h3>
        <p>Student - Biginner Front End Developer</p>
      </div>
    </header>
  );
}

export default Header;
