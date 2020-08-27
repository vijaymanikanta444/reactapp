import React, { Component } from 'react';

export default class QuestionAnswer extends Component {
  state = {
    questions: ['what is the range of your age', 'gender', 'qualification'],
    i: 0,
  };
  render() {
    return (
      <div className="container">
        <h1>{this.state.questions[this.state.i]}</h1>
        <h1>{this.state.questions[this.state.i]}</h1>
        <button></button>
      </div>
    );
  }
}
