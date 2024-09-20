import React, { FC } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { completeTodo, deleteTodo } from '../../redux/todoSlice'

type ItemProps = {
  id: string
  completed: boolean
  title: string
}

const ListItem:FC<ItemProps> = (props) => {
  const {id, completed, title} = props
  const dispatch = useAppDispatch()

  const handleOnChange = () => {
    dispatch(completeTodo(id))
  }

  const handleOnClick = () => {
    if (window.confirm('delete todo')) {
      dispatch(deleteTodo(id))
    }

  }
  return (
    <div>
      <input type={'checkbox'} checked={completed} onChange={handleOnChange} />
        {title }
        <button onClick={handleOnClick}> x </button>
    </div>
  )
}

export default ListItem
