import React, { FC } from 'react'
import { useAppDispatch} from '../../hooks/hooks'
import { removeTodo, toggleTodo } from '../../redux/todoSlice';

type Todo = {
  id: string;
  completed: boolean;
  title: string;
};

const ListItem: FC<Todo> = (props) => {
  const {id, completed, title} = props
  const dispatch = useAppDispatch()

  const handleOnChange = () => {
    dispatch(toggleTodo(id))
  }

  const handleDeleteTodo = () => {
    if (window.confirm('delete todo')) {
      dispatch(removeTodo(id))
    }
  }
  
  return (
    <div>
        <input type={'checkbox'} checked={completed} onChange={handleOnChange}/>
        {title}
        {' '}
        <button onClick={handleDeleteTodo}> x </button>
    </div>
  )
}

export default ListItem
