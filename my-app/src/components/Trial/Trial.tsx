import React, { useState } from "react";
import TrailButton from './TrialButton'

const Trial = () => {
  const [state, setState] = useState('')
  return (
    <div>
    <TrailButton  state={state} setState={setState}/>
        {state}
    </div>
  );
};

export default Trial;
