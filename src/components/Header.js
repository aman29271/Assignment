import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
const Header = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div id="navbarBasic" className="navbar-menu is-active">
          <NavbarStart className="navbar-start">
            <NavLink
              exact
              to="/"
              className="navbar-item"
              activeClassName="is-active"
            >
              Home
            </NavLink>
            <NavLink
              exact
              to="/task1"
              className="navbar-item"
              activeClassName="is-active"
            >
              Task1
            </NavLink>

            <NavLink
              to="/task2"
              className="navbar-item"
              activeClassName="is-active"
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
