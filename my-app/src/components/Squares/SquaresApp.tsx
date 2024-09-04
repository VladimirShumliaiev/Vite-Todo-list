import React, { useState } from 'react'
import Button from './Button'
import List from './List'

const SquaresApp = () => {
    const [squares, setSquares] = useState('')
  return (
    <div>
        <Button state={squares} setState={setSquares} />
        <List />
    </div>
  )
}

export default SquaresApp
