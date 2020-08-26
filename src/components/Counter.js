import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0,
    // show: true,
  };
  increment = () => {
    // this.setState({ show: !this.state.show });
    if (this.state.count < 10) {
      this.setState({ count: this.state.count + 1 });
    }
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: (this.state.count = 0) });
  };

  render() {
    return (
      <div className="container">
        <button className="btn" onClick={this.decrement}>
          Decrement
        </button>
        <span>{this.state.count}</span>
        <button className="btn" onClick={this.increment}>
          Increment
        </button>
        <br />
        <button className="btn" onClick={this.reset}>
          reset
        </button>
      </div>
    );
  }
}
