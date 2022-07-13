import React, {Component} from "react";
import "./App.css"

class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 1 };
  }


  render() {
    return (
      <div>
        <h1 className="counterHeading">Odd Number</h1>
        <h3 className="description">Number : {this.state.count}</h3>
        <button
          className="btn-1"
          onClick={() => this.setState({ count: this.state.count + 2 })}
        >
          Increase
        </button>
        <button
          className="btn-2"
          onClick={() => this.setState({ count: this.state.count - 2 })}
        >
          Decrease
        </button>
      </div>
    );
  }
}

export default Counter