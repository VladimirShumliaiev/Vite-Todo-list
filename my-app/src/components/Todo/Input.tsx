import React, { FC } from 'react'

type InputProps = {
    text: string
    setText: (title: string) => void
    addTodo: () => void
}

const Input:FC<InputProps> = (props) => {
    const {text, setText, addTodo} = props

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setText(event.target.value)
    }

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {

    }

  return (
    <form onSubmit={handleOnSubmit}>
        <input type="text" onChange={handleOnChange} placeholder='todo' />
        <button>add todo</button>
    </form>
  )
}

export default Input

