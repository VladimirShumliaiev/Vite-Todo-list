import React, { FC } from "react";
import { squaresObject } from "./squares";

type Props = {
  state: string;
  setState: (square: string) => void;
  addText: () => void
};

const Button: FC<Props> = (props) => {
  const { state, setState , addText} = props;

  const handleOnClick = ( ) => {

  }



  return (
    <div>
        <button onClick={}>one</button>
        <button>one</button>
        <button>one</button>
        <button>one</button>
    </div>
  );
};

export default Button;
