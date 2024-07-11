import React, { useState } from "react";
import { trialObject } from "./trial";
import "./Trial.css";

const Trial = () => {
  const [state, setState] = useState(trialObject.one);

  const handleOnChange = (value: string) => {
    setState(value);
  };

  return (
    <div>
      <div>
        <span>
          <button
            className={state === trialObject.one ? "trial-active" : ""}
            onClick={() => handleOnChange(trialObject.one)}
          >
            1
          </button>{" "}
        </span>
        <span>
          <button
            className={state === trialObject.two ? "trial-active" : ""}
            onClick={() => handleOnChange(trialObject.two)}
          >
            2
          </button>{" "}
        </span>
        <span>
          <button
            className={state === trialObject.three ? "trial-active" : ""}
            onClick={() => handleOnChange(trialObject.three)}
          >
            3
          </button>
        </span>
      </div>
            <pre/>
      <div>
        <span>
          <button
            className={state === trialObject.four ? "trial-green" : ""}
            onClick={() => handleOnChange(trialObject.four)}
          >
            4
          </button>{" "}
        </span>
        <span>
          <button
            className={state === trialObject.five ? "trial-yellow" : ""}
            onClick={() => handleOnChange(trialObject.five)}
          >
            4
          </button>{" "}
        </span>
        <span>
          <button
            className={state === trialObject.six ? "trial-purple" : ""}
            onClick={() => handleOnChange(trialObject.six)}
          >
            4
          </button>
        </span>
      </div>

      <div>{state}</div>
    </div>
  );
};

export default Trial;
