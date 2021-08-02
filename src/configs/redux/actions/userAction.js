import { BASE_URL } from "../../../configs/configs";
const axios = require("axios");


export const loginUser = (data,history) => (dispatch) => {
  axios
    .post(`${BASE_URL}login`, data)
    .then((result) => {
        const token = result.data.data.token;
        const role = result.data.data.role;
        const isAuth = result.data.isAuth;
    const dataUser = {
      data: result.data.data,
      error: result.data.error,
      message: result.data.message,
      status: result.data.status,
      isAuth: result.data.isAuth,
    };
      dispatch({ type: "POST_LOGIN", payload: dataUser });
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("role", isAuth);
      console.log(token);
      history.push("/")
    })
    .catch((error)=>{alert(error.response.data.message);});
};
export const registerUser = (data, history) => (dispatch) => {
  axios
    .post(`${BASE_URL}register`, data)
    .then((result) => {
      const dataUser = {
        data: result.data.data,
        error: result.data.error,
        message: result.data.message,
        status: result.data.status,
      };
      dispatch({ type: "POST_REGISTER", payload: dataUser });
      history.push(`/login/${result.data.data.role}`);
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};