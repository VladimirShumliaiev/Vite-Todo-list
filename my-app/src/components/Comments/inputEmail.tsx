import React, { FC } from "react";

type Props = {
  email: string
  setEmail: (str: string) => void
  addEmail: () => void
}

const InputEmail: FC<Props> = (props) => {
  const {addEmail, email,setEmail} = props;

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if (email.trim().length) {
      addEmail()
      setEmail('')
    }
  }
  const handleOnchangeEmail: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value)
  
}

  return (
    <form onSubmit={handleOnSubmit}>
        <div>
        <input type="text" value={email} onChange={handleOnchangeEmail} placeholder="email" />
        </div>
      {/* <button>add</button> */}
    </form>
  );
};

export default InputEmail;

