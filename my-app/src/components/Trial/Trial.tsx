import React, { useState } from "react";
import { trailObject } from "./trail";
import './Trail.css'


const Trial = () => {
  const [state, setState] = useState(trailObject.one)

  const handleOnChange = (value: string) => {
      setState(value)
  }

  return (
    <div>
      <span>
        <button className={state === trailObject.one ? 'trail-active' : ''} onClick={() => handleOnChange(trailObject.one)}>1</button>{' '}
      </span>
      <span>
        <button className={state === trailObject.two ? 'trail-active' : ''} onClick={() => handleOnChange(trailObject.two)}>2</button>{' '}
      </span>
      <span>
        <button className={state === trailObject.three ? 'trail-active' : ''} onClick={() => handleOnChange(trailObject.three)}>3</button>
      </span>
      <div>{state}</div>
    </div>
  );
};

export default Trial;
