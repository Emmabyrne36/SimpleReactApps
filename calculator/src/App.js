import React, { Component } from "react";
import "./App.css";
import Button from "./components/button";
import Screen from "./components/screen";

class App extends Component {
  state = {
    mainButtons: [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "="],
    commandButtons: ["+", "-", "*", "/"],
    display: "",
    runningTotal: 0,
    currentOperator: "+"
  };

  handleNumberClick = number => {
    // If equals - call another method, else, append to screen
    if (number === "=") {
      // Set the display to the running total - removes all operators
      let oldState = { ...this.state };
      this.setState({ display: oldState.runningTotal });
    } else {
      let newDisplay = this.state.display;
      newDisplay += `${number}`;
      const newState = { display: newDisplay };
      this.calculateEquation(newState);
    }
  };

  handleOperatorClick = operator => {
    let newDisplay = this.state.display;
    newDisplay += ` ${operator} `;
    let newState = { display: newDisplay, currentOperator: operator };
    this.setState(newState);
  };

  calculateEquation = newState => {
    // Use display with the operator to show the running total
    // Just update state here, don't do it here and in calling method
    // Split the display on a space, do the command on them, set the state
    let oldState = { ...this.state };
    let currentTotal = this.getCurrentTotal(
      oldState.currentOperator,
      oldState,
      newState.display
    );
    newState.runningTotal = currentTotal;
    this.setState(newState);
  };

  getCurrentTotal(operator, oldState, newDisplay) {
    let currentTotal;
    const lastElem = newDisplay[newDisplay.length - 1];
    switch (operator) {
      case "+":
        currentTotal = oldState.runningTotal + +lastElem;
        break;
      case "-":
        currentTotal = oldState.runningTotal - +lastElem;
        break;
      case "*":
        currentTotal = oldState.runningTotal * +lastElem;
        break;
      case "/":
        if (+lastElem === 0) {
          currentTotal = 0;
        } else {
          currentTotal = oldState.runningTotal / +lastElem;
        }
        break;
      default:
        currentTotal = oldState.runningTotal;
    }

    return currentTotal;
  }

  reset = () => {
    this.setState({ display: "", runningTotal: 0 });
  };

  render() {
    return (
      <div className="container">
        <div className="calc-container">
          <div className="row mt-5">
            <div className="col-sm-12">
              <Screen value={this.state.display} />
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col-sm-9">
              {this.state.mainButtons.map(b => (
                <Button key={b} number={b} onClick={this.handleNumberClick} />
              ))}
            </div>
            <div className="col-sm-3">
              {this.state.commandButtons.map(b => (
                <Button key={b} number={b} onClick={this.handleOperatorClick} />
              ))}
            </div>
          </div>
        </div>
        <button className="btn btn-primary" onClick={this.reset}>
          Reset
        </button>
        <div> {this.state.runningTotal} </div>
      </div>
    );
  }
}

export default App;
