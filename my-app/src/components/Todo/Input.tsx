import React, { FC } from 'react'

type InputProps = {
    text: string
    setText: (title: string) => void
    addTodo: () => void
}

const Input: FC<InputProps> = (props) => {
    const {text, setText, addTodo} = props

    const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault()

        if (text.trim().length) {
            addTodo()
            setText('')
        }
    }
        

    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (event) => {
            setText(event.target.value)
    }
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <input
             type="text" 
             value={text}
             onChange={onChangeHandler}
             placeholder='add ...'
             />
            <button> add </button>
            <pre/>
        </form>
    </div>
  )
}

export default Input
