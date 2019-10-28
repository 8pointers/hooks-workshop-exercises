import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
      {isVisible && (
        <>
          {count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </>
      )}
    </>
  );
};

render(<Counter />, document.getElementById('root-1-4-2'));
