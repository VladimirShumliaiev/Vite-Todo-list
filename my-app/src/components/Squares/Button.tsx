import React, { FC } from "react";
import { squaresObject } from "./squares";

type Props = {
  state: string;
  setState: (square: string) => void;
  addText: () => void
};

const Button: FC<Props> = (props) => {
  const { state, setState , addText} = props;

  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = (event: string ) => {
    return {
      setState(event.target.value)
    }
  }



  return (
    <div>
        <button onClick={handleOnClick}>one</button>
        <button>one</button>
        <button>one</button>
        <button>one</button>
    </div>
  );
};

export default Button;
