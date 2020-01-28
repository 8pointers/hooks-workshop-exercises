import React from 'react';
import { render } from 'react-dom';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

const useObservable = observable$ => {
  //TODO - implement me
};

const UseObservableDemo = () => (
  <div>
    {useObservable(timer(0, 1000).pipe(map(() => new Date().toLocaleTimeString())))}
  </div>
);

const useIsOnline = () => {
  //TODO - implement using useObservable
};

const OnlineStatus = () => <div>{useIsOnline() ? '😀' : '🤕'}</div>;

render(
  <>
    <UseObservableDemo />
    <OnlineStatus />
  </>,
  document.getElementById('root-5-2')
);
