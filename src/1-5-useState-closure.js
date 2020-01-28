import React, { useState } from 'react';

const Problem = () => {
  const [number, setNumber] = useState(0);
  const inc = () => setNumber(number + 1);
  const dec = () => setNumber(number - 1);
  const [{ action }, setAction] = useState({ action: () => setNumber(0) });
  return (
    <div>
      {number}
      <button onClick={() => setAction({ action: inc })}>++</button>
      <button onClick={() => setAction({ action: dec })}>--</button>
      <button onClick={action}>Execute</button>
    </div>
  );
};

export default Problem;
