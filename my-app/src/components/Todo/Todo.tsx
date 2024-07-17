import React, { useEffect, useState } from "react";
import Input from "./Input";
import List from "./List";
import { useAppDispatch } from "../../hooks/hooks";
import { addTodo, fetchTodo } from "../../redux/todoSlice";

const Todo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const addTask = () => {
    dispatch(addTodo(title));
  };

  return (
    <div>
      <Input text={title} setText={setTitle} addTodo={addTask} />
      <hr />
      <List />
    </div>
  );
};

export default Todo;
