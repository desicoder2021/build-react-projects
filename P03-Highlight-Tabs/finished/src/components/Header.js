import React from "react";
import Tab from "./Tab";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className='tabs'>
      <Tab>
        <NavLink
          to='/'
          end
          className={({ isActive }) => (isActive ? " is-active" : undefined)}
        >
          Home
        </NavLink>
      </Tab>
      <Tab>
        <NavLink
          end
          to='/about'
          className={({ isActive }) => (isActive ? " is-active" : undefined)}
        >
          About
        </NavLink>
      </Tab>
      <Tab>
        <NavLink
          to='/features'
          end
          className={({ isActive }) => (isActive ? " is-active" : undefined)}
        >
          Features
        </NavLink>
      </Tab>
    </div>
  );
}
