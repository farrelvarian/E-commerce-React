import React, { useEffect, useState } from "react";
// import SliderMain from "../../components/module/sliderMain";
// import SliderCategory from "../../components/module/sliderCategory";
import Navbar from "../../components/module/NavbarBeforeLogin";
// import Card from "../../components/base/Card";
import "./style.css";

const Home = (props) => {
  return (
    <div className="container-page">
      <Navbar />
      <div class="container content-mybag">
        <div class="container-wrapper ">
          <h1 class="title">My bag</h1>
          <div class="container select ">
            <div class="select-items">
              <input
                class="checkbox10"
                type="checkbox"
                id="select"
                name="select"
                value="select"
              />
            </div>
            <h1 class="text-select" for="select">
              {" "}
              Select all items <span class="text-qty"> (2 items selected)</span>
            </h1>
            <a class="text-delete" href="#">
              Delete
            </a>
          </div>
          <div class="container item ">
            <div class="select-items">
              <input
                class="checkbox10"
                type="checkbox"
                id="item1"
                name="item1"
                value="item1"
              />
            </div>
            <img class="image" src=" ../assets/images/suit.svg " alt="suit" />
            <h1 class="text-name-product" for="item1 ">
              {" "}
              Men's formal suit - Black{" "}
              <span class="text-brand">Zalora Cloth</span>{" "}
            </h1>
            <button class="btn-minus">-</button>
            <h1 class="item-qty">1</h1>
            <button class="btn-plus">+</button>
            <h1 class="text-item-price">$ 20.0</h1>
          </div>
          <div class="container item">
            <div class="select-items">
              <input
                class="checkbox10"
                type="checkbox"
                id="item2"
                name="item2"
                value="item2"
              />
            </div>
            <img
              class="image"
              src=" ../assets/images/Jacket.svg "
              alt="jacket"
            />
            <h1 class="text-name-product" for="item2 ">
              {" "}
              Men's Jacket jeans <span class="text-brand">
                Zalora Cloth
              </span>{" "}
            </h1>
            <button class="btn-minus">-</button>
            <h1 class="item-qty">1</h1>
            <button class="btn-plus">+</button>
            <h1 class="text-item-price">$ 20.0</h1>
          </div>
        </div>
        <div class="container shopping">
          <h1 class="text-shopping-summary">Shopping summary</h1>
          <h1 class="text-total-price">
            Total prices<span class="text-dollar-price">$ 40.0</span>
          </h1>
          <a href="../checkout/index.html" class="btnBuy">
            BUY
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
