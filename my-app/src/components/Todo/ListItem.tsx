import React, { FC } from 'react'
import { useAppDispatch} from '../../hooks/hooks'
import { completeTodo, deleteTodo } from '../../redux/todoSlice';

type Todo = {
  id: string;
  completed: boolean;
  title: string;
};

const ListItem: FC<Todo> = (props) => {
  const {id, completed, title} = props
  const dispatch = useAppDispatch()

  const handleOnChange = () => {
    dispatch(completeTodo(id))
  }

  const handleDeleteTodo = () => {
    if (window.confirm('delete todo')) {
      dispatch(deleteTodo(id))
    }
  }
  
  return (
    <div>
        <input type={'checkbox'} checked={completed} onChange={handleOnChange}/>
        {title}
        <button onClick={handleDeleteTodo}>delete {' '}</button>
    </div>
  )
}

export default ListItem
