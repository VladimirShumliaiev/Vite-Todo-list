import React, { useEffect } from 'react'
import List from './List'
import { useAppDispatch } from '../../hooks/hooks'
import { fetchTodo } from '../../redux/todoSlice'

const Todo = () => {
const dispatch = useAppDispatch()

useEffect(() => {
  dispatch(fetchTodo())
},[])

  return (
    <div>
        <List/>
    </div>
  )
}

export default Todo
