import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import './NavLinkNavBar.css'

type IsActiveProps ={
  isActive: boolean
}

const NavLinkNavBar: FC = () => {

  const isActive = ({isActive}: IsActiveProps) => isActive ? 'item-active-link' : ''
  return (
    <div className={'item'}>
      <div>
        <NavLink className={isActive} to={"/"}> Home </NavLink>
      </div>
      <div>
        <NavLink className={isActive} to={"todo"}> Todo</NavLink>
      </div>
      <div>
        <NavLink className={isActive} to={'book'}> React book</NavLink>
      </div>
    </div>
  );
};

export default NavLinkNavBar;
