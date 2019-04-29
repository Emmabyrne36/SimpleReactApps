import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div
        className="calc-button"
        onClick={() => this.props.onClick(this.props.number)}
      >
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}

export default Button;
