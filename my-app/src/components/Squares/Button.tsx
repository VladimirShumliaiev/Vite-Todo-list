import React, { FC } from "react";
import { squaresObject } from "./squares";

type Props = {
  state: string;
  setState: (square: string) => void;
  addText: () => void
};

const Button: FC<Props> = (props) => {
  const { state, setState , addText} = props;

  const handleOnClick = (value: string) => {
    setState(value);
  };

  return (
    <div>
        <button onClick={() => handleOnClick(squaresObject.one.name)}>one</button>
        <button onClick={() => handleOnClick(squaresObject.two.name)}>two</button>
        <button onClick={() => handleOnClick(squaresObject.three.name)}>three</button>
        <button onClick={() => handleOnClick(squaresObject.four.name)}>four</button>
        <div>
          {state}
        </div>
      
    </div>
  );
};

export default Button;
