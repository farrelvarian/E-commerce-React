import React from "react";
import style from "./navbar.module.css";
import Logo from "../../base/Logo";
import { ReactComponent as SearchImage } from "../../../assets/image/logo/search.svg";
import { ReactComponent as FilterImage } from "../../../assets/image/logo/filter.svg";
import { ReactComponent as CartImage } from "../../../assets/image/logo/cart.svg";
import { ReactComponent as NotifImage } from "../../../assets/image/logo/bell.svg";
import { ReactComponent as MailImage } from "../../../assets/image/logo/mail.svg";
import  NoImage  from "../../../assets/image/logo/user.svg";
// import ProfileImage from "../../../assets/image/logo/profile.png";
import "./style.css";
import { Link } from "react-router-dom";

const NavbarSeller = (props) => {
   const image = localStorage.getItem("image");
    return (
      <nav className={style.navbar_container}>
        <div className={style.logo}>
          <Logo />
        </div>
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
          <div className={style.cart}>
            <Link to="/mybag">
              <CartImage />
            </Link>
          </div>
          <div className={style.notification}>
            <NotifImage />
          </div>
          <div className={style.mail}>
            <MailImage />
          </div>
          <div className={style.profile}>
            <Link to="/profile/seller/storeprofile">
              <img
                className={style.profile_image}
                src={image === "null" ? NoImage  : image}
                alt="Profile"
              />
            </Link>
          </div>
        </div>
      </nav>
    );
  
}

export default NavbarSeller;
