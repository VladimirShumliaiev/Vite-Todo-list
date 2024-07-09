import React, { useState } from "react";
import { trailObject } from "./trail";
import './Trail.css'


const Trial = () => {
  const [state, setState] = useState("click");

  
  const handleOnClick = (value: string) => {
    setState(value);
  };

  return (
    <div>
      <span>
        <button className={state === trailObject.oneButton ? 'trail-active' : ''} onClick={() => handleOnClick(trailObject.oneButton)}>a</button>
      </span>{" "}
      <span>
        <button className={state === trailObject.twoButton ? 'trail-active' : ''} onClick={() => handleOnClick(trailObject.twoButton)}>b</button>
      </span>{" "}
      <span>
        <button className={state === trailObject.threeButton ? 'trail-active' : ''} onClick={() => handleOnClick(trailObject.threeButton)}>
          c
        </button>
      </span>
      <div>{state}</div>
    </div>
  );
};

export default Trial;
