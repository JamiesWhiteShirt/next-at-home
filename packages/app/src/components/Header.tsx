import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  max-width: 90vw;
  margin: 0 auto;
  padding: 1em 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.h1`
  font-size: var(--step-up-1);
`;

const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: venter;
  width: 50vw;
`;

const MenuItem = styled.li`
  margin-left: 2em;
  text-decoration: none;
`;

export default () => (
  <Header>
    <Brand>Stream all the things!</Brand>
    <Menu>
      <MenuItem>
        <NavLink
          to="/"
          exact
          activeClassName="active"
        >
          Home
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="/about"
          exact
          activeClassName="active"
        >
        </NavLink>
      </MenuItem>
    </Menu>
  </Header>
);
