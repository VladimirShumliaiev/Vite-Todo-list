import React, { FC } from 'react'

type Props = {
    squares: string
    setSquares: (square: string) => void
}

const Button:FC<Props> = (props) => {
    const {squares, setSquares} = props

    const handleOnClick = () => {
        
    }

  return (
    <div>
        <button ></button>
    </div>
  )
}

export default Button
