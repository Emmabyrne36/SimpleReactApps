import React, { Component } from "react";
import "./App.css";
import Button from "./components/button";
import Screen from "./components/screen";

class App extends Component {
  state = {
    mainButtons: [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "="],
    commandButtons: ["+", "-", "*", "/"],
    display: []
  };

  handleClick = number => {
    console.log(number);
    let oldDisplay = [...this.state.display];
    oldDisplay.push(number);
    this.setState({ display: oldDisplay });
  };

  render() {
    return (
      <div className="container">
        <div className="calc-container">
          <div className="row no-gutters">
            <React.Fragment className="col-md-12">
              <Screen value={this.state.display} />
            </React.Fragment>
          </div>
          <div className="row no-gutters">
            <div className="col-sm-9">
              {this.state.mainButtons.map(b => (
                <Button key={b} number={b} onClick={this.handleClick} />
              ))}
            </div>
            <div className="col-sm-3">
              {this.state.commandButtons.map(b => (
                <Button key={b} number={b} onClick={this.handleClick} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
