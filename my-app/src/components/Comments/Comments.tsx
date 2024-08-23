import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { addComments, fetchComments } from "../../redux/commentsSlice";
import Input from "./Input";
import ListComments from "./ListComments";


const Comments = () => {
  const [state, setState] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const CommentsAdd = () => {
    dispatch(addComments(state));
  };

  return (
    <div>
      <Input state={state} setState={setState} addComments={CommentsAdd} />
      <ListComments />
    </div>
  );
};

export default Comments;
