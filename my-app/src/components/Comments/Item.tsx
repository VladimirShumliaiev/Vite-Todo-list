import React, { FC } from "react";
import { addComments, Comments, deleteComments } from "../../redux/commentsSlice";
import { useAppDispatch } from "../../hooks/hooks";
import InputEmail from "./inputEmail";

type Props = Comments;

const Item: FC<Props> = (props) => {
  const {id, body, email, name, } = props;
  const dispatch = useAppDispatch()

  const handleDelete = () => {
    dispatch(deleteComments(id))
  }

  const handleAdd = () => {
    dispatch(addComments(id))
  }
  return (
    <div>
      <div>id: {id}</div>
      <div>email: {email}</div>
      <div>name: {name}</div>
      <div>body: {body}</div>
      <button onClick={() => handleAdd()}>add</button>
      <button onClick={handleDelete}>delete</button>
      <hr />
    </div>
  );
};

export default Item;
