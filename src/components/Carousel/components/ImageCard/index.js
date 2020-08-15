import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BannerImg, Banner, Banner2 } from './style';

const photos = [
  {
    name: "img 1",
    src: "https://fanart.tv/api/download.php?type=download&image=109899&section=2"
  },
  {
    name: "img 2",
    src: "https://williamsonsource.com/wp-content/uploads/2015/08/1619604_10152077710991832_747124050_n1.jpg"
  },
  {
    name: "img 3",
    src: "https://comunhao.com.br/wp-content/uploads/2018/03/Rend-Collective.jpg"
  }
]

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Banner>
          <Slider {...settings}>
              {photos.map((photo) => {
                  return(
                    <Banner2>
                      <BannerImg src={photo.src}/>
                    </Banner2>
                  );
              })}
          </Slider>
        </Banner>
      );
    }
  }