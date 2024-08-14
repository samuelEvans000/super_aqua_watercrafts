import { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  return (
    <div className="sidebar">
      <div className="sideLogo">
        <Link to= '/'>
        <img src="/assets/navLogo.jpg" />
        </Link>
      </div>

      <div className="sideMenu">
        <div onClick={toggleMenu} className="menuIcon">
          <img src="/assets/menuIcon.png" />
        </div>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <Link onClick={toggleMenu} to="/">
            <p>Home</p>
          </Link>
          <div className="whiteLine" />
          <Link onClick={toggleMenu} to="/aboutUs">
            <p>About Us</p>
          </Link>
          <div className="whiteLine" />

          <Link onClick={toggleMenu} to="/waterRecycling">
            <p>Water Recycling</p>
          </Link>
          <div className="whiteLine" />

          <Link onClick={toggleMenu} to="/johkasouTechnology">
            <p>Johkasou Technology</p>
          </Link>
          <div className="whiteLine" />

          <Link onClick={toggleMenu} to="/ourInstallation">
            <p>Our Installations</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
