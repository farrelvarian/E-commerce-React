/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Navbar from "../../components/module/NavbarAfterLogin";
import ButtonIncDec from "../../components/base/buttonIncDec";
import "./style.css";
import NoImage from "../../assets/image/image/foto.png";
// import Prev2 from "../../assets/image/page-product/prev2.png";
// import Prev3 from "../../assets/image/page-product/prev3.png";
// import Prev4 from "../../assets/image/page-product/prev4.png";
// import Prev5 from "../../assets/image/page-product/prev5.png";
import Star from "../../assets/image/logo/star.svg";
import Card from "../../components/base/Card";
import { useHistory, useParams } from "react-router-dom";
// import { BASE_URL } from "../../configs/configs";
import { useDispatch } from "react-redux";
import { pageProduct } from "../../configs/redux/actions/productAction";
import { myBag, checkout } from "../../configs/redux/actions/orderAction";
// const axios = require("axios");

const PageProduct = (props) => {
    const dispatch = useDispatch();
    const history = useHistory()
  // const token = localStorage.getItem("token");
  let { id } = useParams();
  const [products, setProducts] = useState({});
  const [categories, setCategories] = useState([]);
// console.log(products);
  useEffect( () => {
     dispatch(pageProduct(id, setProducts, setCategories));

  }, [id]);
 const handleMyBag = () => {
   dispatch(myBag(products, history));
   
 };
 const handleCheckout = () => {
   dispatch(checkout(products, history));
 };
  return (
    <div className="wrapper-pageProduct">
      <Navbar />
      <div className="container content-pageProduct">
        <div className="main">
          <div className="image-pageProduct">
            <img
              className="main-image-pageProduct"
              src={products.image1 ? products.image1 : NoImage}
              alt="main"
            />
            <div className="preview-image-wrapper-pageProduct">
              <img
                className="preview-image-pageProduct"
                src={products.image1 ? products.image1 : NoImage}
                alt="1"
              />
              <img
                className="preview-image-pageProduct"
                src={products.image2 ? products.image2 : NoImage}
                alt="2"
              />
              <img
                className="preview-image-pageProduct"
                src={products.image3 ? products.image3 : NoImage}
                alt="3"
              />
              <img
                className="preview-image-pageProduct"
                src={products.image4 ? products.image4 : NoImage}
                alt="4"
              />
              <img
                className="preview-image-pageProduct"
                src={products.image5?products.image5:NoImage}
                alt="5"
              />
            </div>
          </div>
          <div className="info">
            <h1 className="product-title-pageProduct">{products.name}</h1>
            <h4 className="brand-name-pageProduct">{products.brand}</h4>
            <div className="star-wrapper-pageProduct">
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <p className="rating">(10)</p>
            </div>
            <h4 className="text-product-price">price</h4>
            <h1 className="text-price">{`Rp ${products.price}`}</h1>
            <div className="color">
              <h3 className="text-color">Colors</h3>
              <div className="color-wrapper">
                <input
                  type="radio"
                  className="radio-color"
                  id="colorChoice1"
                  name="color"
                  value="1"
                ></input>
                <input
                  type="radio"
                  className="radio-color"
                  id="colorChoice2"
                  name="color"
                  value="2"
                ></input>
                <input
                  type="radio"
                  className="radio-color"
                  id="colorChoice3"
                  name="color"
                  value="3"
                ></input>
                <input
                  type="radio"
                  className="radio-color"
                  id="colorChoice4"
                  name="color"
                  value="4"
                ></input>
              </div>
              <div className="container-size-qty">
                <div>
                  <h3 class="text-size-qty">Size</h3>
                  <ButtonIncDec />
                </div>
                <div>
                  <h3 class="text-size-qty">Jumlah</h3>
                  <ButtonIncDec />
                </div>
              </div>

              <div className="btn-wrapper">
                <button type="button " className="btn btn-chat">
                  Chat
                </button>
                <button
                  type="button "
                  className="btn btn-addBag"
                  onClick={handleMyBag}
                >
                  Add bag
                </button>
                <button
                  type="button "
                  className="btn btn-buyNow"
                  onClick={handleCheckout}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="main-title">Informasi Produk</h1>
        <h2 className="main-title">Condition</h2>
        <h2 className="main-desc" id="condition">
          {products.status}
        </h2>
        <h2 className="main-title">Description</h2>
        <h4 className="main-desc" id="description">
          {products.description}
        </h4>
        <h1 className="main-title">Product review</h1>
        <div className="container-product-review">
          <div className="main-title">
            <div className="container-text-rating">
              <h1 className="text-rating-big">5.0</h1>
              <h4 className="text-rating-small">/10</h4>
            </div>
            <div className="main-star-wrapper">
              <img className="main-star" src={Star} alt="star" />
              <img className="main-star" src={Star} alt="star" />
              <img className="main-star" src={Star} alt="star" />
              <img className="main-star" src={Star} alt="star" />
              <img className="main-star" src={Star} alt="star" />
            </div>
          </div>
          <div className="main-title">
            <div className="rating-progress-wrapper">
              <img className="progress-star" src={Star} alt="star" />
              <h4 className="text-rating-star">5</h4>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h4 className="text-rating-star">4</h4>
            </div>
            <div className="rating-progress-wrapper">
              <img className="progress-star" src={Star} alt="star" />
              <h4 className="text-rating-star">4</h4>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h4 className="text-rating-star">0</h4>
            </div>
            <div className="rating-progress-wrapper">
              <img className="progress-star" src={Star} alt="star" />
              <h4 className="text-rating-star">3</h4>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h4 className="text-rating-star">0</h4>
            </div>
            <div className="rating-progress-wrapper">
              <img className="progress-star" src={Star} alt="star" />
              <h4 className="text-rating-star">2</h4>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h4 className="text-rating-star">0</h4>
            </div>
            <div className="rating-progress-wrapper">
              <img className="progress-star" src={Star} alt="star" />
              <h4 className="text-rating-star">1</h4>
              <div className="progress">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <h4 className="text-rating-star">0</h4>
            </div>
          </div>
        </div>
        <hr />
        <h1 className="text-title-main">You can also like this</h1>
        <h3 className="text-desc-main">You’ve never seen it before!</h3>
      </div>
      <div className="card_container">
        <div className="row row-cols-2">
          {categories.map((item) => (
            <Card
              to={item.id}
              image={item.image1}
              title={item.name}
              price={`Rp ${item.price}`}
              brand={item.brand}
              rating="(10)"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageProduct;
