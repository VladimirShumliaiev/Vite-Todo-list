
import { useEffect, useState } from 'react';
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { addTodo, fetchTodo } from './redux/todoSlice';
import { useAppDispatch } from './hooks/hooks';

function App() {
  const [text, setText] = useState('')
  const dispatch = useAppDispatch()

 useEffect(() => {  
      dispatch(fetchTodo())
 }, [dispatch])

   const addTask = () => {
      dispatch(addTodo(text))
 }

  return (
    <div className='App'>
        <TodoInput title={text} setTitle={setText} addTodo={addTask}/>
        <br />
        <TodoList/>
    </div>
  );
}

export default App
