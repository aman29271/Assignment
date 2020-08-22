import React from "react";
import { NavLink } from "react-router-dom";

import bulma from "../scss/bulma.module.scss";
import styled from "styled-components";
const Header = () => {
  return (
    <nav
      className={bulma["navbar"]}
      role="navigation"
      aria-label="main navigation"
    >
      <div className={bulma["container"]}>
        <div
          id="navbarBasic"
          className={`${bulma["navbar-menu"]} ${bulma["is-active"]}`}
        >
          <NavbarStart className={bulma["navbar-start"]}>
            <NavLink
              exact
              to="/"
              className={bulma["navbar-item"]}
              activeClassName={bulma["is-active"]}
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/task1"
              className={bulma["navbar-item"]}
              activeClassName={bulma["is-active"]}
            >
              Task1
            </NavLink>

            <NavLink
              to="/task2"
              className={bulma["navbar-item"]}
              activeClassName={bulma["is-active"]}
            >
              Task2
            </NavLink>
          </NavbarStart>
        </div>
      </div>
    </nav>
  );
};
export default Header;
const NavbarStart = styled.div`
  display: flex;
  width: 100%;
`;
