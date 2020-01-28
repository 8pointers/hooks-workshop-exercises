import React, { useEffect, useState } from 'react';

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
export default Wrapper;
