import React from 'react'
import { useAppSelector } from '../../hooks/hooks'
import ListItem from './ListItem'

const List = () => {
  const list = useAppSelector(state => state.todo.todoList)
  return (
    <div>
       {
            list.map(todo => <ListItem {...todo}/>)
          }
    </div>
  )
}

export default List
