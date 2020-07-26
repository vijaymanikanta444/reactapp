import React from 'react';
import Wish from './components/Wish';

class App extends React.Component {
  state = {
    show: true,
  };
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        {this.state.show && <Wish name="vijay" />}
      </div>
    );
  }
}

export default App;
