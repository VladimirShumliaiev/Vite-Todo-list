import React, { FC } from "react";

type Props = {
  state: string
  setState: (str: string) => void
  name: string
  setName: (str: string) => void
  email: string
  setEmail: (str: string) => void
  addComments: () => void
  addEmail: () => void
  addName: () => void
}

const Input: FC<Props> = (props) => {
  const { state, setState, addComments, addEmail, addName, email, name } = props;

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if (state.trim().length) {
      addComments()
      addEmail()
      addName
      setState('')
      setName('')
      setEmail('')
    }
  };

  const handleOnchange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setState(event.target.value)
  }

  const handleOnchangeEmail: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setState(event.target.value)
  
}

const handleOnchangeName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  setState(event.target.value)
}



  return (
    <form onSubmit={handleOnSubmit}>
      <div>
      <input type="text" value={state} onChange={handleOnchange} />
      </div>
      <div>
      <input type="text" value={email} onChange={handleOnchangeEmail} />
      </div>
      <div>
      <input type="text" value={name} onChange={handleOnchangeName} />
      </div>
    
      <button>add</button>
    </form>
  );
};

export default Input;
