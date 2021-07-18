import React, { Component } from "react";
import style from "./buttonSellerCustommer.module.css";
import { Link } from "react-router-dom";

export class index extends Component {
  render() {
    return (
      <div className={style.custommer_seller}>
        <Link to={`/${this.props.to}/Custommer`}>
          <button className={style.btn_custommer}>Custommer</button>
        </Link>
        <Link to={`/${this.props.to}/Seller`}>
          <button className={style.btn_seller}>Seller</button>
        </Link>
      </div>
    );
  }
}

export default index;
