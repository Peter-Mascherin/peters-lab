import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
        Peter's Lab
          
        </NavLink>

        <div className={"nav__menu"} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>

            <li className="nav__item">
                <NavLink to="/experimental" className="nav__link">
                    Experimental
                </NavLink>
            </li>

            <li className="nav__item">
                <NavLink to="/about" className="nav__link">
                    About
                </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
