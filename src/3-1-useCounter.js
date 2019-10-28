import React, { useState } from 'react';
import { render } from 'react-dom';

const useCounter = () => {
  const [count, setCount] = useState(0);
  return { count, onIncrement: () => setCount(count + 1) };
};

const SimpleView = () => {
  const { count, onIncrement } = useCounter();
  return <button onClick={onIncrement}>{count}</button>;
};

const AnotherView = () => {
  const { count, onIncrement } = useCounter();
  return (
    <div>
      {count}
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

render(
  <>
    <SimpleView />
    <AnotherView />
  </>,
  document.getElementById('root-3-1')
);
