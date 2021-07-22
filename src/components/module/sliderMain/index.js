import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./sliderMain.module.css";
import Image1 from "../../../assets/image/slider/1.jpg";
import Image2 from "../../../assets/image/slider/2.jpg";
import Image3 from "../../../assets/image/slider/3.jpg";
import Image4 from "../../../assets/image/slider/4.jpg";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerMode: true,
      centerPadding: "-15px",
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
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: 0,
          },
        },
      ],
    };
    return (
      <div className={style.slider_wrapper}>
        <Slider {...settings}>
          <div className={style.content_slider}>
            <img src={Image1} className={style.clipme} alt="Girls corner" />
            <h4 className={style.img_title}> Girls corner </h4>
          </div>
          <div className={style.content_slider}>
            <img src={Image2} className={style.clipme} alt="Trend in 2020" />
            <h4 className={style.img_title}> Trend in 2020 </h4>
          </div>
          <div className={style.content_slider}>
            <img src={Image3} className={style.clipme} alt="Black edition" />
            <h4 className={style.img_title}> Black edition </h4>
          </div>
          <div className={style.content_slider}>
            <img src={Image4} className={style.clipme} alt="Formal suit" />
            <h4 className={style.img_title}> Formal suit </h4>
          </div>
        </Slider>
      </div>
    );
  }
}
