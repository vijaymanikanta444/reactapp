import React, { Component } from 'react';

export default class Dice extends Component {
  state = {
    image: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGpKcRbYeq7ZSfihfZUG8m1mfXmqS0jvpcBA&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCKSFkYcZfVRAqmdF1uvCobnqnH2PECVX9Gg&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs_BpzjWaVLXHB9efcnYidpwU40f8BV4twjQ&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKDlzerIHa7SFXzOt6I3gqe-QOknCRI_7kjw&usqp=CAU',
      'https://w0.pngwave.com/png/553/231/dice-dominoes-bunco-dice-face-png-clip-art.png',
      'https://www.clipartkey.com/mpngs/m/66-660387_dot-clipart-one-five-side-of-dice.png',
      'https://lh3.googleusercontent.com/proxy/YgNvTh057dV4koSsBNuPMKqvBcwD3YN43_J7TeEoBQJQo_SYvIuHuWjUOD38UB_4cTFMyU8pVSrRsh2xlSAr9cYMbak4aSgnhsIz-dt6EqMfSdnV_mVz7zR9bVZi2DSy3_qW5jrqLDktNxqo',
    ],
    i: 0,
    alert: 'Have a great play',
  };
  rollDice = () => {
    this.setState({ alert: 'To stop click on StopDice' });
    if (!this.interval) {
      this.interval = setInterval(this.next, 100);
    }
  };
  stopDice = () => {
    this.setState({ alert: 'To reset click on Reset' });
    clearInterval(this.interval);
    this.interval = null;
  };
  next = () => {
    if (this.state.i < this.state.image.length - 1) {
      this.setState({ i: this.state.i + 1 });
    } else {
      this.setState({ i: 1 });
    }
  };
  reset = () => {
    if (!this.interval) {
      this.setState({ i: 0, alert: 'To Start click on RollDice' });
    }
  };
  render() {
    return (
      <div className="container">
        <img
          src={this.state.image[this.state.i]}
          height="200"
          width="200"
        ></img>
        <div>
          <h1 className="para">{this.state.alert}</h1>
          <button className="btn" onClick={this.rollDice}>
            RollDice
          </button>
          <button className="btn" onClick={this.stopDice}>
            StopDice
          </button>
        </div>
        <button onClick={this.reset}>Reset</button>
        {/* <button onClick={this.next}>next</button> */}
        <h1 onClick={this.stopDice}>value: {this.state.i}</h1>
      </div>
    );
  }
}
