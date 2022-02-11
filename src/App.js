import React, { Component } from "react";
export default class Arrow extends Component {
  z = (numero1) => {
    return numero1 * 2;
  };
  render() {
    return (
      <div>
        <h1>Let's practice REACT!</h1>
        <p>Abril de 2023 eu completarei {this.z(9)} anos!</p>
      </div>
    );
  }
}
