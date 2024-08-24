import React, { FC } from "react";
import { Comments, deleteComments } from "../../redux/commentsSlice";
import { useAppDispatch } from "../../hooks/hooks";

type Props = Comments;

const Item: FC<Props> = (props) => {
  const {id,body, email, name, } = props;
  const dispatch = useAppDispatch()

  const handleDelete = () => {
    dispatch(deleteComments(id))
  }
  return (
    <div>
      <div>email: {email}</div>
      <div>name: {name}</div>
      <div>body: {body}</div>
      <button onClick={handleDelete}>delete</button>
      <hr />
    </div>
  );
};

export default Item;
