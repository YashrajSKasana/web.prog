import React from "react";
import navInfo from "../assets/NavInfo.json";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  const navLinkData = navInfo.NavLink.map((NavLink) => {
    return { ...NavLink, id: crypto.randomUUID() };
  });
  const [click, setClick] = useState(true);
  const whenClicked = () => {
    setClick(!click);
  };
  return (
    <nav className="nav-bar">
      <img src={`/images/${navInfo.logo}`} alt="Logo" className="logo" />
      <br />
      <ul className={`${click ? "nav-links" : "mobile-menu nav-links"}`}>
        {navLinkData.map((navLink) => (
          <CustomNavLink key={navLink.id} navLink={navLink} />
        ))}
        <li>
          <a href={navInfo.form} className="btn">
            Contact Us
          </a>
        </li>
        {!click && (
          <li>
            <img
              src={`/images/${navInfo.caretBtn}`}
              alt={navInfo.caretBtn}
              className="caretBtn"
              onClick={whenClicked}
            />
          </li>
        )}
      </ul>
        <img
          src={`/images/${navInfo.menuBtn}`}
          alt="Menu Button"
          className="menu-button"
          onClick={whenClicked}
        />
    </nav>
  );
}

function CustomNavLink({ navLink }) {
  return (
    <li>
      <NavLink
        to={navLink.to}
        className={({ isActive }) => (isActive ? "active" : "Link")}
      >
        {navLink.text}
      </NavLink>
    </li>
  );
}

export default NavBar;
