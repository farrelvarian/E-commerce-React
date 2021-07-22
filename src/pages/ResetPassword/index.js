import React from "react";
import style from "./resetPassword.module.css";
import Logo from "../../components/base/Logo";
import Input from "../../components/base/Input";
import PrimaryButton from "../../components/base/PrimaryButton";
const Reset = (props) => {
  return (
    <div className={style.wrapper_content}>
      <Logo />
      <h2 className={style.text_reset}>Reset password</h2>
      <Input className="email" type="text" placeholder="Email" />
      <a href="/ResetPassword" className={style.forgot}>
        Forgot password?
      </a>
      <PrimaryButton to="ConfirmPassword"/>
      <p className={style.account}>
        Don't have a Tokopedia account?
        <span>
          <a
            href="/Register/Custommer"
            className={style.register}
          >
            Register
          </a>
        </span>
      </p>
    </div>
  );
};

export default Reset;
