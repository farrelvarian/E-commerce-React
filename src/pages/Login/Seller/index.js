import React, { useState } from "react";
import style from "./loginSeller.module.css";
import Logo from "../../../components/base/Logo";
import ButtonSellerCustommer from "../../../components/base/ButtonSellerCustommer";
import Input from "../../../components/base/Input";
import PrimaryButton from "../../../components/base/PrimaryButton";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../configs/redux/actions/userAction";
import { useHistory } from "react-router-dom";

const LoginSeller = (props) => {
 const [seller, setSeller] = useState({
   email: "",
   password: "",
 });
 const dispatch = useDispatch();
 const history = useHistory();

 const handleForm = (e) => {
   setSeller({ ...seller, [e.target.name]: e.target.value });
 };
 const loginSellerClick = () => {
   dispatch(loginUser(seller, history));
 };
    return (
      <div className={style.wrapper_content}>
        <Logo />
        <h2 className={style.text_login}>Please login with your account</h2>
        <ButtonSellerCustommer to="Login" />
        <Input
          className="email"
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => handleForm(e)}
        />
        <Input
          className="password"
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleForm(e)}
        />
        <a href={`/ResetPassword`} className={style.forgot}>
          Forgot password?
        </a>
        <PrimaryButton onClick={loginSellerClick} />
        <p className={style.account}>
          Don't have a Tokopedia account?
          <span>
            <a href={`/Register/Seller`} className={style.register}>
              Register
            </a>
          </span>
        </p>
      </div>
    );
  }


export default LoginSeller;
