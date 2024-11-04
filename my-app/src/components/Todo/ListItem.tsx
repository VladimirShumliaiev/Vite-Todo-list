import React from 'react'
import { useAppSelector } from '../../hooks/hooks'

const ListItem = () => {

  const list = useAppSelector(state => state.todo.todoList)
  return (
    <div>
        
    </div>
  )
}

export default ListItem
