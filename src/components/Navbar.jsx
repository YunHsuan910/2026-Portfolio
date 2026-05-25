import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  const navigate = useNavigate();
  const pathTo = (path) => {
    navigate(path);
  };
  return (
    <nav className="nav">
      <div className="navWrap">
        <div className="navItem" onClick={() => pathTo("/about")}>
          ABOUT
        </div>
        <div className="navItem" onClick={() => pathTo("/skills")}>SKILLS</div>
        <div className="navItem logo" onClick={() => pathTo("/")}>
          <Logo />
        </div>
        <div className="navItem" onClick={() => pathTo("/works")}>WORKS</div>
        <div className="navItem" onClick={() => pathTo("/contact")}>CONTACT</div>
      </div>
    </nav>
  );
}

export default Navbar;
