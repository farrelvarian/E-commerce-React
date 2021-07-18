import React, { Component } from "react";
import style from "./loginSeller.module.css";
import Logo from "../../../components/base/Logo";
import ButtonSellerCustommer from "../../../components/base/ButtonSellerCustommer";
import Input from "../../../components/base/Input";
import PrimaryButton from "../../../components/base/PrimaryButton";

class LoginSeller extends Component {
  render() {
    return (
      <div className={style.wrapper_content}>
        <Logo />
        <h2 className={style.text_login}>Please login with your account</h2>
        <ButtonSellerCustommer to="Login" />
        <Input className="email" type="text" placeholder="Email" />
        <Input className="password" type="password" placeholder="Password" />
        <a href="http://localhost:3000/ResetPassword" className={style.forgot}>
          Forgot password?
        </a>
        <PrimaryButton to="" />
        <p className={style.account}>
          Don't have a Tokopedia account?
          <span>
            <a
              href="http://localhost:3000/Register/Seller"
              className={style.register}
            >
              Register
            </a>
          </span>
        </p>
      </div>
    );
  }
}

export default LoginSeller;
