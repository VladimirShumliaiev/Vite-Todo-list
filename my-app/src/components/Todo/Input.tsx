import React, { FC } from 'react'

type InputProps = {
  state: string
  setState: (str: string) => void
  addTodo: () => void
}

const Input: FC<InputProps> = (props) => {
  const {state, setState, addTodo} = props

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault()
      if (state.trim().length){
        addTodo()
        setState('')
      }
  }

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setState(event.target.value)
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={state} onChange={handleOnChange}  placeholder='Text' />
      <button>add</button>
    </form>
  )
}

export default Input
