import React, { useState } from "react";
import style from "./loginCustommer.module.css";
import Logo from "../../../components/base/Logo";
import ButtonCustommerSeller from "../../../components/base/ButtonCustommerSeller";
import Input from "../../../components/base/Input";
import PrimaryButton from "../../../components/base/PrimaryButton";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../configs/redux/actions/userAction";
import { useHistory } from "react-router-dom";

const LoginCustommer = (props) => {
  const [custommer, setCustommer] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch()
  const history=useHistory()

  const handleForm = (e) => {
    setCustommer({ ...custommer, [e.target.name]: e.target.value });
  };
  const loginCustommerClick = () => {
    dispatch(loginUser(custommer,history))
    ;}
    return (
      <div className={style.wrapper_content}>
        <Logo />
        <h2 className={style.text_login}>Please login with your account</h2>
        <ButtonCustommerSeller to="Login" />
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
        <PrimaryButton onClick={loginCustommerClick} />
        <p className={style.account}>
          Don't have a Tokopedia account?
          <span>
            <a href={`/Register/Custommer`} className={style.register}>
              Register
            </a>
          </span>
        </p>
      </div>
    );
  }


export default LoginCustommer;
