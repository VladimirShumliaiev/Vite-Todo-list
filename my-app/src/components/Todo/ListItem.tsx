import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'

type Todo = {
  id: string;
  completed: boolean;
  title: string;
};

const ListItem: FC<Todo> = (props) => {
  const {id, completed, title} = props
  const dispatch = useAppDispatch()

  const handleOnChange = () => {
    dispatch()
  }
  
  return (
    <div>
        <input type={'checkbox'} checked={completed} onChange={}/>
        {title}
        <button onClick={}>x</button>
    </div>
  )
}

export default ListItem
