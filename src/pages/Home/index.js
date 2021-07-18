import React, { useEffect, useState } from "react";
import style from "./home.module.css";
import SliderMain from "../../components/module/sliderMain";
import SliderCategory from "../../components/module/sliderCategory";
import Navbar from "../../components/module/NavbarBeforeLogin";
import Card from "../../components/base/Card";
const axios = require("axios");

const Home = (props) => {
  const [products, setProducts] = useState([]);

  const url = "http://localhost:4000/";

  useEffect(() => {
    axios
      .get(`${url}products`)
      .then((response) => {
        const { result } = response.data.data;
        setProducts(result);
        console.log(result);
      })
      .catch(console.error());
  }, []);

  return (
    <div className={style.container}>
      <Navbar />
      <SliderMain />
      <h1 className={style.text_title}>Category</h1>
      <h3 className={style.text_desc}>What are you currently looking for</h3>
      <SliderCategory />
      <h1 className={style.text_title}>New</h1>
      <h3 className={style.text_desc}>You’ve never seen it before!</h3>
      <div className={style.card_container}>
        <div className="row row-cols-2">
          {products.map((item) => (
            <Card
              image={item.image}
              title={item.name}
              price={`$ ${item.price}.0`}
              brand={item.brand}
              rating="(10)"
            />
          ))}
        </div>
      </div>
      <h1 className={style.text_title}>Popular</h1>
      <h3 className={style.text_desc}>
        {" "}
        Find clothes that are trending recently
      </h3>
      <div className={style.card_container}>
        <div className="row row-cols-2">
          {products.map((item) => (
            <Card
              to={item.id}
              image={item.image}
              title={item.name}
              price={`$ ${item.price}.0`}
              brand={item.brand}
              rating="(10)"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
