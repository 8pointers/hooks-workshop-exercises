import React, { useReducer } from 'react';
import { render } from 'react-dom';

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
render(<Counter />, document.getElementById('root-2-3-1'));
