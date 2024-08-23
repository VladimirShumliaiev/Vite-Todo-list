import React, { FC } from "react";

type Props = {
  name: string
  setName: (str: string) => void
  addName: () => void
}

const InputName: FC<Props> = (props) => {
  const { addName, name,setName } = props;

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if (name.trim().length) {
      addName()
      setName('')
    }
  };

const handleOnchangeName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setName(event.target.value)
}



  return (
    <form onSubmit={handleOnSubmit}>
      <div>
      <input type="text" value={name} onChange={handleOnchangeName} placeholder="name" />
      </div>
    
      {/* <button>add</button> */}
    </form>
  );
};

export default InputName;
