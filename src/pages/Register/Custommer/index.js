import React, { useState } from "react";
import style from "./RegisterCustommer.module.css";
import Logo from "../../../components/base/Logo";
import ButtonCustommerSeller from "../../../components/base/ButtonCustommerSeller";
import Input from "../../../components/base/Input";
import PrimaryButton from "../../../components/base/PrimaryButton";
const RegisterCustommer = (props) => {
  return (
    <div className={style.wrapper_content}>
      <Logo />
      <h2 className={style.text_register}>Please sign up with your account</h2>
      <ButtonCustommerSeller to="Register" />
      <Input className="name" type="text" placeholder="Name" />
      <Input className="email" type="text" placeholder="Email" />
      <Input className="password" type="password" placeholder="Password" />
      <PrimaryButton to="" />
      <p className={style.account}>
        Already have a Tokopedia account?
        <span>
          <a
            href="http://localhost:3000/Login/Custommer"
            className={style.login}
          >
            Login
          </a>
        </span>
      </p>
    </div>
  );
};

export default RegisterCustommer;
