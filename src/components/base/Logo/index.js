import React, { Component } from "react";
import style from "./logo.module.css";
import { ReactComponent as LogoImage } from "../../../assets/image/logo/logo.svg";
import { Link } from "react-router-dom";

export class index extends Component {
  render() {
    return (
      <div >
        <Link className={style.logo} to="/">
          <LogoImage />
          <h1 className={style.blanja}> Blanja </h1>
        </Link>
      </div>
    );
  }
}

export default index;
