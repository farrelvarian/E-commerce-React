import React, { useState } from "react";
import style from "./RegisterSeller.module.css";
import Logo from "../../../components/base/Logo";
import ButtonSellerCustommer from "../../../components/base/ButtonSellerCustommer";
import Input from "../../../components/base/Input";
import PrimaryButton from "../../../components/base/PrimaryButton";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../configs/redux/actions/userAction";
import { useHistory } from "react-router-dom";
import { toastify } from "../../../configs/toastify/toastify";

const RegisterSeller = () => {
  const [seller, setSeller] = useState({
    name: "",
    email: "",
    phone: "",
    store_name: "",
    password: "",
    role: "SELLER",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleForm = (e) => {
    setSeller({ ...seller, [e.target.name]: e.target.value });
  };
  const registerSellerClick = () => {
    if (
      seller.name === "" ||
      seller.email === "" ||
      seller.phone === "" ||
      seller.store_name === "" ||
      seller.password === ""
    ) {
     toastify("all of field mush be filled", "error");
    } else {
      dispatch(registerUser(seller, history));
    }
  };
  return (
    <div className={style.wrapper_content}>
      <Logo />
      <h2 className={style.text_register}>Please sign up with your account</h2>
      <ButtonSellerCustommer to="Register" />
      <Input
        className="name"
        type="text"
        placeholder="Name"
        name="name"
        onChange={(e) => handleForm(e)}
      />
   
      <Input
        className="email"
        type="text"
        placeholder="Email"
        name="email"
        onChange={(e) => handleForm(e)}
      />
  
      <Input
        className="phoneNumber"
        type="number"
        placeholder="Phone Number"
        name="phone"
        onChange={(e) => handleForm(e)}
      />
   
      <Input
        className="storeName"
        type="text"
        placeholder="Store Name"
        name="store_name"
        onChange={(e) => handleForm(e)}
      />
     
      <Input
        className="password"
        type="password"
        placeholder="Password"
        name="password"
        onChange={(e) => handleForm(e)}
      />

      <PrimaryButton onClick={registerSellerClick} />
      <p className={style.account}>
        Already have a Tokopedia account?
        <span>
          <a href="/Login/Seller" className={style.login}>
            Login
          </a>
        </span>
      </p>
    </div>
  );
};

export default RegisterSeller;
