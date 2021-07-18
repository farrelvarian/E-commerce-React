import React, { Component } from "react";
import style from "./card.module.css";
import { ReactComponent as StarImage } from "../../../assets/image/logo/star.svg";
import "./style.css";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <div className="col col-sm-4 col-md-3 col-md-24">
        <div href="#" className="card">
          <Link to={{ pathname: `/product/${this.props.to}` }}>
            <img src={this.props.image} className="card-img-top" />
            <div className="card-body">
              <h5 className={style.card_title}>{this.props.title}</h5>
              <p className={style.card_price}>{this.props.price}</p>
              <p className={style.card_brand}>{this.props.brand}</p>
              <div className={style.star_wrapper}>
                <StarImage />
                <StarImage />
                <StarImage />
                <StarImage />
                <StarImage />
                <p className={style.ratings}>{this.props.rating}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default Card;
