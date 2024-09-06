import React, { FC, useState } from "react";
import { squaresObject } from "./squares";

type Props = {
  state: string;
  setState: (square: string) => void;
};

const Button: FC<Props> = (props) => {
  const { state, setState } = props;
  const{ title, setTitle} = useState('')

  const handleOnClick = (value: (e: string) => void) => {
    setState(value);
  };

  const handleTitle = (event: string) => {
    setTitle(event)
  }
 
  return (
    <div>
      <button onClick={() => handleTitle()}>
        {squaresObject.one.name}
      </button>
      <button onClick={() => handleOnClick(squaresObject.two)}>
        {squaresObject.two.name}
      </button>
      <button onClick={() => handleOnClick(squaresObject.three.title)}>
        {squaresObject.three.name}
      </button>
      <button onClick={() => handleOnClick(squaresObject.four.title)}>
        {squaresObject.four.name}
      </button>
      
      <div> {state} </div>
      <div>{title}</div>

    </div>
  );
};

export default Button;
