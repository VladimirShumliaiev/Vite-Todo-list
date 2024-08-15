import React, { useState } from 'react'
import Button from './Button'

const Trail = () => {
    const [state, setState] = useState('')
  return (
    <div>
        <Button state={state} setSta/>
    </div>
  )
}

export default Trail
