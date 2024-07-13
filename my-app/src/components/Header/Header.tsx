import React, { useState } from 'react'
import style from './Header.module.css'

const Header = () => {
  const [state, setState] = useState(new Date())

  setInterval(() => setState(new Date) ,1000)
  
  return (
    <div>
       <span className={style.rightBlock}>Time:{state.toLocaleTimeString()}</span>
       <span className={style.rightBlock}>Date:{state.toLocaleDateString()}</span>
    </div>
  )
}

export default Header
