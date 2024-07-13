import React, { useState } from 'react'

const HeaderRight = () => {
    const [state, setState] = useState(new Date())

    setInterval(() => setState(new Date) ,1000)
  return (
    <>
       <span>Time:{state.toLocaleTimeString()}</span>
       <span>Date:{state.toLocaleDateString()}</span>
    </>
  )
}

export default HeaderRight
