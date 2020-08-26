import React, { Component } from 'react';

export default class Gallery extends Component {
  state = {
    url: [
      'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg',
      'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/08/14/919228-vijay-fan-die-by-suicide-rip-bala.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/6/6c/Vijay_At_The_Jilla_100_days_celebrations_event.jpg',
    ],
    i: 0,
  };
  onStartClick = () => {
    if (!this.interval) {
      this.interval = setInterval(this.next, 500);
    }
  };

  previous = () => {
    if (this.state.i > 0) {
      this.setState({ i: this.state.i - 1 });
    } else {
      this.setState({ i: this.state.url.length - 1 });
    }
  };
  next = () => {
    if (this.state.i < this.state.url.length - 1) {
      this.setState({ i: this.state.i + 1 });
    } else {
      this.setState({ i: 0 });
    }
  };
  show = (e) => {
    this.setState({ i: e.target.id });
  };

  onStopClick = () => {
    clearInterval(this.interval);
    this.interval = null;
  };
  render() {
    return (
      <div className="container">
        <button onClick={this.previous}>previous</button>
        <img src={this.state.url[this.state.i]} width="200" height="200"></img>
        {/* <h1>{this.state.i + 1}</h1> */}
        <button onClick={this.next}>next</button>
        <div>
          {this.state.url.map((url, index) => (
            <button
              onClick={this.show}
              className={(index == this.state.i ? 'active' : '') + ' btn'}
              id={index}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button onClick={this.onStartClick}>START</button>
        <button onClick={this.onStopClick}>STOP</button>
      </div>
    );
  }
}
