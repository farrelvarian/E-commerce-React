import React, { useEffect, useState } from "react";
import style from "./category.module.css";
import Navbar from "../../components/module/NavbarAfterLogin";
import Card from "../../components/base/Card";
import "./style.css";
import { useParams } from "react-router-dom";
import {BASE_URL} from "../../configs/configs"
const axios = require("axios");

const Category = (props) => {
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  let { id } = useParams();


  useEffect(() => {
    axios
      .get(`${BASE_URL}products/category/${id}`)
      .then((response) => {
        const result = response.data.data;
        const categoryName = response.data.data[0].category;
        setCategories(result);
        setCategoryName(categoryName);
        // console.log(result[0].category);
      })
      .catch(console.error());
  }, );

  return (
    <div className={style.container}>
      <Navbar />
      <nav className="breadcrumb" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/Home">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/Category">Category</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {categoryName}
          </li>
        </ol>
      </nav>
    <h1 className={style.text_title}>  {categoryName} </h1>
      <div className={style.card_container}>
        <div className="row row-cols-2">
          {categories.map((item) => (
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

export default Category;
