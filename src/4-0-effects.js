import React, { Component } from 'react';
import { render } from 'react-dom';

const events = ['online', 'offline'];
class OnlineStatus extends Component {
  state = { isOnline: window.navigator.onLine };
  onlineOfflineListener = () => this.setState({ isOnline: window.navigator.onLine });
  componentDidMount = () =>
    events.forEach(t => window.addEventListener(t, this.onlineOfflineListener));
  componentWillUnmount = () =>
    events.forEach(t => window.removeEventListener(t, this.onlineOfflineListener));
  render = () => (this.state.isOnline ? '😀' : '🤕');
}
render(<OnlineStatus />, document.getElementById('root-4-0'));
