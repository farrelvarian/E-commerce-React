import React from "react";
import style from "./confirmLoginPassword.module.css";
import Logo from "../../components/base/Logo";
import Input from "../../components/base/Input";
import PrimaryButton from "../../components/base/PrimaryButton";
const LoginConfirm = () => {
  return (
    <div className={style.wrapper_content}>
      <Logo />
      <h2 className={style.text_confirm}>Please login with your account</h2>
      <h3 className={style.new_login}>
        We have sent an email containing a password reset instruction to your
        email. please check your email.
      </h3>
      <Input className="email" type="text" placeholder="Email" />
      <Input className="password" type="password" placeholder="Password" />
      <a href={`/ResetPassword`} className={style.forgot}>
        Forgot password?
      </a>
      <PrimaryButton to=""/>
    </div>
  );
};

export default LoginConfirm;
