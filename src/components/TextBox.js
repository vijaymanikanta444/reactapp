import React, { Component } from 'react';

export default class TextBox extends Component {
  state = {
    value: '',
  };
  display = (e) => {
    // console.log(e.target.value);
    this.setState({ value: e.target.value });
  };
  show = (e) => {
    console.log(this.state.value);
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.display}></input>
        <button onClick={this.show}>click</button>
      </div>
    );
  }
}
