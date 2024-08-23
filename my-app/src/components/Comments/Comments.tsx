import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { addComments, addEmail, addName, fetchComments } from "../../redux/commentsSlice";
import Input from "./Input";
import ListComments from "./ListComments";


const Comments = () => {
  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  const CommentsAdd = () => {
    dispatch(addComments(state));
  };

  const EmailAdd = () => {
    dispatch(addEmail(state));
  };

  const NameAdd = () => {
    dispatch(addName(state));
  };

  return (
    <div>
      <Input name={name} setName={setName} email={email} setEmail={setEmail} state={state} setState={setState} addComments={CommentsAdd} addEmail={EmailAdd} addName={NameAdd} />
      <ListComments />
    </div>
  );
};

export default Comments;
