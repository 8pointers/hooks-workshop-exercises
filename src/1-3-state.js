import React, { Component } from 'react';
import { render } from 'react-dom';

class Counter extends Component {
  state = { count: 0, isVisible: true };
  render = () => (
    <>
      <button onClick={() => this.setState({ isVisible: !this.state.isVisible })}>
        Toggle
      </button>
      {this.state.isVisible && (
        <>
          {this.state.count}
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            +
          </button>
        </>
      )}
    </>
  );
}

render(<Counter />, document.getElementById('root-1-3'));
