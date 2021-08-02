import React, { Component } from "react";
import style from "./primaryButton.module.css";
import { Link } from "react-router-dom";

export class index extends Component {
  render() {
    return (
      <Link
        className={style.logo}
        
        onClick={this.props.onClick}
      >
        <button className={style.btn_primary}>PRIMARY</button>
      </Link>
    );
  }
}

export default index;
