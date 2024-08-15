import React, { FC } from "react";
import './Trial.css'
import { trialObject } from "./trialObject";

type ButtonProps = {
  state: string;
  setState: (state: string) => void;
};

const Button: FC<ButtonProps> = (props) => {
  const { state, setState } = props;

  const handleOnclick = (value: string) => {
    setState(value)
  }

  return (
    <div>
      <div>
        <button className={state === trialObject.one ? 'trial-blue' : ''} onClick={() => handleOnclick(trialObject.one)}>one</button>
        <button className={state === trialObject.two ? 'trial-green' : ''} onClick={() => handleOnclick(trialObject.two)}>two</button>
      </div>
      <div>
        <button className={state === trialObject.three ? 'trial-yellow' : ''} onClick={() => handleOnclick(trialObject.three)}>tree</button>
        <button className={state === trialObject.four ? 'trial-purple' : ''} onClick={() => handleOnclick(trialObject.four)}>four</button>
        <button className={state === trialObject.five ? 'trial-red ' : ''} onClick={() => handleOnclick(trialObject.five)}>five</button>
      </div>
      <div>
        <button className={state === trialObject.six ? 'trial-skyBlue' : ''}onClick={() => handleOnclick(trialObject.six)}>six</button>
      </div>
      {state}
    </div>
  );
};

export default Button;
