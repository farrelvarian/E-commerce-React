import React, { Component } from "react";
import style from "./input.module.css";

class Input extends Component {
  render() {
    return (
      <input
        className={style.input}
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        value={this.props.value}
      />
    );
  }
}
export default Input;
