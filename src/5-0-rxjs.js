import React, { Component } from 'react';
import { fromEvent, merge, of } from 'rxjs';
import { map } from 'rxjs/operators';

class OnlineStatus extends Component {
  state = {};

  isOnline$ = merge(
    of('start me up!'),
    ...['online', 'offline'].map(eventName => fromEvent(window, eventName))
  ).pipe(map(() => window.navigator.onLine));

  componentDidMount = () => {
    this.subscription = this.isOnline$.subscribe(isOnline =>
      this.setState({ isOnline })
    );
  };

  componentWillUnmount = () => this.subscription.unsubscribe();

  render = () => <div>{this.state.isOnline ? '😀' : '🤕'}</div>;
}

export default OnlineStatus;
