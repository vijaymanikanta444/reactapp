import React, { Component } from 'react';

export default class Person extends Component {
  state = {
    friends: ['Babloo', 'Vijay', 'Deepak', 'Praveen'],
  };

  render() {
    return (
      <div>
        {this.state.friends.map((friend, i) => (
          <h1>
            {i + 1} . {friend}
          </h1>
        ))}
        {/* <span>{this.state.friends[this.state.i]}</span> */}
      </div>
    );
  }
}
