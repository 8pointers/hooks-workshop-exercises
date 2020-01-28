import React, { Component } from 'react';

class Counter extends Component {
  state = { count: 0 };
  render = () => (
    <>
      {this.state.count}
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        +
      </button>
    </>
  );
}

export default Counter;
