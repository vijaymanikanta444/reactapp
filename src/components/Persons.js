import React, { Component } from 'react';

export default class Person extends Component {
  state = {
    friends: ['Babloo', 'Vijay', 'Deepak', 'Praveen'],
    i: 0,
  };
  previous = () => {
    this.setState({ i: this.state.i - 1 });
  };
  next = () => {
    this.setState({ i: this.state.i + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.previous}>previous</button>
        <span>{this.state.friends[this.state.i]}</span>
        <button onClick={this.next}>next</button>
      </div>
    );
  }
}
