import React, { FC } from 'react'

type InputProps = {
  title: string
  setTitle: (str: string) => void
  addTodo: () => void
}

const Input: FC<InputProps> = (props) => {
  const {title, setTitle, addTodo} = props

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault()
      if (title.trim().length){
        addTodo()
        setTitle('')
      }
  }

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setTitle(event.target.value)
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={title} onChange={handleOnChange}  placeholder='Text' />
      <button>add</button>
    </form>
  )
}

export default Input
