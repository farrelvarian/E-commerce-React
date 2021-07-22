import React from "react";
import style from "./confirmPassword.module.css";
import Logo from "../../components/base/Logo";
import Input from "../../components/base/Input";
import PrimaryButton from "../../components/base/PrimaryButton";
const Confirm = (props) => {
  return (
    <div className={style.wrapper_content}>
      <Logo />
      <h2 className={style.text_reset}>Reset password</h2>
      <h3 className={style.change_password}>
        You need to change your password to activate your account
      </h3>
      <Input className="password" type="password" placeholder="Password" />
      <Input
        className="confirmPassword"
        type="password"
        placeholder="Confirmation New Password"
      />
      <a
        href={`/ResetPassword`}
        className={style.forgot}
      >
        Forgot password?
      </a>
      <PrimaryButton to="ConfirmPassword/Login" />
    </div>
  );
};

export default Confirm;
