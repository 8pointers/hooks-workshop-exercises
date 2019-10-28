import React, { useReducer } from 'react';
import { render } from 'react-dom';

const initialState = 0;
const reducer = (state, action) => (action.type === 'INCREMENT' ? state + 1 : state);

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {count}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </>
  );
};
render(<Counter />, document.getElementById('root-2-1'));
