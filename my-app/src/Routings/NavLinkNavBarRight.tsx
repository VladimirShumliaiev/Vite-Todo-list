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
          Test{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default NavLinkNavBarRight;
