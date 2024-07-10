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
        <button className={state === trialObject.one ? 'trial-active' : ''} onClick={() => handleOnChange(trialObject.one)}>one</button>{' '}
      </span>
      <span>
        <button className={state === trialObject.two ? 'trial-active' : ''} onClick={() => handleOnChange(trialObject.two)}>two</button>{' '}
      </span>
      <span>
        <button className={state === trialObject.three ? 'trial-active' : ''} onClick={() => handleOnChange(trialObject.three)}>three</button>
      </span>
      <div>{state}</div>
    </div>
  );
};

export default Trial;
