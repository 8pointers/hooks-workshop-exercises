import React, { useState } from 'react';
import { render } from 'react-dom';

const useReducer = (reducer, initialState) => {
  const [state, setState] = useState(initialState);
  return [state, action => setState(reducer(state, action))];
};

const Counter = () => {
  const [count, dispatch] = useReducer(
    (state, action) => (action.type === 'INCREMENT' ? state + 1 : state),
    0
  );
  return (
    <>
      {count}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </>
  );
};

render(<Counter />, document.getElementById('root-2-3-2'));
