import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

render(<Counter />, document.getElementById('root-1-1'));
