import React, { useState } from "react";
import TrialButton from "./TrialButton";



const Trial = () => {
 const [state, setState] = useState('')
  return (
    <div>
        <TrialButton state={state} setState={setState}/>
        {state}
    </div>
  );
};

export default Trial;
