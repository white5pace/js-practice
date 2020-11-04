import React, {Component} from 'react'
import Auxiliary from "../hoc/Auxiliary";
import Counter2 from "../Counter2/Counter2";

export default class Counter extends Component {
  state = {
    counter: 0
  }

  incCounter = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  decCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
      <Auxiliary>
        <h2>{this.state.counter}</h2>
        <Counter2 />
        <button onClick={this.incCounter}>+</button>
        <button onClick={this.decCounter}>-</button>
      </Auxiliary>
    )
  }
}