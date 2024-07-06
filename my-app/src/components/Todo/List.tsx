import React from 'react'
import { useAppSelector } from '../../hooks/hooks'
import ListItem from './ListItem'

const List = () => {

    const todoList = useAppSelector(state => state.todo.list)

  return (
    <div>
        {
            todoList.map(todo => <ListItem key={todo.id} {...todo}/>)
        }
    </div>
  )
}

export default List
