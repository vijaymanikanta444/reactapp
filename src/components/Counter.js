import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
    // show: true,
  };
  increment = () => {
    // this.setState({ show: !this.state.show });
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: (this.state.count = 0) });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>Decrement</button>
        <br />
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
