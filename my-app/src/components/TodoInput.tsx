import React, { FC, useRef } from 'react'

type Props = {
    title: string
    setTitle: (str: string) => void
    addTodo: () => void
}

const TodoInput: FC<Props> = (props) => {
    const {title, setTitle, addTodo} = props
    const inputRef = useRef<HTMLInputElement>(null)

    const onSubmitHandle: React.FormEventHandler<HTMLFormElement> = (event) => {
       event.preventDefault()
       if (title.trim().length){
        addTodo()
        setTitle('')
       }
    
    }

    const onChangeHandle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setTitle(e.target.value)
    }
  
  return (
    <form onSubmit={onSubmitHandle}>
      <input  
      value={title} 
      onChange={onChangeHandle}
      ref={inputRef}
      placeholder='add todo...'
       />
      <button>ok</button>
    </form>
  )
}

export default TodoInput
