import React, { useEffect, useState } from 'react';

const events = ['online', 'offline'];
const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    const listener = () => setIsOnline(window.navigator.onLine);
    events.forEach(t => window.addEventListener(t, listener));
    return () => events.forEach(t => window.removeEventListener(t, listener));
  }, []);
  return <div>{isOnline ? '😀' : '🤕'}</div>;
};

export default OnlineStatus;
/*
  Create a custom useOnline hook by encapsulating the effects logic from the OnlineStatus component
*/
