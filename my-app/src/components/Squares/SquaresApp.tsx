import React, { useState } from 'react'
import Button from './Button'
import List from './List'

const SquaresApp = () => {
    const [squares, setSquares] = useState('')
  return (
    <div>
        <Button />
        <List />
    </div>
  )
}

export default SquaresApp
