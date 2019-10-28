import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)} />
    </>
  );
};

render(<Counter />, document.getElementById('root-1-2'));

/*
Change Counter component so that it can count both up and down.
 */
