import React, { useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';
import { fromEvent, merge, timer } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

const useObservable = observable$ => {
  const [value, setValue] = useState();
  useEffect(() => {
    const subscription = observable$.subscribe(setValue);
    return () => subscription.unsubscribe();
  }, [observable$]);
  return value;
};

const UseObservableDemo = () => {
  const now = useObservable(
    timer(0, 1000).pipe(map(() => new Date().toLocaleString()))
  );
  return <div>{now}</div>;
};

const useIsOnline = () => {
  const { current: onlineObservable$ } = useRef(
    merge(
      ...['online', 'offline'].map(eventName => fromEvent(window, eventName))
    ).pipe(
      startWith(),
      map(() => window.navigator.onLine)
    )
  );
  return useObservable(onlineObservable$);
};

const OnlineStatus = () => {
  const isOnline = useIsOnline();
  return <div>{isOnline ? '😀' : '🤕'}</div>;
};

render(
  <div>
    <UseObservableDemo />
    <OnlineStatus />
  </div>,
  document.getElementById('root-5-1')
);
