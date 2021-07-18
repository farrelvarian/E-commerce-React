import React, { Component } from "react";
import style from "./navbar.module.css";
import Logo from "../../base/Logo";
import { ReactComponent as SearchImage } from "../../../assets/image/logo/search.svg";
import { ReactComponent as FilterImage } from "../../../assets/image/logo/filter.svg";
import { ReactComponent as CartImage } from "../../../assets/image/logo/cart.svg";
import { ReactComponent as NotifImage } from "../../../assets/image/logo/bell.svg";
import { ReactComponent as MailImage } from "../../../assets/image/logo/mail.svg";
import ProfileImage from "../../../assets/image/logo/profile.png";
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
        <div className={style.cart_notif_mail_profile}>
          <a href="#" className={style.cart}>
            <CartImage />
          </a>
          <div className={style.notification}>
            <NotifImage />
          </div>
          <div className={style.mail}>
            <MailImage />
          </div>
          <a href="#" className={style.profile}>
            <img src={ProfileImage} />
          </a>
        </div>
      </nav>
    );
  }
}

export default index;
