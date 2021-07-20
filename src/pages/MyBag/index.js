import React, { useEffect, useState } from "react";
// import SliderMain from "../../components/module/sliderMain";
// import SliderCategory from "../../components/module/sliderCategory";
import Navbar from "../../components/module/NavbarAfterLogin";
// import Card from "../../components/base/Card";
import "./style.css";
import ImageProduct from "../../assets/image/image/item.png"

const MyBag = (props) => {
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
              {" "}
              Select all items{" "}
              <span className="text-qty"> (2 items selected)</span>
            </h1>
            <a className="text-delete" href="#">
              Delete
            </a>
          </div>
          <div className="container item-mybag ">
            <div className="select-items">
              <input
                className="checkbox10"
                type="checkbox"
                id="item1"
                name="item1"
                value="item1"
              />
            </div>
            <img className="image-mybag" src={ImageProduct} alt="suit" />
            <h1 className="text-name-product" for="item1 ">
              {" "}
              Men's formal suit - Black{" "}
              <span className="text-brand">Zalora Cloth</span>{" "}
            </h1>
            <button className="btn-minus">-</button>
            <h1 className="item-qty">1</h1>
            <button className="btn-plus">+</button>
            <h1 className="text-item-price">$ 20.0</h1>
          </div>
          <div className="container item-mybag">
            <div className="select-items">
              <input
                className="checkbox10"
                type="checkbox"
                id="item2"
                name="item2"
                value="item2"
              />
            </div>
            <img className="image-mybag" src={ImageProduct} alt="jacket" />
            <h1 className="text-name-product" for="item2 ">
              {" "}
              Men's Jacket jeans{" "}
              <span className="text-brand">Zalora Cloth</span>{" "}
            </h1>
            <button className="btn-minus">-</button>
            <h1 className="item-qty">1</h1>
            <button className="btn-plus">+</button>
            <h1 className="text-item-price">$ 20.0</h1>
          </div>
        </div>
        <div className="container shopping">
          <h1 className="text-shopping-summary">Shopping summary</h1>
          <h1 className="text-total-price">
            Total prices<span className="text-dollar-price">$ 40.0</span>
          </h1>
          <a href="../checkout/index.html" className="btnBuy">
            BUY
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyBag;
