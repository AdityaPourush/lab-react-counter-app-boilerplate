import './App.css';
import React from "react";

class Counter extends React.Component {

  state={
    count : 0,
  }

  Inc = () => {
    this.setState({count: this.state.count + 1});
  }

  render() {
    
    let Dec = () => {
      this.setState({count: this.state.count - 1});
    }

    let Reset = () => {
      this.setState({count: this.state.count = 0});
    }

    return (
      <div className="app_container">
        <h1>Counter App</h1>
        <h1>{this.state.count}</h1>

        <div>
          <button onClick={this.Inc} id='but'>+</button>
          <button onClick={Dec} id='but'>-</button>
          <button onClick={Reset} id='but'>Reset</button>
        </div>
      </div>
    )
  }
}

export default Counter;
