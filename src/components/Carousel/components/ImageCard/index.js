import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
    {
        name: "img 1",
        url: "https://fanart.tv/api/download.php?type=download&image=109899&section=2"
    },
    {
        name: "img 2",
        url: "https://williamsonsource.com/wp-content/uploads/2015/08/1619604_10152077710991832_747124050_n1.jpg"
    },
    {
        name: "img 3",
        url: "./components/ImageCard/assets/img/Som-do-avivamento.jpg"
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
        <div>
          <Slider {...settings}>
              {photos.map((photo) => {
                  return(
                      <div>
                          <img width="100%" src={photo.url}/>
                      </div>
                  );
              })}

          </Slider>
        </div>
      );
    }
  }