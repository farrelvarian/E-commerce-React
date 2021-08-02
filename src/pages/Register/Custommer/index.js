import React,{useState} from "react";
import style from "./RegisterCustommer.module.css";
import Logo from "../../../components/base/Logo";
import ButtonCustommerSeller from "../../../components/base/ButtonCustommerSeller";
import Input from "../../../components/base/Input";
import PrimaryButton from "../../../components/base/PrimaryButton";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../configs/redux/actions/userAction";
import { useHistory } from "react-router-dom";


const RegisterCustommer = () => {
  
  const [custommer, setCustommer] = useState({
    name: "",
    email: "",
    phone: "",
    store_name: "",
    password: "",
    role: "CUSTOMMER",
  });

  const dispatch = useDispatch()
  const history=useHistory()

  const handleForm = (e) => {
    setCustommer({ ...custommer, [e.target.name]: e.target.value });
    
  };
  const registerCustommerClick = () => {if (
    custommer.name === "" ||
    custommer.email === "" ||
    custommer.password === ""
  ) {
    alert("all of field mush be filled");
  } else {
     dispatch(registerUser(custommer, history));
  }
    ;}
  return (
    <div className={style.wrapper_content}>
      <Logo />
      <h2 className={style.text_register}>Please sign up with your account</h2>
      <ButtonCustommerSeller to="Register" />
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
        className="password"
        type="password"
        placeholder="Password"
        name="password"
        onChange={(e) => handleForm(e)}
      />

      <PrimaryButton onClick={registerCustommerClick} />
      <p className={style.account}>
        Already have a Tokopedia account?
        <span>
          <a href="/Login/Custommer" className={style.login}>
            Login
          </a>
        </span>
      </p>
    </div>
  );
};

export default RegisterCustommer;
