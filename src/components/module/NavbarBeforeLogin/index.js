import React, { Component } from "react";
import style from "./navbar.module.css";
import Logo from "../../base/Logo";
import { ReactComponent as SearchImage } from "../../../assets/image/logo/search.svg";
import { ReactComponent as FilterImage } from "../../../assets/image/logo/filter.svg";
import { ReactComponent as CartImage } from "../../../assets/image/logo/cart.svg";
import "./style.css";

export class index extends Component {
  render() {
    return (
      <nav className={style.navbar_container}>
        <a className={style.logo} href="#">
          <Logo />
        </a>
        <div className={style.search_filter}>
          <div className={`${style.input_group} ${style.with_icon}`}>
            <input
              className={style.form_control_inputan}
              name="suche"
              type="search"
              placeholder="Search"
              autocomplete="off"
            />
            <SearchImage className={style.fas} />
          </div>
          <button
            className={style.btnFilter}
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <FilterImage />
          </button>
        </div>
        <div className={style.cart_login_signup}>
          <a href="#" className={style.cart}>
            <CartImage />
          </a>
          <a href="#" className={style.btnLogin}>
            Login
          </a>
          <a href="#" className={style.btnSignup}>
            Signup
          </a>
        </div>
      </nav>
    );
  }
}

export default index;
