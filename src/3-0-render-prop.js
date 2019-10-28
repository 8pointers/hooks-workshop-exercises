import React, { Component } from 'react';
import { render } from 'react-dom';

class Counter extends Component {
  state = { count: 0 };
  render = () =>
    this.props.render({
      count: this.state.count,
      onIncrement: () => this.setState({ count: this.state.count + 1 })
    });
}
const SimpleView = ({ count, onIncrement }) => (
  <button onClick={onIncrement}>{count}</button>
);
const AnotherView = ({ count, onIncrement }) => (
  <div>
    {count}
    <button onClick={onIncrement}>+</button>
  </div>
);

render(
  <>
    <Counter render={SimpleView} />
    <Counter render={AnotherView} />
  </>,
  document.getElementById('root-3-0')
);
