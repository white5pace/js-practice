import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.module.css'
import Counter from "./Counter";
import classes from './App.module.css'
import {add, addNumber, asyncAdd, sub} from "./redux/actions/actions";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className={classes.Actions}>
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>

        <div className={classes.Actions}>
          <button onClick={() => this.props.onAddNumber(15)}>Adding 15</button>
          <button onClick={() => this.props.onAddNumber(-17)}>Subtract 17</button>
        </div>

        <div className={classes.Actions}>
          <button onClick={() => this.props.onAsyncAdd(100)}>Async adding 100</button>
        </div>


        <Counter/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: number => dispatch(addNumber(number)),
    onAsyncAdd: number => dispatch(asyncAdd(number))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
