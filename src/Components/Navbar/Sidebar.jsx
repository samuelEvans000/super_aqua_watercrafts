import { useEffect, useState } from "react";
import "./Navbar.css"

const Sidebar = () => {
 const [menuOpen, setMenuOpen] = useState(false)

 const toggleMenu = () => {
    setMenuOpen(!menuOpen);
 }
 
 useEffect(() => {
    if(menuOpen) {
        document.body.classList.add("no-scroll")
    }
    else{
        document.body.classList.remove("no-scroll")
    }
 }, [menuOpen])

  return (
    <div className="sidebar">
      <div className="sideLogo">
        <img src="/assets/navLogo.jpg" />
      </div>

      <div className="sideMenu">
            <div onClick={toggleMenu} className="menuIcon">
                <img src="/assets/menuIcon.png" />
            </div>

            <div className={`menu ${menuOpen ? "open" : ""}`}>
                <div onClick={toggleMenu}><img src="/assets/menuIcon.png" /></div>
            </div>
      </div>
    </div>
  );
};

export default Sidebar;
