import React from "react";
import Style from "./cardBox.module.css";
import PlusMinus from "../buttonIncDec";

const CardBox = (props) => {

  return (
    <div>
      <div className={Style.item}>
        <input
          className={`${
            props.type === "mybag" ? `${Style.formCheckItem}` : `${Style.check}`
          }`}
          type="checkbox"
          id="checkboxNoLabel"
          value=""
          aria-label="..."
        />
        <img className={Style.itemImage} src={props.image} alt="ItemBag" />
        <div className={Style.itemName}>
          <p className={Style.itemTitle}>{props.name}</p>
          <p className={Style.itemBrand}>{props.brand}</p>
        </div>
        <div
          className={`${
            props.type === "mybag" ? `${Style.itemAmount}` : `${Style.check}`
          }`}
        >
          <div className={`col ${Style.sizing}`}>
            <PlusMinus />
          </div>
        </div>
        <p className={Style.itemPrice}>Rp. {props.price}</p>
      </div>
    </div>
  );
};

export default CardBox;
