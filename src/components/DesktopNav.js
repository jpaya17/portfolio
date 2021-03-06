import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const menuItems = [
  { name: "HELLO", link: "/" },
  { name: "ABOUT ME", link: "/about" },
  { name: "PORTFOLIO", link: "/myportfolio" },
  { name: "SKILLS", link: "/skills" }
];

function renderMenuItems() {
  return menuItems.map(item => (
    <div className="title-plus-line-container">
      <Link to={item.link}>
        <a className="menu-item-name">{item.name}</a>
      </Link>
      <div className="bottom-line"></div>
    </div>
  ));
}

function DesktopNav() {
  return (
    <div className="desktop-nav-container">
      {renderMenuItems()}
      <div className="title-plus-line-container">
        <a className="menu-item-name" href="/portfolio/img/cv2020.pdf" target="_blank">
          CV
        </a>
        <div className="bottom-line"></div>
      </div>
      {style}
    </div>
  );
}

const style = (
  <style jsx>{`
    .desktop-nav-container {
      z-index: 100;
      width: 100%;
      position: absolute;
      padding-top: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: var(--font2);
      font-size: 0.8rem;
      background-color: var(--color1);
    }
    .desktop-nav-container > * {
      padding: 2.3rem;
    }
    .bottom-line {
      padding-top: 0.5rem;
      width: 1.2rem;
      border-bottom: 0.2rem solid white;
      margin-left: 0.5rem;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s, opacity 0.3s linear;
      position: absolute;
    }
    .menu-item-name:hover + .bottom-line {
      visibility: visible;
      opacity: 1;
    }
    @media (max-width: 801px) {
      .desktop-nav-container {
        display: none;
      }
    }
  `}</style>
);

export default DesktopNav;
