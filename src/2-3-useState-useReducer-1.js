import React, { useReducer } from 'react';

const useState = initialState => useReducer((_, action) => action, initialState);

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
