import React, { FC, useState } from "react";
import { squaresObject } from "./squares";

type Props = {
  state: string;
  setState: (square: string) => void;
};

const Button: FC<Props> = (props) => {
  const { state, setState } = props;


  const handleOnClick = (value: string) => {
    setState(value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  return (
    <div>
      <button onClick={() => handleOnClick(squaresObject.one.title)}>
        {squaresObject.one.name}
      </button>
      if (handleOnClick) {
        <input value={squaresObject.one.title} onChange={handleInputChange} />
      }
     
      
      <button onClick={() => handleOnClick('Hello')}>
        {squaresObject.two.name}
      </button>
      <button onClick={() => handleOnClick(state)}>
        {squaresObject.three.name}
      </button>
      <button onClick={() => handleOnClick(state)}>
        {squaresObject.four.name}
      </button>
      
      <div></div>

    </div>
  );
};

export default Button;
