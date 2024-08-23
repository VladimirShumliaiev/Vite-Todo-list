import React, { FC } from "react";
import { Comments } from "../../redux/commentsSlice";

type Props = Comments;

const Item: FC<Props> = (props) => {
  const { body, email, name, } = props;
  return (
    <div>
      <div>email: {email}</div>
      <div>name: {name}</div>
      <div>body: {body}</div>
      <hr />
    </div>
  );
};

export default Item;
