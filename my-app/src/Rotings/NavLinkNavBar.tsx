import React from "react";
import { NavLink } from "react-router-dom";
import Todo from "../components/Todo/Todo";

const NavLinkNavBar = () => {
  return (
    <div>
      <div>
        <NavLink to={"/"}> Home </NavLink>
      </div>
      <div>
        <NavLink to={"todo"}> Todo</NavLink>
      </div>
    </div>
  );
};

export default NavLinkNavBar;
