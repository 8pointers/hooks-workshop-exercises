import React, { useEffect, useRef, useState } from 'react';
import { fromEvent, merge, of, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, publishReplay, refCount, switchMap, pluck } from 'rxjs/operators';

const useObservable = observable$ => {
  const [value, setValue] = useState();
  useEffect(() => {
    const subscription = observable$.subscribe(setValue);
    return () => subscription.unsubscribe();
  }, [observable$]);
  return value;
};

const UseObservableDemo0 = () => (
  <div>
    {useObservable(timer(0, 1000).pipe(map(() => new Date().toLocaleTimeString())))}
  </div>
);

const UseObservableDemo1 = () => <div>{useObservable(timer(0, 1000))}</div>;

const UseObservableDemo2 = () => {
  const { current: counter$ } = useRef(timer(0, 1000));
  return <div>{useObservable(counter$)}</div>;
};

const counter$ = timer(0, 1000);
const UseObservableDemo3 = () => <div>{useObservable(counter$)}</div>;

const isOnline$ = merge(
  of('Start me up!'),
  ...['online', 'offline'].map(eventName => fromEvent(window, eventName))
).pipe(
  map(() => window.navigator.onLine),
  publishReplay(1),
  refCount()
);
const useIsOnline = () => useObservable(isOnline$);

const OnlineStatus = () => <div>{useIsOnline() ? '😀' : '🤕'}</div>;

const motd$ = timer(0, 1000).pipe(
  switchMap(id => ajax(`/api/motd?id=${id}`)),
  pluck('response')
);
const MOTD = () => <div>{useObservable(motd$)}</div>;

const Demo = () => (
  <>
    <UseObservableDemo0 />
    <UseObservableDemo1 />
    <UseObservableDemo2 />
    <UseObservableDemo3 />
    <OnlineStatus />
    <MOTD />
  </>
);

export default Demo;
