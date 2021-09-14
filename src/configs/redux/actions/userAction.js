import { BASE_URL } from "../../../configs/configs";
import { toastify } from "../../toastify/toastify";
const axios = require("axios");

export const loginUser = (data,history) => (dispatch) => {
  axios
    .post(`${BASE_URL}login`, data)
    .then((result) => {
        const token = result.data.data.token;
        const id = result.data.data.id;
        const role = result.data.data.role;
         const name = result.data.data.name;
          const image = result.data.data.image;
          const address = result.data.data.address;
        const isAuth = true
    const dataUser = {
      data: result.data.data,
      error: result.data.error,
      message: result.data.message,
      status: result.data.status,
    //   isAuth: result.data.isAuth,
    };
      dispatch({ type: "POST_LOGIN", payload: dataUser });
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      localStorage.setItem("role", role);
      localStorage.setItem("name", name);
      localStorage.setItem("image", image);
      localStorage.setItem("address", address);
      localStorage.setItem("isAuth", isAuth);
      
      history.push("/")
       toastify("Success Login. Happy Shopping!", "success");
    })
    .catch((error)=>{toastify(error.response.data.message, "error");
  });
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
       toastify(
         "Success Register. Please check email to verification account",
         "info"
       );
    })
    .catch((error) => {
      toastify(error.response.data.message, "error");
    });
};
export const updateUser = (id,data, image) => (dispatch) => {
  const token = localStorage.getItem("token");
   const formData = new FormData();
   formData.append("name", data.name);
   formData.append("email", data.email);
   formData.append("password", data.password);
   formData.append("image", image);
   formData.append("phone", data.phone);
   formData.append("gender", data.gender);
   formData.append("dateOfBirth", data.dateOfBirth);
   formData.append("role", data.role);
   formData.append("store_name", data.store_name);
   formData.append("store_description", data.store_description);
   formData.append("status", data.status);
   formData.append("updateAt", data.updateAt);

   axios
     .put(`${BASE_URL}users/${id}`, formData, {
       headers: {
         Authorization: `Bearer ${token}`,
       },
     })
     .then((result) => {
       const image = result.data.data.image;
       const name = result.data.data.name;
        const address = result.data.data.address;
       const dataUser = {
         data: result.data.data,
         error: result.data.error,
         message: result.data.message,
         status: result.data.status,
       };
       dispatch({ type: "PUT_USER", payload: dataUser });
        localStorage.setItem("image", image);
        localStorage.setItem("name", name);
        localStorage.setItem("address", address);
       toastify("success update data", "success");
     })
     .catch((error) => { 
       toastify(error.response.data.message, "error");
    });
};
export const logoutUser = (history) => () => {
const isAuth = false;
const role = localStorage.getItem("role");
localStorage.setItem("isAuth", isAuth);
history.push(`/login/${role}`);
toastify("youre logged out, Bye!", "success");
};