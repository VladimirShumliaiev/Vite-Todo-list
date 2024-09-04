import React, { FC } from "react";
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

  return (
    <div>
      <button onClick={() => handleOnClick(squaresObject.one.title)}>
        {squaresObject.one.name}
      </button>
      <button onClick={() => handleOnClick(squaresObject.two.title)}>
        {squaresObject.two.name}
      </button>
      <button onClick={() => handleOnClick(squaresObject.three.title)}>
        {squaresObject.three.name}
      </button>
      <button onClick={() => handleOnClick(squaresObject.four.title)}>
        {squaresObject.four.name}
      </button>
      
      <div> {state} </div>

    </div>
  );
};

export default Button;
