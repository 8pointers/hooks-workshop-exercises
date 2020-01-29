import React, { useEffect, useState } from 'react';
import { fromEvent, merge, of } from 'rxjs';
import { map } from 'rxjs/operators';

const OnlineStatus = () => {
  const [isOnline, setIsOnline] = useState();
  useEffect(() => {
    const subscription = merge(
      of('Start me up!'),
      ...['online', 'offline'].map(eventName => fromEvent(window, eventName))
    )
      .pipe(map(() => window.navigator.onLine))
      .subscribe(setIsOnline);
    return () => subscription.unsubscribe();
  }, []);
  return <div>{isOnline ? '😀' : '🤕'}</div>;
};

export default OnlineStatus;
