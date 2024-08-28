import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const handlePlus = () => {
        setCount(count + 1)
        if (count >= 5) {
            setCount(0)
        }
    }

    const handleMinus = () => {
        setCount(count - 1)

        if (count <= -5) {
            setCount(0)
        }
    }


  return (
    <div>
        <div>
           {count}
        </div>
        <button onClick={handlePlus}>plus</button>
        <button onClick={handleMinus}>minus</button>
    </div>
  )
}

export default Counter
