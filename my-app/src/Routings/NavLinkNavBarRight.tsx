import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./NavLinkNavBar.css";

type NavLinkNavBarRightProps = {
  isActive: boolean;
};

const NavLinkNavBarRight: FC = () => {
  const isActive = ({ isActive }: NavLinkNavBarRightProps) =>
    isActive ? "item-active-link" : "";

  return (
    <div className="item">
      <div>
        <NavLink className={isActive} to={"trial"}>
          {" "}
          Trial{" "}
        </NavLink>
      </div>

      <div>
        <NavLink className={isActive} to={"test"}>
          {" "}
          Comments{" "}
        </NavLink>
      </div>

      <div>
        <NavLink className={isActive} to={'users'}>
           Users
        </NavLink>
      </div>
      <div>
        <NavLink className={isActive} to={'counter'}>
           Counter
        </NavLink>
      </div>
      <div>
        <NavLink className={isActive} to={'quiz'}>
           Quiz
        </NavLink>
        <div>
        <NavLink className={isActive} to={'squares'}>
           Squares
        </NavLink>
        <div>
        <NavLink className={isActive} to={'photo'}>
            Photo
        </NavLink>
        </div>
      
      </div>
      </div>
    </div>
  );
};

export default NavLinkNavBarRight;
