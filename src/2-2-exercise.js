import React, { useReducer } from 'react';
import { render } from 'react-dom';

const initialState = 0;
const reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  return state;
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      {count}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </>
  );
};
render(<Counter />, document.getElementById('root-2-2'));

/*
  Change Counter component (and the reducer too) so that it can count both up and down.
  Do it in more than one way (different reducer/onClick combo).
 */
