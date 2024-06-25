import React from 'react'
import { useAppSelector } from '../hooks/hooks'
import TodoItem from './TodoItem'

const TodoList = () => {
    const listSelector = useAppSelector(state => state.todo.list)

  return (
    <div>
        {
            listSelector.map(todo => <TodoItem key={todo.id} {...todo}/>)
        }
    </div>
  )
}

export default TodoList
