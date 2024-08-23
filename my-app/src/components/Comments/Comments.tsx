import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { addComments, addEmail, addName, fetchComments } from "../../redux/commentsSlice";
import Input from "./Input";
import ListComments from "./ListComments";
import InputName from "./InputName";
import InputEmail from "./inputEmail";



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
    dispatch(addEmail(email));
  };

  const NameAdd = () => {
    dispatch(addName(name));
  };

  return (
    <div>
      <Input  state={state} setState={setState} addComments={CommentsAdd} />
      <InputEmail email={email} setEmail={setEmail} addEmail={EmailAdd}/>
      <InputName name={name} setName={setName} addName={NameAdd}  />
      <ListComments />
    </div>
  );
};

export default Comments;
