import React, { FC } from 'react'
import { Todo, deleteTodo, toggleTodo } from '../redux/todoSlice'
import { useAppDispatch } from '../hooks/hooks'

const TodoItem: FC<Todo> = (props) => {
    const {id, completed, title} = props
    const dispatch = useAppDispatch()

    const onChangeHadler = () => {
            dispatch(toggleTodo(id))
    }

    const onClickHandler = () => {
        if (window.confirm('delete todo')) {
            dispatch(deleteTodo(id))
        }
    }
  return (
    <div>
        <input type="checkbox" checked={completed} onChange={onChangeHadler} />
        {title}
        <button onClick={onClickHandler}> delete </button>
    </div>
  )
}

export default TodoItem
