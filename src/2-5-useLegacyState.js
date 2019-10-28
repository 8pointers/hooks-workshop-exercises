import React, { useReducer } from 'react';
import { render } from 'react-dom';

const useLegacyState = initialState =>
  useReducer((state, action) => ({ ...state, ...action }), initialState);

const Counter = () => {
  const [{ count, isVisible }, setState] = useLegacyState({
    count: 0,
    isVisible: true
  });
  return (
    <div>
      <button onClick={() => setState({ isVisible: !isVisible })}>Toggle</button>
      {isVisible && (
        <>
          {count}
          <button onClick={() => setState({ count: count + 1 })}>+</button>
        </>
      )}
    </div>
  );
};

render(<Counter />, document.getElementById('root-2-5'));
