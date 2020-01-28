import React, { useReducer } from 'react';

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

export default Counter;

/*
  Change Counter component (and the reducer too) so that it can count both up and down.
  Do it in more than one way (different reducer/onClick combo).
 */
