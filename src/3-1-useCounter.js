import React, { useState } from 'react';
const useCounter = () => {
  const [count, setCount] = useState(0);
  return { count, onIncrement: () => setCount(count + 1) };
};
const SimpleView = () => {
  const { count, onIncrement } = useCounter();
  return <button onClick={onIncrement}>{count}</button>;
};
// prettier-ignore
const AnotherView = () => {
  const { count, onIncrement } = useCounter();
  return <div>
    {count}
    <button onClick={onIncrement}>+</button>
  </div>;
};
export default { SimpleView, AnotherView };
