import React, { useState } from 'react'
import Button from './Button'
// import List from './List'

const SquaresApp = () => {
    const [squares, setSquares] = useState('A')
    const { state, setState } = useState('');

    const addText = (value: string) => {
      setState(value)
    }
  return (
    <div>
        <Button state={squares} setState={setSquares} />
        {/* <List /> */}
    </div>
  )
}

export default SquaresApp
