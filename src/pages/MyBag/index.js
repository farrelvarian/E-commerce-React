import React from "react";
import Navbar from "../../components/module/NavbarAfterLogin";
import CardBox from "../../components/base/CardBox";
import "./style.css";
// import ImageProduct from "../../assets/image/image/item.png"
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteCart } from "../../configs/redux/actions/orderAction";

const MyBag = () => {
  const { product, total } = useSelector((state) => state.order);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteCart());
  };
  const handleCheckout = () => {
    history.push("/checkout")
  };
  return (
    <div className="container-page">
      <Navbar />
      <div className="container content-mybag">
        <div className="container-wrapper ">
          <h1 className="title">My bag</h1>
          <div className="container select ">
            <div className="select-items">
              <input
                className="checkbox10"
                type="checkbox"
                id="select"
                name="select"
                value="select"
              />
            </div>
            <h1 className="text-select" for="select">
              Select all items
              <span className="text-qty">
                {" "}
                ({product.length} items selected)
              </span>
            </h1>
            <h1 className="text-delete" onClick={handleDelete}>
              Delete
            </h1>
          </div>
          {product.map((item) => (
            <CardBox
              name={item.name}
              brand={item.brand}
              image={item.image1}
              qty={item.qty}
              price={item.price}
              total={item.qty * item.price}
              type="mybag"
            />
          ))}
        </div>
        <div className="container shopping">
          <h1 className="text-shopping-summary">Shopping summary</h1>
          <h1 className="text-total-price">
            Total prices
            <span className="text-dollar-price">Rp. {total}</span>
          </h1>
          <button type="button" className="btnBuy" onClick={handleCheckout}>
            BUY
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyBag;
