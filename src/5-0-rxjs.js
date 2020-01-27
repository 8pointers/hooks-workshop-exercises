import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    const subscription = merge(
      ...['online', 'offline'].map(eventName => fromEvent(window, eventName))
    )
      .pipe(map(() => window.navigator.onLine))
      .subscribe(setIsOnline);
    return () => subscription.unsubscribe();
  }, []);
  return <div>{isOnline ? '😀' : '🤕'}</div>;
};
render(<OnlineStatus />, document.getElementById('root-5-0'));
