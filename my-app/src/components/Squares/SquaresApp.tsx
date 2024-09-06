import React, { useState } from 'react'
import Button from './Button'
// import List from './List'

const SquaresApp = () => {
    const [squares, setSquares] = useState('A')
    const{ title, setTitle} = useState('')
  return (
    <div>
        <Button title={title} setTitle={setTitle} state={squares} setState={setSquares} />
        {/* <List /> */}
    </div>
  )
}

export default SquaresApp
