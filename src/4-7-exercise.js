import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

const MessageOfTheDay = ({ id }) => {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch(`/api/motd?id=${id}`)
      .then(response => response.json())
      .then(setMessage);
  }, [id]);
  return message || '';
};
const Wrapper = () => {
  const [id, setId] = useState(0);
  return (
    <button onClick={() => setId(id + 1)}>
      Message: <MessageOfTheDay id={id} />
    </button>
  );
};
render(<Wrapper />, document.getElementById('root-4-7'));
/*
  Create (extract) a custom useMessageOfTheDay hook.
  Refactor MessageOfTheDay component accordingly.
*/
