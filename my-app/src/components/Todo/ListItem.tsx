import React, { FC } from "react";
import { Todo, deleteTodo, toggleTodo } from "../../redux/todoSlice";
import { useAppDispatch } from "../../hooks/hooks";

const ListItem: FC<Todo> = (props) => {
  const { id, title, completed } = props;
  const dispatch = useAppDispatch();

  const onChangeHandler = () => {
    dispatch(toggleTodo(id));
  };

  const onClickHandle = () => {
    if (window.confirm("delete todo")) {
      dispatch(deleteTodo(id));
    }
  };
  return (
    <div>
      <input type="checkbox" checked={completed} onChange={onChangeHandler} />
      {title}
      <button onClick={onClickHandle}> delete todo</button>
    </div>
  );
};

export default ListItem;
