import React, { useEffect, useState } from 'react'
import List from './List'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { addTodo, fetchTodo } from '../../redux/todoSlice'
import Input from './Input'

const Todo = () => {
  const [title, setTitle] = useState('')
  const {error, loading} = useAppSelector(state => state.todo)
  const dispatch = useAppDispatch()

useEffect(() => {
  dispatch(fetchTodo())
},[dispatch])

const addTask = () => {
  dispatch(addTodo(title))
}
console.log('111',error)
  return (
    <div>
        <Input text={title} setText={setTitle} addTodo={addTask}/>
        {loading && <h2>Loading...</h2> }
        {error && <h2>Error:{error}</h2>}
        <List/>
    </div>
  )
}

export default Todo
