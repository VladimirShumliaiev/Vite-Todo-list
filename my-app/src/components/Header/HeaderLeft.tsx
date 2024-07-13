import React from 'react'
import style from './Header.module.css'

const HeaderLeft = () => {

  return (
    <div className={style.leftBlock}>
        <a href="https://react.dev/learn/typescript">
          <img src="https://miro.medium.com/v2/resize:fit:1024/1*CHH1P0NwJfZzXXHo-VUzOA.png" alt="" /> 
        </a>
     
    </div>
  )
}

export default HeaderLeft
