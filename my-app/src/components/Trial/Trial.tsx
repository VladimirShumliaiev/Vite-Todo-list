import React, { useState } from "react";
import { trialObject } from "./trial";
import './Trial.css'


const Trial = () => {
  const [state, setState] = useState(trialObject.one)

  const handleOnChange = (value: string) => {
      setState(value)
  }

  return (
    <div>
      <span>
        <button className={state === trialObject.one ? 'trial-active' : ''} onClick={() => handleOnChange(trialObject.one)}>1</button>{' '}
      </span>
      <span>
        <button className={state === trialObject.two ? 'trial-active' : ''} onClick={() => handleOnChange(trialObject.two)}>2</button>{' '}
      </span>
      <span>
        <button className={state === trialObject.three ? 'trial-active' : ''} onClick={() => handleOnChange(trialObject.three)}>3</button>
      </span>
      <div>{state}</div>
    </div>
  );
};

export default Trial;
