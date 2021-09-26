import axios from "axios";
import { BASE_URL } from "../../../configs/configs";
import { toastify } from "../../toastify/toastify";

export const cartBag = (data) => {
  const itemBuy = data;
  return { type: "CART", payload: itemBuy };
};
export const quantityPlus = () => {
  return { type: "QUANTITY_PLUS", payload: 1 };
};
export const deleteCart = () => {
  return { type: "DELETE_CART", payload: 0 };
};
export const quantityMinus = () => (dispatch, getState) => {
  const { order } = getState();
  const quantityNow = order.quantity;
  if (quantityNow > 0) {
    dispatch({ type: "QUANTITY_MINUS", payload: 1 });
  } else {
    dispatch({ type: "QUANTITY_MINUS", payload: 0 });
  }
};
export const orderData = (data) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    return axios
      .post(`${BASE_URL}payments`, data, config)
      .then((res) => {
        const result = res.data.data;
        dispatch({ type: "ORDER_DETAIL", payload: result });
        resolve(result);
        return result;
      })
      .catch((err) => {
        console.log(err.response);
        reject(err);
        toastify(err.response.data.message, "error");
      });
  });
};
export const orderItems = (data) => async (dispatch) => {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    return axios
      .post(`${BASE_URL}orders`, data, config)
      .then((res) => {
        const result = res.data.data;
        dispatch({ type: "ORDER_ITEM", payload: result });
        // localStorage.setItem('token', result.token)
        resolve(result);
        return result;
      })
      .catch((err) => {
        console.log(err.response);
        reject(err);
         toastify(err.response.data.message, "error");
      });
  });
};
