import React from "react";

 const trailObject = {
  oneButton: "Hello js",
  twoButton: "Hello HTML",
  threeButton: "Hello React",
};


const Trial = () => {
  // const [state, setState] = useState('');

  const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log(trailObject.oneButton)
  };

  return (
    <div>
      <span>
        <button onClick={handleOnClick}>a</button>
      </span>
      {' '}
      <span>
        <button onClick={handleOnClick}>b</button>
      </span>
      {' '}
      <span>
        <button onClick={handleOnClick}>c</button>
      </span>
    </div>
  );
};

export default Trial;