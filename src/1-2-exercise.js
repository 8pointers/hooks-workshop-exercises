import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default Counter;

/*
Change Counter component so that it can count both up and down.
 */
