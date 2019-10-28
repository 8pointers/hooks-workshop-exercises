import React, { useState, Component } from 'react';
import { render } from 'react-dom';

class MessageOfTheDay extends Component {
  state = {};
  fetchMessage = id =>
    fetch(`/api/motd?id=${id}`)
      .then(response => response.json())
      .then(message => this.setState({ message }));
  componentDidMount = () => this.fetchMessage(this.props.id);
  componentDidUpdate = prevProps => {
    if (prevProps.id !== this.props.id) {
      this.fetchMessage(this.props.id);
    }
  };
  render = () => this.state.message || '';
}
const Wrapper = () => {
  const [id, setId] = useState(0);
  return (
    <button onClick={() => setId(id + 1)}>
      Message: <MessageOfTheDay id={id} />
    </button>
  );
};
render(<Wrapper />, document.getElementById('root-4-5'));
