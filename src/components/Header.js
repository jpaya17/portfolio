import React from 'react';
import Hamburger from "./Hamburger.js";
import DesktopNav from "./DesktopNav.js";

function Header() {
  return (
    <div className="header-container">
      <DesktopNav className="desktop-nav" />
      <Hamburger />
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .header-container {
      height: 5rem;
      display: flex;
      justify-content: space-between;
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 400;
    }
  `}</style>
);

export default Header;
