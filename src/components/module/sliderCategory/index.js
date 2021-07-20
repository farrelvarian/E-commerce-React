import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import style from "./sliderCategory.module.css";
import Image1 from "../../../assets/image/sliderCategory/ctgr1.png";
import Image2 from "../../../assets/image/sliderCategory/ctgr2.png";
import Image3 from "../../../assets/image/sliderCategory/ctgr3.png";
import Image4 from "../../../assets/image/sliderCategory/ctgr4.png";
import Image5 from "../../../assets/image/sliderCategory/ctgr5.png";
import Image6 from "../../../assets/image/sliderCategory/ctgr6.png";
import Image7 from "../../../assets/image/sliderCategory/ctgr7.png";
import Image8 from "../../../assets/image/sliderCategory/ctgr8.png";
import Image9 from "../../../assets/image/sliderCategory/ctgr9.png";
import Image10 from "../../../assets/image/sliderCategory/ctgr10.png";
import Image11 from "../../../assets/image/sliderCategory/ctgr11.png";
import Image12 from "../../../assets/image/sliderCategory/ctgr12.png";
import Image13 from "../../../assets/image/sliderCategory/ctgr13.png";
import Image14 from "../../../assets/image/sliderCategory/ctgr14.png";
import Image15 from "../../../assets/image/sliderCategory/ctgr15.png";
import Image16 from "../../../assets/image/sliderCategory/ctgr16.png";
import "./style.css";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      className: "center",
      centerMode: "true",
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 6,
      centerPadding: "-40px",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            className: "center",
            slidesToShow: 2,
            slidesToScroll: 1,
            centerPadding: "-10px",
          },
        },
      ],
    };
    return (
      <div className={style.slider_wrapper}>
        <Slider {...settings}>
          <Link to={{ pathname: `/category/1` }}>
            <div className={`${style.content_slider} ${style.slider1}`}>
              <img src={Image1} className={style.clipme} />
              <h4 className={style.img_title}> T-Shirt </h4>
            </div>
          </Link>
          <Link to={{ pathname: `/category/2` }}>
            <div className={`${style.content_slider} ${style.slider2}`}>
              <img src={Image2} className={style.clipme} />
              <h4 className={style.img_title}> Shorts </h4>
            </div>
          </Link>
          <Link to={{ pathname: `/category/3` }}>
            <div className={`${style.content_slider} ${style.slider3}`}>
              <img src={Image3} className={style.clipme} />
              <h4 className={style.img_title}> Jacket </h4>
            </div>
          </Link>
          <Link to={{ pathname: `/category/4` }}>
            <div className={`${style.content_slider} ${style.slider4}`}>
              <img src={Image4} className={style.clipme} />
              <h4 className={style.img_title}> Pants </h4>
            </div>
          </Link>
          <Link to={{ pathname: `/category/5` }}>
            <div className={`${style.content_slider} ${style.slider5}`}>
              <img src={Image5} className={style.clipme} />
              <h4 className={style.img_title}> Shoes </h4>
            </div>
          </Link>
          <Link to={{ pathname: `/category/6` }}>
            <div className={`${style.content_slider} ${style.slider6}`}>
              <img src={Image6} className={style.clipme} />
              <h4 className={style.img_title}> High heels </h4>
            </div>
          </Link>
          <Link to={{ pathname: `/category/7` }}>
            <div className={`${style.content_slider} ${style.slider7}`}>
              <img src={Image7} className={style.clipme} />
              <h4 className={style.img_title}> Wristwatch </h4>
            </div>
          </Link>
          <Link to={{ pathname: `/category/8` }}>
            <div className={`${style.content_slider} ${style.slider8}`}>
              <img src={Image8} className={style.clipme} />
              <h4 className={style.img_title}> Handbag </h4>
            </div>
          </Link>
          <Link to={{ pathname: `/category/9` }}>
            <div className={`${style.content_slider} ${style.slider9}`}>
              <img src={Image9} className={style.clipme} />
              <h4 className={style.img_title}> Bagback </h4>
            </div>
          </Link>
          <Link to={{ pathname: `/category/10` }}>
            <div className={`${style.content_slider} ${style.slider10}`}>
              <img src={Image10} className={style.clipme} />
              <h4 className={style.img_title}> Socks </h4>
            </div>
          </Link>
          <Link to={{ pathname: `/category/11` }}>
            <div className={`${style.content_slider} ${style.slider11}`}>
              <img src={Image11} className={style.clipme} />
              <h4 className={style.img_title}> Glasses </h4>
            </div>
          </Link>
          <Link to={{ pathname: `/category/12` }}>
            <div className={`${style.content_slider} ${style.slider12}`}>
              <img src={Image12} className={style.clipme} />
              <h4 className={style.img_title}> Cap </h4>
            </div>
          </Link>
          <Link to={{ pathname: `/category/13` }}>
            <div className={`${style.content_slider} ${style.slider13}`}>
              <img src={Image13} className={style.clipme} />
              <h4 className={style.img_title}> Tie </h4>
            </div>
          </Link>
          <Link to={{ pathname: `/category/14` }}>
            <div className={`${style.content_slider} ${style.slider14}`}>
              <img src={Image14} className={style.clipme} />
              <h4 className={style.img_title}> Dress </h4>
            </div>
          </Link>
          <Link to={{ pathname: `/category/15` }}>
            <div className={`${style.content_slider} ${style.slider15}`}>
              <img src={Image15} className={style.clipme} />
              <h4 className={style.img_title}> Formal suit </h4>
            </div>
          </Link>
          <Link to={{ pathname: `/category/16` }}>
            <div className={`${style.content_slider} ${style.slider16}`}>
              <img src={Image16} className={style.clipme} />
              <h4 className={style.img_title}> Accessories </h4>
            </div>
          </Link>
        </Slider>
      </div>
    );
  }
}
