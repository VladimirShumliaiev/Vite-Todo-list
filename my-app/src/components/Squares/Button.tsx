import React, { FC, useState } from "react";
import { squaresObject } from "./squares";

type Props = {
  state: string;
  setState: (square: string) => void;
  title: string;
  setTitle: (e: string) => void
};

const Button: FC<Props> = (props) => {
  const { title, setTitle, state, setState } = props;


  const handleOnClick = (value: string) => {
    setState(value);
  };

  const handleTitle = (event: string) => {
    setTitle(event)
  }
 
  return (
    <div>
      <button onClick={() => handleTitle(title)}>
        {squaresObject.one.name}
      </button>
      <button onClick={() => handleOnClick('Hello')}>
        {squaresObject.two.name}
      </button>
      <button onClick={() => handleOnClick(title)}>
        {squaresObject.three.name}
      </button>
      <button onClick={() => handleOnClick(title)}>
        {squaresObject.four.name}
      </button>
      
      <div> {state} </div>
      <div>{title}</div>

    </div>
  );
};

export default Button;
