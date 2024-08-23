import React, { FC } from "react";

type Props = {
  state: string
  setState: (str: string) => void
  addComments: () => void

}

const Input: FC<Props> = (props) => {
  const { state, setState, addComments} = props;

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if (state.trim().length) {
      addComments()
      setState('')
    }
  };

  const handleOnchange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setState(event.target.value)
  }



  return (
    <form onSubmit={handleOnSubmit}>
      <div>
      <input type="text" value={state} onChange={handleOnchange} placeholder="body"/>
      </div>
      <button>add</button>
    </form>
  );
};

export default Input;
