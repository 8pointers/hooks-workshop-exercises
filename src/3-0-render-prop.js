import React, { Component } from 'react';
// prettier-ignore
class Counter extends Component {
  state = { count: 0 };
  render = () => this.props.render({
    count: this.state.count,
    onIncrement: () => this.setState({ count: this.state.count + 1 })
  });
}
// prettier-ignore
const SimpleView = () => <Counter
  render={({ count, onIncrement }) => <button onClick={onIncrement}>{count}</button>}
/>;
// prettier-ignore
const AnotherView = () => <Counter
  render={({ count, onIncrement }) => <div>{count}<button onClick={onIncrement}>+</button></div>}
/>;
export default { SimpleView, AnotherView };
