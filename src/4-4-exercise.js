import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

const events = ['online', 'offline'];
const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    console.log('Adding listeners');
    const listener = () => setIsOnline(window.navigator.onLine);
    events.forEach(t => window.addEventListener(t, listener));
    return () => {
      console.log('Removing listeners');
      events.forEach(t => window.removeEventListener(t, listener));
    };
  }, []);
  return <div>{isOnline ? '😀' : '🤕'}</div>;
};

render(<OnlineStatus />, document.getElementById('root-4-4'));
/*
  Create a custom useOnline hook by encapsulating the effects logic from the OnlineStatus component
*/
