import React, { useState } from 'react'
import Button from './Button'

const Trial = () => {
    const [state, setState] = useState('')
  return (
    <div>
        <Button state={state} setState={setState}/>
    </div>
  )
}

export default Trial
