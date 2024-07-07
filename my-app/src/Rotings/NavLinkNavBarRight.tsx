import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLinkNavBar.css'

type NavLinkNavBarRightProps = {
    isActive: boolean
}

const NavLinkNavBarRight = () => {

  const isActive = ({isActive}: NavLinkNavBarRightProps) => isActive ? 'item-active-link' : ''
  return (
    <div className='item'>
     <NavLink className={isActive} to={'trial'}> Trial </NavLink>
    </div>
  )
}

export default NavLinkNavBarRight
