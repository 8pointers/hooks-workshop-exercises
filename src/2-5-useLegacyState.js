import React, { useReducer } from 'react';

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

export default Counter;
