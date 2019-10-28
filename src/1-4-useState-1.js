import React, { useState } from 'react';
import { render } from 'react-dom';

const Counter = () => {
  const [{ count, isVisible }, setState] = useState({ count: 0, isVisible: true });
  return (
    <>
      <button onClick={() => setState({ count, isVisible: !isVisible })}>
        Toggle
      </button>
      {isVisible && (
        <>
          {count}
          <button onClick={() => setState({ count: count + 1, isVisible })}>
            +
          </button>
        </>
      )}
    </>
  );
};

render(<Counter />, document.getElementById('root-1-4-1'));
