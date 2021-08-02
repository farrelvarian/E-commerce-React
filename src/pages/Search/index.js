/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import style from "./search.module.css";
import "./style.css";
// import Navbar from "../../components/module/NavbarBeforeLogin";
import Card from "../../components/base/Card";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "../../configs/configs";
const axios = require("axios");

const Home = (props) => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("field=createdAt&sort=DESC");
  const [Refresh, setRefresh] = useState(false);
  const Location = useLocation();

  let Search = ``;

  if (Location.search !== "") {
    Search = `${Location.search}&`;
  } else {
    Search = ``;
  }

  let urlQuery = `${BASE_URL}products${Search}${sort}`;
  console.log(urlQuery);

  const handleForm = (e) => {
    setSort(e.target.value);
    Refresh === true ? setRefresh(false) : setRefresh(true);
  };

  useEffect(() => {
    axios
      .get(`${urlQuery}`)
      .then((response) => {
        const { result } = response.data.data;
        setProducts(result);
        console.log(result);
      })
      .catch(console.error());
  }, [Refresh]);

  return (
    <div className={style.container}>
      {/* <Navbar /> */}
      <h1 className={style.text_title}>Search</h1>
      <h3 className={style.text_desc}>You’ve never seen it before!</h3>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">
            Urutkan
          </label>
        </div>
        <select
          class="custom-select"
          id="inputGroupSelect01"
          onChange={(e) => handleForm(e)}
        >
          <option selected value={"field=createdAt&sort=DESC"}>
            Terbaru
          </option>
          <option value={"field=price&sort=ASC"}>Harga Terendah</option>
          <option value={"field=price&sort=DESC"}>Harga Tertinggi</option>
        </select>
      </div>
      <div className={style.card_container}>
        <div className="row row-cols-2">
          {products.map((item) => (
            <Card
              to={item.id}
              image={item.image}
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

export default Home;
