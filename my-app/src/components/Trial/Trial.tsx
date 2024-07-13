import React, { useState } from "react";
import TrailButton from './TrialButton'
import { trialObject } from "./trialObject";

const Trial = () => {
  const [state, setState] = useState(trialObject.one)
  return (
    <div>
    <TrailButton  state={state} setState={setState}/>
        {state}
    </div>
  );
};

export default Trial;
