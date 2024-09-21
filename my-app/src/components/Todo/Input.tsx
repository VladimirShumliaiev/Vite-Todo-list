import React, { FC } from 'react'

type InputProps = {
    text: string
    setText: (text: string) => void
    addTodo: () => void
}

const Input:FC<InputProps> = (props) => {
    const {text, setText, addTodo} = props

  

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()
        if (text.trim().length){
            addTodo()
            setText('')
        }
    }   

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setText(event.target.value)
    }

  return (
    <form onSubmit={handleOnSubmit}>
        <input value={text} onChange={handleOnChange} placeholder='todo...' />
        <button>add todo</button>
    </form>
  )
}

export default Input

