import React, { useState } from "react";
import style from "./RegisterSeller.module.css";
import Logo from "../../../components/base/Logo";
import ButtonSellerCustommer from "../../../components/base/ButtonSellerCustommer";
import Input from "../../../components/base/Input";
import PrimaryButton from "../../../components/base/PrimaryButton";
const RegisterSeller = (props) => {
  return (
    <div className={style.wrapper_content}>
      <Logo />
      <h2 className={style.text_register}>Please sign up with your account</h2>
      <ButtonSellerCustommer to="Register" />
      <Input className="name" type="text" placeholder="Name" />
      <Input className="email" type="text" placeholder="Email" />
      <Input className="phoneNumber" type="number" placeholder="Phone Number" />
      <Input className="storeName" type="text" placeholder="Store Name" />
      <Input className="password" type="password" placeholder="Password" />
      <PrimaryButton to="" />
      <p className={style.account}>
        Already have a Tokopedia account?
        <span>
          <a href="http://localhost:3000/Login/Seller" className={style.login}>
            Login
          </a>
        </span>
      </p>
    </div>
  );
};

export default RegisterSeller;
