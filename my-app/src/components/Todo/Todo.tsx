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
      <Input title={state} setTitle={setState} addTodo={addTask}/>
      <hr />
      <List/>
    </div>
  )
}

export default Todo

