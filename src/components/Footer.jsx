import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  const navigate = useNavigate();
    const pathTo = (path) => {
      navigate(path);
    };
  return (
    <footer className="footer">
      <div className="footerWrap">
        <div className="logo" onClick={() => pathTo("/")}>
          <Logo />
        </div>
        <div className="textWrap">
          <div className="navWrap">
            <div className="navItem" onClick={() => pathTo("/about")}>ABOUT</div>
            <div className="navItem" onClick={() => pathTo("/skills")}>SKILLS</div>
            <div className="navItem" onClick={() => pathTo("/works")}>WORKS</div>
            <div className="navItem" onClick={() => pathTo("/contact")}>CONTACT</div>
          </div>
          <div className="copyright">
            Copyright © 2026 CORRIE TSAI All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
