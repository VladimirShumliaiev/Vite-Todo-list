import React, { useEffect, useState } from 'react'
import Input from './Input'
import List from './List'
import { useAppDispatch } from '../../hooks/hooks'
import { addTodo, fetchTodo } from '../../redux/todoSlice'

const Todo = () => {
  const [state, setState] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTodo())
  },[dispatch])

  const addTask = () => {
    dispatch(addTodo(state))
  }
  return (
    <div>
      <Input state={state} setSate={setState} addTodo={addTask}/>
      <List/>
    </div>
  )
}

export default Todo

