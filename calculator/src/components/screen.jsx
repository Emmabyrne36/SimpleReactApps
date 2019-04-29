import React, { Component } from "react";

class Screen extends Component {
  render() {
    return <React.Fragment>{this.props.value}</React.Fragment>;
  }
}

export default Screen;
